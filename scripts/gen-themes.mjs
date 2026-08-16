// dsh-themes — theme pack generator.
//
// Single source of truth for every theme family in the pack. Each file in
// families/ exports one family: `{ id, names: { zh, en }, light: {…params},
// dark: {…params} }`. This script expands each family's parameters into the
// full --dsw-* token vocabulary that the harness ThemeRuntime consumes
// (neutral ramp + static accent ramps + alias layer + specific surfaces +
// shiki syntax slots), writes per-skin token tables to themes/*.json, and
// embeds the whole catalog into lib/client.js from lib/client.tpl.js.
//
// Adding a new theme = dropping one file into families/ and re-running
// this script. No dependencies, Node 20+.
//
// Usage: node scripts/gen-themes.mjs

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Literal CSS color-mix string: `pct`% of `color` over `base`. */
const mix = (color, pct, base) => `color-mix(in srgb, ${color} ${pct}%, ${base})`;

/**
 * Expand the 11 anchor stops of a neutral ramp into the full 21-stop
 * vocabulary (midpoints are 50% mixes of the adjacent anchors), keyed by
 * stop name.
 */
function expandRamp(a) {
  return {
    "00": a["00"],
    "50": mix(a["00"], 50, a["60"]),
    "60": a["60"],
    "75": mix(a["60"], 50, a["100"]),
    "100": a["100"],
    "150": mix(a["100"], 50, a["200"]),
    "200": a["200"],
    "250": mix(a["200"], 50, a["300"]),
    "300": a["300"],
    "400": mix(a["300"], 50, a["500"]),
    "500": a["500"],
    "550": mix(a["500"], 50, a["600"]),
    "600": a["600"],
    "700": mix(a["600"], 50, a["750"]),
    "750": a["750"],
    "800": mix(a["750"], 50, a["850"]),
    "850": a["850"],
    "875": mix(a["850"], 50, a["900"]),
    "900": a["900"],
    "950": mix(a["900"], 50, a["1000"]),
    "1000": a["1000"],
  };
}

