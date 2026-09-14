import assert from "node:assert/strict";
import test from "node:test";
import { webpSize, wallpaperSize } from "../scripts/wallpaper-layout.mjs";

function riff(kind, payload) {
  const header = Buffer.alloc(20);
  header.write("RIFF", 0);
  header.writeUInt32LE(12 + payload.length, 4);
  header.write("WEBP", 8);
  header.write(kind, 12);
  header.writeUInt32LE(payload.length, 16);
  return Buffer.concat([header, payload]);
}

test("reads extended, lossy and lossless native dimensions", () => {
  const extended = Buffer.alloc(10);
  extended.writeUIntLE(599, 4, 3);
  extended.writeUIntLE(899, 7, 3);
  assert.deepEqual(webpSize(riff("VP8X", extended)), [600, 900]);
  const lossy = Buffer.alloc(10);
  lossy.writeUInt16LE(900, 6);
  lossy.writeUInt16LE(600, 8);
  assert.deepEqual(webpSize(riff("VP8 ", lossy)), [900, 600]);
  const lossless = Buffer.alloc(5);
  lossless[0] = 0x2f;
  lossless.writeUInt32LE(719 | (899 << 14), 1);
  assert.deepEqual(webpSize(riff("VP8L", lossless)), [720, 900]);
});

test("rejects missing and truncated dimension data", () => {
  assert.throws(() => webpSize(Buffer.from("not a webp")), /Expected a WebP/);
  assert.throws(() => webpSize(riff("VP8X", Buffer.alloc(10)).subarray(0, 25)), /Truncated/);
  assert.throws(() => webpSize(riff("JUNK", Buffer.alloc(2))), /not found/);
});

test("height bounds account for portrait and landscape ratios without stretching", () => {
  assert.equal(wallpaperSize([600, 900]), "min(42vw, 560px, 54.6667vh) auto");
  assert.equal(wallpaperSize([600, 900], 60), "min(42vw, 560px, 40vh) auto");
  assert.equal(wallpaperSize([900, 600]), "min(42vw, 560px, 123vh) auto");
  assert.throws(() => wallpaperSize([0, 900]), /Invalid/);
});
