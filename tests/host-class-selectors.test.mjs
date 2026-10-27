import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(new URL("../lib/client.js", import.meta.url), "utf8");

/** True when a CSS-module class attribute carries `suffix` as one of its classes. */
function carriesClass(classes, suffix) {
  return classes.split(/\s+/).some((name) => name.endsWith(suffix));
}

/** Pull the selectors the client ships for one CSS-module local name. */
function selectorsFor(localName) {
  return [...source.matchAll(/\[class[$*]="[^"]*"\]/g)]
    .map((match) => match[0])
    // A trailing space is the "… and something follows" form of a class match.
    .filter((selector) => literalOf(selector).trimEnd().endsWith(`_${localName}`));
}

/** The literal class-text a `[class$=…]` / `[class*=…]` selector tests for. */
function literalOf(selector) {
  return /^\[class([$*])="([^"]*)"\]$/.exec(selector)[2];
}

/**
 * Evaluate one shipped selector against a class attribute string, the way the
 * browser does: `$=` compares the whole attribute, `*=` is a substring test.
 */
function matchesSelector(selector, classes) {
  const match = /^\[class([$*])="([^"]*)"\]$/.exec(selector);
  return match[1] === "$" ? classes.endsWith(match[2]) : classes.includes(match[2]);
}

// Harness composes CSS-module classes, so an element's class attribute is often
// `<hash>_localPart <hash>_otherPart`. Ends-with matching silently breaks the
// moment upstream adds a class, which is how the nameplate regressed in 0.2.1.
const COMPOSED_NAME = `Rxi9Va_localBuildBrand Rxi9Va_copyVersion`;
const COMPOSED_BUTTON = `Rxi9Va_iconButton Rxi9Va_toggle`;

test("the local-build nameplate keeps matching after the host composes classes", () => {
  const selectors = selectorsFor("localBuildBrand");
  assert.ok(selectors.length > 0, "client.js must ship a nameplate selector");
  assert.ok(
    carriesClass(COMPOSED_NAME, "_localBuildBrand"),
    "the fixture must model the harness's composed class list",
  );
  assert.ok(
    selectors.some((selector) => matchesSelector(selector, COMPOSED_NAME)),
    `no nameplate selector matches ${COMPOSED_NAME}`,
  );
});

test("shipped class selectors still match a bare, uncomposed class", () => {
  // The fix must not regress the plain case: same local name, no extra class.
  for (const [localName, bare] of [
    ["localBuildBrand", "abc123_localBuildBrand"],
    ["localBuildTitle", "abc123_localBuildTitle"],
    ["buildVersion", "abc123_buildVersion"],
    ["newSessionLabel", "abc123_newSessionLabel"],
    ["iconButton", "abc123_iconButton"],
  ]) {
    const selectors = selectorsFor(localName);
    assert.ok(selectors.length > 0, `missing selector for ${localName}`);
    assert.ok(
      selectors.some((selector) => matchesSelector(selector, bare)),
      `no selector for ${localName} matches the bare class ${bare}`,
    );
  }
});

test("composed-class selectors do not over-match neighbouring class names", () => {
  // `_newSessionLabel` and `_newSessionLabelMask` share a prefix, so a bare
  // contains-match would leak the label's ink onto the mask wrapper.
  const mask = "abc123_newSessionLabelMask";
  const label = "abc123_newSessionLabel abc123_wide";
  const selectors = selectorsFor("newSessionLabel");
  for (const selector of selectors) {
    assert.ok(!matchesSelector(selector, mask), `${selector} must not match ${mask}`);
  }
  assert.ok(
    selectors.some((selector) => matchesSelector(selector, label)),
    "the composed new-session label must still take the dark-skin ink",
  );
  assert.ok(carriesClass(COMPOSED_BUTTON, "_iconButton"));
  assert.ok(
    selectorsFor("iconButton").some((selector) => matchesSelector(selector, COMPOSED_BUTTON)),
    `no iconButton selector matches ${COMPOSED_BUTTON}`,
  );
});