/** Build the complete token table for one skin from its parameters. */
function buildTokens(mode, p) {
  const light = mode === "light";
  const r = expandRamp(p.ramp);
  // Tint bases, following the reference token sheets: tints aimed at the
  // paper mix toward the light end of the ramp, tints aimed at depth mix
  // toward the dark end (900 on light skins, 850 on dark skins).
  const lo = r["00"];
  const hi = light ? r["900"] : r["850"];
  const t = {};

  // -- neutral ramp (plain + bluish twins) -------------------------------
  for (const [stop, value] of Object.entries(r)) {
    t[`--dsw-static-neutral-bluish-${stop}`] = value;
    t[`--dsw-static-neutral-${stop}`] = value;
  }

  // -- static accent ramps ------------------------------------------------
  // brand ramp (the harness's own "deepseek" slots, reclaimed for the family brand)
  t["--dsw-static-deepseek-50"] = mix(p.brand, light ? 60 : 55, lo);
  t["--dsw-static-deepseek-100"] = mix(p.brand, light ? 40 : 35, lo);
  t["--dsw-static-deepseek-200"] = p.brandSoft;
  t["--dsw-static-deepseek-300"] = mix(p.brand, light ? 75 : 70, light ? lo : hi);
  t["--dsw-static-deepseek-400"] = p.brand;
  t["--dsw-static-deepseek-450"] = p.brand;
  t["--dsw-static-deepseek-500"] = p.brand;
  t["--dsw-static-deepseek-600"] = mix(p.brand, light ? 65 : 60, hi);
  t["--dsw-static-deepseek-800"] = mix(p.brand, 30, hi);
  t["--dsw-static-deepseek-900"] = mix(p.brand, light ? 18 : 20, hi);
  t["--dsw-static-deepseek-700-delete"] = mix(p.brand, 45, hi);

  // blue ramp (links / info)
  t["--dsw-static-blue-50"] = mix(p.blue, 55, lo);
  t["--dsw-static-blue-75"] = mix(p.blue, 35, lo);
  t["--dsw-static-blue-100"] = mix(p.blue, light ? 28 : 25, lo);
  t["--dsw-static-blue-300"] = mix(p.blue, light ? 78 : 75, light ? lo : hi);
  t["--dsw-static-blue-400"] = mix(p.blue, light ? 88 : 85, light ? lo : hi);
  t["--dsw-static-blue-450"] = p.brand;
  t["--dsw-static-blue-500"] = p.brand;
  t["--dsw-static-blue-600"] = mix(p.blue, 70, hi);
  t["--dsw-static-blue-800"] = mix(p.blue, 50, hi);
  t["--dsw-static-blue-900"] = mix(p.blue, 35, hi);
  t["--dsw-static-blue-950"] = mix(p.blue, 25, hi);
  t["--dsw-static-blue-50p"] = mix(p.blue, light ? 48 : 45, lo);

  // green ramp (success)
  t["--dsw-static-green-100"] = mix(p.success, light ? 35 : 30, lo);
  t["--dsw-static-green-400"] = mix(p.success, light ? 80 : 75, light ? lo : hi);
  t["--dsw-static-green-500"] = p.success;
  t["--dsw-static-green-900"] = mix(p.success, 35, hi);

  // red ramp (error)
  t["--dsw-static-red-50"] = mix(p.error, light ? 45 : 40, lo);
  t["--dsw-static-red-100"] = mix(p.error, light ? 28 : 25, lo);
  t["--dsw-static-red-400"] = mix(p.error, light ? 78 : 75, light ? lo : hi);
  t["--dsw-static-red-500"] = p.error;
  t["--dsw-static-red-600"] = mix(p.error, light ? 68 : 65, hi);
  t["--dsw-static-red-900"] = mix(p.error, 35, hi);

  // amber ramp (warning)
  t["--dsw-static-amber-100"] = mix(p.amberSoft, light ? 35 : 30, lo);
  t["--dsw-static-amber-400"] = mix(p.amberSoft, light ? 88 : 85, light ? lo : hi);
  t["--dsw-static-amber-500"] = p.amber;
  t["--dsw-static-amber-600"] = p.amber;
  t["--dsw-static-amber-900"] = mix(p.amber, 40, hi);

  // -- signature accents ---------------------------------------------------
  // Family-specific signature variables (--dsw-gnd-*, --dsw-csm-*, …),
  // emitted verbatim so per-family token tables stay stable.
  for (const [key, value] of Object.entries(p.signature)) {
    t[key] = value;
  }
  // Pack-wide generic accents: the surface-tint rules in lib/client.tpl.js
  // reference these so the rules work unchanged for every family.
  t["--dsw-pack-accent"] = p.brand;
  t["--dsw-pack-accent-soft"] = p.brandSoft;

  // -- alias layer ---------------------------------------------------------
  t["--dsw-alias-bg-base"] = p.bgBase;
  t["--dsw-alias-bg-layer-1"] = p.layer1;
  t["--dsw-alias-bg-layer-2"] = p.layer2;
  t["--dsw-alias-bg-layer-3"] = p.layer3;
  t["--dsw-alias-bg-overlay"] = p.overlay;
  t["--dsw-alias-bg-mask-1"] = p.masks[0];
  t["--dsw-alias-bg-mask-2"] = p.masks[1];
  t["--dsw-alias-bg-mask-3"] = p.masks[2];
  t["--dsw-alias-bg-module-platform"] = p.layer2;
  t["--dsw-alias-bg-multi-select"] = p.layer2;
  t["--dsw-alias-bg-skeleton"] = p.skeleton;
  t["--dsw-alias-border-l1"] = p.borders[0];
  t["--dsw-alias-border-l2"] = p.borders[1];
  t["--dsw-alias-border-l3"] = p.borders[2];
  t["--dsw-alias-border-l4"] = p.borders[3];
  t["--dsw-alias-label-primary"] = p.textPrimary;
  t["--dsw-alias-label-secondary"] = p.textSecondary;
  t["--dsw-alias-label-tertiary"] = p.textTertiary;
  t["--dsw-alias-label-caption"] = p.textTertiary;
  t["--dsw-alias-label-dimmed"] = p.textTertiary;
  t["--dsw-alias-brand-primary"] = p.brand;
  t["--dsw-alias-brand-text"] = p.brandText;
  t["--dsw-alias-button-primary-hover"] = p.brandHover;
  t["--dsw-alias-button-primary-dimmed"] = p.layer2;
  t["--dsw-alias-button-elevated-fill"] = p.elevatedFill;
  t["--dsw-alias-button-floating-fill"] = p.floatingFill;
  t["--dsw-alias-button-floating-hover"] = p.floatingHover;
  t["--dsw-alias-button-ghost-active-border"] = p.ghostBorder;
  t["--dsw-alias-button-ghost-active-fill"] = p.ghostFill;
  t["--dsw-alias-button-ghost-active-hover"] = p.ghostHover;
  t["--dsw-alias-state-business-primary"] = p.brand;
  t["--dsw-alias-state-business-tertiary"] = p.layer2;
  t["--dsw-alias-state-error-primary"] = p.error;
  t["--dsw-alias-state-error-secondary"] = p.error;
  t["--dsw-alias-state-success-primary"] = p.success;
  t["--dsw-alias-state-success-secondary"] = p.success;
  t["--dsw-alias-state-success-tertiary"] = p.layer2;
  t["--dsw-alias-state-warn-label"] = p.warnLabel;
  t["--dsw-alias-state-warn-primary"] = p.warn;
  t["--dsw-alias-state-warn-secondary"] = p.warn;
  t["--dsw-alias-state-warn-tertiary"] = p.layer2;
  t["--dsw-alias-interactive-bg-hover"] = p.interactive.hover;
  t["--dsw-alias-interactive-bg-active"] = p.interactive.active;
  t["--dsw-alias-interactive-bg-hover-accent"] = p.interactive.hoverAccent;
  t["--dsw-alias-interactive-bg-hover-danger"] = p.interactive.hoverDanger;
  t["--dsw-alias-interactive-bg-hover-solid"] = p.interactive.hoverSolid;
  t["--dsw-alias-markdown-code-block"] = p.md.codeBlock;
  t["--dsw-alias-markdown-code-block-banner"] = p.md.banner;
  t["--dsw-alias-markdown-code-segment-selected"] = p.md.segSelected;
  t["--dsw-alias-markdown-code-segment-unselected"] = p.md.segUnselected;
  t["--dsw-alias-markdown-citation"] = p.layer2;
  t["--dsw-alias-markdown-inline-code"] = p.layer2;
  t["--dsw-alias-markdown-placeholder"] = p.layer2;
  t["--dsw-alias-markdown-tag"] = p.layer2;
  t["--dsw-alias-toast-bg"] = p.toastBg;
  t["--dsw-alias-tooltip-bg"] = p.tooltipBg;
  t["--dsw-alias-separator-primary"] = p.separator;
  t["--dsw-alias-scrollbar-bg-l1"] = p.scrollbar[0];
  t["--dsw-alias-scrollbar-bg-l2"] = p.scrollbar[1];
  t["--dsw-alias-scrollbar-hover-l1"] = p.scrollbar[2];
  t["--dsw-alias-scrollbar-hover-l2"] = p.scrollbar[2];
  t["--dsw-alias-bg-mask-photo"] = "rgba(0, 0, 0, 0.88)";
  t["--dsw-alias-bg-mask-drop"] = p.maskDrop;
  t["--dsw-alias-border-inverted"] = p.borderInverted[0];
  t["--dsw-alias-border-inverted2"] = p.borderInverted[1];
  t["--dsw-alias-border-l2-darkmode-thin"] = p.borderThin;
  t["--dsw-alias-brand-primary-invert"] = p.brandInvert;
  t["--dsw-alias-brand-primary-new-colorprimary-new-color"] = p.brand;
  t["--dsw-alias-button-contrast-fill"] = p.brandInvert;
  t["--dsw-alias-button-info-fill"] = p.brand;
  t["--dsw-alias-button-info-hover"] = p.infoHover;
  t["--dsw-alias-button-primary-fill"] = p.brand;
  t["--dsw-alias-button-tool-bar-fill"] = p.toolbar[0];
  t["--dsw-alias-button-tool-bar-fill-invisible"] = p.toolbar[1];
  t["--dsw-alias-button-tool-bar-hover"] = p.toolbar[2];
  t["--dsw-alias-label-primary-bluish"] = p.textPrimary;
  t["--dsw-alias-label-primary-dimmed"] = p.textSecondary;
  t["--dsw-alias-label-primary-foreground"] = p.labelForeground;
  t["--dsw-alias-label-primary-inverted"] = p.labelInverted;

  // -- specific surfaces ---------------------------------------------------
  t["--dsw-specific-sidebar-fill"] = p.sidebar.fill;
  t["--dsw-specific-sidebar-nav-item-active"] = p.sidebar.active;
  t["--dsw-specific-sidebar-nav-item-active-accent"] = p.sidebar.activeAccent;
  t["--dsw-specific-sidebar-nav-item-hover"] = p.sidebar.hover;
  t["--dsw-specific-bubble"] = p.layer2;
  t["--dsw-specific-bubble-highlight"] = p.bubbleHighlight;
  t["--dsw-specific-input-major"] = p.inputMajor;
  t["--dsw-specific-login-input"] = p.loginInput;
  t["--dsw-specific-menu"] = p.layer2;
  t["--dsw-specific-selector"] = p.selector;
  t["--dsw-specific-tip"] = p.layer2;

  // -- shiki syntax slots ----------------------------------------------------
  t["--shiki-foreground"] = p.shiki.foreground;
  t["--shiki-background"] = p.shiki.background;
  t["--shiki-token-constant"] = p.shiki.constant;
  t["--shiki-token-string"] = p.shiki.string;
  t["--shiki-token-comment"] = p.shiki.comment;
  t["--shiki-token-keyword"] = p.shiki.keyword;
  t["--shiki-token-parameter"] = p.shiki.parameter;
  t["--shiki-token-function"] = p.shiki.function;
  t["--shiki-token-string-expression"] = p.shiki.string;
  t["--shiki-token-punctuation"] = p.shiki.punctuation;
  t["--shiki-token-link"] = p.shiki.link;

  return t;
}

