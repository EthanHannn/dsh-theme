/** Read native WebP dimensions without decoding or adding a build dependency. */
export function webpSize(bytes) {
  if (bytes.toString("ascii", 0, 4) !== "RIFF" || bytes.toString("ascii", 8, 12) !== "WEBP") {
    throw new Error("Expected a WebP image");
  }
  for (let offset = 12; offset + 8 <= bytes.length;) {
    const kind = bytes.toString("ascii", offset, offset + 4);
    const length = bytes.readUInt32LE(offset + 4);
    const start = offset + 8;
    if (start + length > bytes.length) throw new Error("Truncated WebP chunk");
    if (kind === "VP8X" && length >= 10) {
      return [bytes.readUIntLE(start + 4, 3) + 1, bytes.readUIntLE(start + 7, 3) + 1];
    }
    if (kind === "VP8 " && length >= 10) {
      return [bytes.readUInt16LE(start + 6) & 0x3fff, bytes.readUInt16LE(start + 8) & 0x3fff];
    }
    if (kind === "VP8L" && length >= 5 && bytes[start] === 0x2f) {
      const bits = bytes.readUInt32LE(start + 1);
      return [(bits & 0x3fff) + 1, ((bits >>> 14) & 0x3fff) + 1];
    }
    offset = start + length + (length % 2);
  }
  throw new Error("WebP dimensions not found");
}

/** Limit width by native aspect ratio so portrait art fits the viewport height. */
export function wallpaperSize([width, height], heightPercent = 82) {
  if (width <= 0 || height <= 0) throw new Error("Invalid wallpaper dimensions");
  const heightBound = Number((heightPercent * width / height).toFixed(4));
  return `min(42vw, 560px, ${heightBound}vh) auto`;
}
