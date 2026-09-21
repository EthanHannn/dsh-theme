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