// ---------------------------------------------------------------------------

// Discover families (sorted filenames → deterministic output).
const familyDir = join(root, "families");
const familyFiles = readdirSync(familyDir).filter((f) => f.endsWith(".mjs")).sort();
if (familyFiles.length === 0) throw new Error("families/ holds no .mjs files");

// Every skin must expose the identical shared token vocabulary. Family
// signature variables (--dsw-gnd-*, --dsw-csm-*, …) differ per family by
// design, so they are excluded from the comparison.
const built = [];
const catalog = [];
for (const file of familyFiles) {
  const family = (await import(pathToFileURL(join(familyDir, file)).href)).default;
  if (!family?.id || !family.names?.zh || !family.names?.en || !family.light || !family.dark) {
    throw new Error(`families/${file}: must export { id, names: { zh, en }, light, dark }`);
  }
  const skins = ["light", "dark"].map((mode) => ({
    id: `${family.id}-${mode}`,
    name: `${family.names.en} ${mode === "light" ? "Light" : "Dark"}`,
    colorScheme: mode,
    tokens: buildTokens(mode, family[mode]),
  }));
  for (const skin of skins) {
    built.push({ skin, signatureKeys: Object.keys(family[skin.colorScheme].signature) });
  }
  catalog.push({ id: family.id, names: family.names, skins });
}

