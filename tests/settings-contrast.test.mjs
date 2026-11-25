import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";

const themeRoot = new URL("../themes/", import.meta.url);
const skins = readdirSync(themeRoot).filter((name) => name.endsWith(".json"))
  .map((name) => ({ name, ...JSON.parse(readFileSync(new URL(name, themeRoot), "utf8")) }));
const source = readFileSync(new URL("../lib/client.tpl.js", import.meta.url), "utf8");
const css = source.split("const PAGE_CSS = `")[1].split("`;")[0];

function color(value) {
  if (/^#[\da-f]{6}$/i.test(value)) return [1, 3, 5].map((offset) => parseInt(value.slice(offset, offset + 2), 16) / 255).concat(1);
  const match = value.match(/^rgba?\(([^)]+)\)$/);
  assert.ok(match, `Unsupported color: ${value}`);
  const channels = match[1].split(",").map(Number);
  return channels.slice(0, 3).map((channel) => channel / 255).concat(channels[3] ?? 1);
}
function over(front, back) {
  return front.slice(0, 3).map((channel, index) => channel * front[3] + back[index] * (1 - front[3])).concat(1);
}
function luminance(value) {
  return value.slice(0, 3).map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
    .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
}
function contrast(front, back) {
  const values = [luminance(front), luminance(back)].sort((a, b) => a - b);
  return (values[1] + 0.05) / (values[0] + 0.05);
}
function propertyToken(selector, property) {
  const rule = css.split(`${selector} {`)[1]?.split("}")[0];
  assert.ok(rule, `Missing rule: ${selector}`);
  const declaration = rule.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${property}:`));
  const token = declaration?.match(/var\((--[\w-]+)/)?.[1];
  assert.ok(token, `Missing ${property} token in ${selector}`);
  return token;
}

test("settings control text stays readable across every skin and interaction state", () => {
  const segment = ".dsh-theme-page .dsh-theme-segment button";
  const apply = ".dsh-theme-page .dsh-theme-actions .dsh-theme-apply";
  const states = [
    ["segment rest", propertyToken(segment, "color"), propertyToken(".dsh-theme-segment", "background")],
    ["library tabs", propertyToken(".dsh-theme-page .dsh-theme-tabs > button", "color"), propertyToken(".dsh-theme-tabs", "background")],
    ["selected tab", propertyToken(".dsh-theme-page .dsh-theme-tabs > button[aria-selected=true]", "color"), propertyToken(".dsh-theme-page .dsh-theme-tabs > button[aria-selected=true]", "background")],
    ["favorite star", propertyToken(".dsh-theme-page .dsh-theme-favorite", "color"), propertyToken(".dsh-theme-page .dsh-theme-favorite", "background")],
    ...[`${segment}:hover:not(:disabled)`, `${segment}[aria-pressed=true]`, ".dsh-theme-page button:hover:not(:disabled)", ".dsh-theme-page .dsh-theme-switch:hover:not(:disabled)", ".dsh-theme-help summary:hover", apply, `${apply}:hover:not(:disabled)`]
      .map((selector) => [selector, propertyToken(selector, "color"), propertyToken(selector, "background")]),
    ["card metadata hover", "--dsw-alias-label-secondary", propertyToken(".dsh-theme-page button:hover:not(:disabled)", "background")],
    ["rotation panel", propertyToken(".dsh-theme-collection-panel", "color"), propertyToken(".dsh-theme-collection-panel", "background")],
    ["rotation helper text", propertyToken(".dsh-theme-collection-note", "color"), propertyToken(".dsh-theme-collection-panel", "background")],
    ["rotation help popover", propertyToken(".dsh-theme-rotation-help", "color"), propertyToken(".dsh-theme-rotation-help", "background")],
    ["rotation playlist pill", propertyToken(".dsh-theme-page .dsh-theme-playlist-pill", "color"), propertyToken(".dsh-theme-page .dsh-theme-playlist-pill", "background")],
    ["rotation select", propertyToken(".dsh-theme-page select", "color"), propertyToken(".dsh-theme-page select", "background")],
    ...[".dsh-theme-collection > summary", ".dsh-theme-collection > summary:hover", ".dsh-theme-page select:hover"]
      .map((selector) => [selector, propertyToken(selector, "color"), propertyToken(selector, "background")]),
  ];
  for (const skin of skins) {
    const tokens = skin.tokens;
    const paper = color(tokens["--dsw-pack-paper"]);
    for (const substrate of ["--dsw-pack-paper", "--dsw-alias-bg-overlay", "--dsw-alias-bg-layer-2"]) {
      const base = over(color(tokens[substrate]), paper);
      for (const [state, foreground, background] of states) {
        const back = over(color(tokens[background]), base);
        const ratio = contrast(over(color(tokens[foreground]), back), back);
        assert.ok(ratio >= 4.5, `${skin.name}: ${state} on ${substrate} = ${ratio.toFixed(2)}:1`);
      }
    }
  }
});

test("dark interaction washes do not wash out secondary text when nested", () => {
  for (const skin of skins.filter((entry) => entry.colorScheme === "dark")) {
    const tokens = skin.tokens;
    const paper = color(tokens["--dsw-pack-paper"]);
    const hover = color(tokens["--dsw-alias-interactive-bg-hover"]);
    const background = over(hover, over(hover, paper));
    const ratio = contrast(color(tokens["--dsw-alias-label-secondary"]), background);
    assert.ok(ratio >= 4.5, `${skin.name}: nested dark hover = ${ratio.toFixed(2)}:1`);
  }
});

test("tooltip and toast text stays readable on their theme surfaces", () => {
  for (const skin of skins) {
    const tokens = skin.tokens;
    const paper = color(tokens["--dsw-pack-paper"]);
    for (const [surface, label] of [
      ["--dsw-alias-tooltip-bg", "--dsw-alias-tooltip-label"],
      ["--dsw-alias-toast-bg", "--dsw-alias-toast-label"],
    ]) {
      const back = over(color(tokens[surface]), paper);
      const ratio = contrast(over(color(tokens[label]), back), back);
      assert.ok(ratio >= 4.5, `${skin.name}: ${label} on ${surface} = ${ratio.toFixed(2)}:1`);
    }
  }
});

test("fine-control help popover anchors to the full-width row, not the 28px question button", () => {
  const rule = (selector) => {
    const body = css.split(`${selector} {`)[1]?.split("}")[0];
    assert.ok(body, `Missing rule: ${selector}`);
    return body;
  };
  assert.match(rule(".dsh-theme-advanced-clarity"), /position:relative/);
  assert.doesNotMatch(rule(".dsh-theme-help"), /position:relative/);
  assert.match(rule(".dsh-theme-clarity-help"), /width:min\(280px,100%\)/);
});

test("theme count sits before the filter switch so the switch never shifts", () => {
  const rule = css.split(".dsh-theme-count {")[1]?.split("}")[0];
  assert.ok(rule, "Missing .dsh-theme-count rule");
  assert.match(rule, /order:-1/);
  assert.match(rule, /flex:none/);
});
