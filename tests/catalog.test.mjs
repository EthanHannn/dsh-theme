import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("../families/", import.meta.url);
const families = await Promise.all(readdirSync(root).filter((file) => file.endsWith(".mjs")).map(async (file) => (await import(new URL(file, root))).default));
const categories = JSON.parse(readFileSync(new URL("categories.json", root), "utf8"));

test("every vivid family has one minimal companion sharing its base palette", () => {
  for (const family of families.filter((entry) => entry.styles.includes("vivid"))) {
    const companions = families.filter((entry) => entry.kin === family.id);
    assert.equal(companions.length, 1, `${family.id} needs exactly one minimal companion`);
    const [minimal] = companions;
    assert.deepEqual(minimal.styles, ["minimal"]);
    assert.equal(minimal.light, family.light);
    assert.equal(minimal.dark, family.dark);
    assert.equal(minimal.vivid, undefined);
    assert.equal(minimal.decor, undefined);
    assert.ok(categories[minimal.kin]);
  }
});

const STANDALONE_MINIMAL_IDS = new Set(["aizome", "beeswax", "celadon", "garnet", "matcha", "slate", "umber"]);

test("family display names follow bilingual hierarchy and middle-dot spacing conventions", () => {
  const byId = new Map(families.map((entry) => [entry.id, entry]));
  for (const family of families) {
    for (const lang of ["zh", "en"]) {
      const name = family.names[lang];
      assert.equal(/[^ ]·|·[^ ]/.test(name), false, `${family.id} (${lang}) has tight middle dot: ${name}`);
      assert.equal(name, name.trim(), `${family.id} (${lang}) has leading/trailing spaces`);
    }
    if (!family.kin) {
      assert.equal(
        family.names.zh.split(" · ").length,
        family.names.en.split(" · ").length,
        `${family.id}: zh/en hierarchy depth mismatch (${family.names.zh} vs ${family.names.en})`,
      );
    } else if (!STANDALONE_MINIMAL_IDS.has(family.id)) {
      const parent = byId.get(family.kin);
      assert.equal(family.names.zh, `${parent.names.zh} · 简约`, `${family.id}: minimal zh name must derive from parent`);
      assert.equal(family.names.en, `${parent.names.en} · Minimal`, `${family.id}: minimal en name must derive from parent`);
    }
  }
});
