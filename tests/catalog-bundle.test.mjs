import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
import { bundleCatalog } from "../scripts/catalog-bundle.mjs";

const uri = "data:image/webp;base64,UklGRg==";
const catalog = [
  { id: "a", names: { zh: "甲", en: "A" }, decor: { pals: [uri] }, skins: [{ tokens: { wallpaper: `url("${uri}")`, folder: `url("${uri}")` } }] },
  { id: "a-minimal", decor: { pals: [] }, skins: [{ tokens: { wallpaper: "none" } }] },
];

function load(bundle, requireAsync) {
  return vm.runInNewContext(bundle.source, { require: { async: requireAsync } });
}

test("image chunks restore the exact catalog before theme registration", async () => {
  const bundle = bundleCatalog(catalog);
  assert.equal(bundle.chunks.size, 1);
  assert.ok(!bundle.source.includes(uri));
  let requests = 0;
  const entries = load(bundle, async (file) => {
    requests++;
    let assets;
    vm.runInNewContext(bundle.chunks.get(file.slice(2)), {
      window: { __ModuleLoader__: { load: ({ id, chunk, factory }) => {
        assert.equal(id, "dsh-themes");
        assert.equal(chunk, file.slice(2));
        assets = factory();
      } } },
    });
    assert.equal(assets.assets.length, 2);
    return assets;
  });
  const tokens = entries[0].skins[0].tokens;
  await Promise.all([entries.loadAssets(), entries.loadAssets()]);
  assert.equal(requests, 1);
  assert.equal(tokens, entries[0].skins[0].tokens);
  assert.deepEqual(JSON.parse(JSON.stringify(entries)), catalog);
  await entries.loadAssets();
  assert.equal(requests, 1);
});

test("large image entries split into bounded chunks and restore in order", async () => {
  const big = (suffix) => `data:image/webp;base64,${"A".repeat(700 * 1024)}${suffix}`;
  const largeCatalog = [{
    id: "large",
    skins: [{ tokens: { wallpaper: `url("${big("1")}")`, panel: `url("${big("2")}")` } }],
  }];
  const bundle = bundleCatalog(largeCatalog);
  assert.equal(bundle.chunks.size, 2);
  for (const [name, source] of bundle.chunks) {
    assert.ok(Buffer.byteLength(source) < 800 * 1024, `${name} stays below 800 KiB`);
  }
  const requested = [];
  const entries = load(bundle, async (file) => {
    requested.push(file);
    let assets;
    vm.runInNewContext(bundle.chunks.get(file.slice(2)), {
      window: { __ModuleLoader__: { load: ({ factory }) => { assets = factory(); } } },
    });
    return assets;
  });
  await entries.loadAssets();
  assert.equal(requested.length, 2);
  assert.deepEqual(JSON.parse(JSON.stringify(entries)), largeCatalog);
});

test("failed chunk loads remain retryable and content names remain stable", async () => {
  const bundle = bundleCatalog(catalog);
  assert.deepEqual(bundle, bundleCatalog(catalog));
  let failed = true;
  const entries = load(bundle, async () => {
    if (failed) throw Error("offline");
    return { assets: [uri, `url("${uri}")`] };
  });
  await assert.rejects(entries.loadAssets(), /offline/);
  failed = false;
  await entries.loadAssets();
  assert.deepEqual(JSON.parse(JSON.stringify(entries)), catalog);
  const changed = structuredClone(catalog);
  changed[0].decor.pals.push(uri + "new");
  assert.notEqual([...bundle.chunks.keys()][0], [...bundleCatalog(changed).chunks.keys()][0]);
});
