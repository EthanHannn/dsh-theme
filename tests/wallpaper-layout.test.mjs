import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";
import { webpDimensions } from "../scripts/wallpaper-layout.mjs";

test("wallpaper dimensions cover every shipped light and dark skin", () => {
  const root = new URL("../themes/", import.meta.url);
  for (const name of readdirSync(root).filter((name) => name.endsWith("-vivid.json"))) {
    const skin = JSON.parse(readFileSync(new URL(name, root)));
    const file = name.replace("-vivid.json", ".webp");
    const { width, height } = webpDimensions(readFileSync(new URL(`../families/assets/${file}`, import.meta.url)));
    assert.ok(width > 0 && height > 0, file);
    assert.equal(Number(skin.tokens["--dsw-pack-wallpaper-ratio"]), width / height, file);
  }
});

test("WebP variants and padded metadata chunks preserve dimensions", () => {
  function container(type, data) {
    const header = Buffer.alloc(12);
    header.write("RIFF");
    header.write("WEBP", 8);
    const chunk = Buffer.alloc(8);
    chunk.write(type);
    chunk.writeUInt32LE(data.length, 4);
    return Buffer.concat([header, Buffer.from("JUNK\x01\x00\x00\x00\x00\x00", "binary"), chunk, data]);
  }
  const extended = Buffer.alloc(10);
  extended.writeUIntLE(599, 4, 3);
  extended.writeUIntLE(899, 7, 3);
  const lossy = Buffer.alloc(10);
  lossy.writeUInt16LE(600, 6);
  lossy.writeUInt16LE(900, 8);
  const lossless = Buffer.alloc(5);
  lossless.writeUInt32LE(599 | (899 << 14), 1);
  for (const [type, data] of [["VP8X", extended], ["VP8 ", lossy], ["VP8L", lossless]]) {
    assert.deepEqual(webpDimensions(container(type, data)), { width: 600, height: 900 });
  }
  assert.throws(() => webpDimensions(Buffer.from("invalid")), /Invalid/);
  assert.throws(() => webpDimensions(container("VP8X", extended).subarray(0, -1)), /Truncated/);
});