const sharedKeys = ({ skin, signatureKeys }) =>
  Object.keys(skin.tokens).filter((k) => !signatureKeys.includes(k)).sort();
const reference = sharedKeys(built[0]);
for (const entry of built) {
  const keys = sharedKeys(entry);
  if (JSON.stringify(keys) !== JSON.stringify(reference)) {
    const missing = reference.filter((k) => !keys.includes(k));
    const extra = keys.filter((k) => !reference.includes(k));
    throw new Error(`${entry.skin.id}: token mismatch (missing: ${missing}; extra: ${extra})`);
  }
}

mkdirSync(join(root, "themes"), { recursive: true });
for (const { skins } of catalog) {
  for (const skin of skins) {
    const file = join(root, "themes", `${skin.id}.json`);
    writeFileSync(file, JSON.stringify(skin, null, 2) + "\n");
    console.log(`wrote themes/${skin.id}.json (${Object.keys(skin.tokens).length} tokens)`);
  }
}

const template = readFileSync(join(root, "lib", "client.tpl.js"), "utf8");
if (!template.includes("__CATALOG__")) {
  throw new Error("lib/client.tpl.js is missing the __CATALOG__ placeholder");
}
const embedded = JSON.stringify(catalog, null, 2)
  .split("\n")
  .map((line, i) => (i === 0 ? line : "    " + line))
  .join("\n");
writeFileSync(join(root, "lib", "client.js"), template.replace("__CATALOG__", embedded));
console.log(`wrote lib/client.js (${catalog.length} families, ${catalog.reduce((n, f) => n + f.skins.length, 0)} skins)`);
