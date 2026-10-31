import assert from "node:assert/strict";
import test from "node:test";
import { buildArtworkVariants } from "../scripts/artwork-variants.mjs";
import { bundleCatalog } from "../scripts/catalog-bundle.mjs";
import vm from "node:vm";

function fixture() {
  const assets = new Map([
    ["forest-rain-light", 'url("data:image/webp;base64,bGlnaHQ=")'],
    ["forest-rain-dark", 'url("data:image/webp;base64,ZGFyaw==")'],
    ["forest-rain-banner-light", "url(banner-light.webp)"],
    ["forest-rain-props", "url(props.webp)"],
  ]);
  const family = { id:"forest", styles:["vivid"], decor:{ headerArt:{ bakedHorizontalFade:true } }, artworks:[{ id:"rain", names:{ zh:"雨景", en:"Rain" }, decor:{ wallpaperSize:"360px", phrases:{ zh:["下雨了。"], en:["Rain is falling."] } } }] };
  const helpers = {
    assetValue:(name) => assets.get(name) ?? null,
    dimensions:() => ({ width:600, height:800 }),
    pals:() => [],
    headerTokens:(kind, faded) => ({ "--dsw-pack-header-art-size":kind === "banner" ? "cover" : "contain", "--dsw-pack-header-art-mask":faded ? "fade" : "none" }),
  };
  return { family, helpers, assets };
}

test("artwork variants build paired mode assets and inherit missing artwork without palette tokens", () => {
  const { family, helpers } = fixture();
  const [variant] = buildArtworkVariants(family, helpers);
  assert.equal(variant.id, "rain");
  assert.match(variant.modes.light["--dsw-pack-wallpaper"], /bGlnaHQ=/);
  assert.match(variant.modes.dark["--dsw-pack-wallpaper"], /ZGFyaw==/);
  assert.equal(variant.modes.light["--dsw-pack-wallpaper-ratio"], "0.75");
  assert.equal(variant.modes.light["--dsw-pack-header-art-mask"], "fade");
  assert.equal(variant.modes.dark["--dsw-pack-panel"], undefined);
  assert.equal(variant.modes.dark["--dsw-pack-scene-props"], "url(props.webp)");
  assert.equal(variant.decor.wallpaperSize, "360px");
  assert.equal(variant.decor.phrases.zh[0], "下雨了。");
  assert.equal(Object.keys(variant.modes.light).some((key) => /paper|accent|signature/.test(key.replace("wallpaper", ""))), false);
  assert.deepEqual(buildArtworkVariants({ id:"plain" }, helpers), []);
});

test("invalid variants fail the build instead of shipping broken selections", () => {
  for (const mutation of [
    ({ family }) => { family.artworks[0].id = "original"; },
    ({ family }) => { family.artworks.push({ ...family.artworks[0] }); },
    ({ family }) => { family.artworks[0].id = "../outside"; },
    ({ family }) => { delete family.artworks[0].names.en; },
    ({ family }) => { family.styles = ["minimal"]; },
    ({ assets }) => { assets.clear(); },
    ({ helpers }) => { helpers.dimensions = () => null; },
  ]) {
    const data = fixture();
    mutation(data);
    assert.throws(() => buildArtworkVariants(data.family, data.helpers));
  }
});

test("variant image bytes survive the catalog chunk and restore cycle", async () => {
  const { family, helpers } = fixture();
  const catalog = [{ id:family.id, artworks:buildArtworkVariants(family, helpers) }];
  const { source, chunks } = bundleCatalog(catalog);
  assert.ok(!source.includes("data:image/"));
  let loaded;
  const window = { __ModuleLoader__:{ load:({ factory }) => { loaded = factory(); } } };
  const require = { async:async () => {
    vm.runInNewContext([...chunks.values()][0], { window });
    return loaded;
  } };
  const restored = vm.runInNewContext(source, { require });
  await restored.loadAssets();
  assert.deepEqual(JSON.parse(JSON.stringify(restored)), catalog);
});
