import { createHash } from "node:crypto";

/** Keep image bytes in package-local chunks supported by Harness's module loader. */
export function bundleCatalog(catalog) {
  const chunks = new Map();
  const files = [];
  const entries = catalog.map((entry) => {
    const assets = [];
    const indices = new Map();
    const json = JSON.stringify(entry, (_key, value) => {
      if (typeof value !== "string" || !value.includes("data:image/")) return value;
      if (!indices.has(value)) {
        indices.set(value, assets.length);
        assets.push(value);
      }
      return { $dshAsset: indices.get(value) };
    });
    if (assets.length === 0) {
      files.push(null);
      return JSON.parse(json);
    }
    // Keep every script small: Windows Defender's script heuristics can
    // quarantine a multi-megabyte one-line JS file full of base64 image data
    // as Trojan:Script/ObfusScript.A!ml, which then breaks the whole theme
    // catalog because a required chunk is missing. Splitting per entry keeps
    // each artifact in a harmless, ordinary range.
    const groups = [];
    const MAX_CHUNK_BYTES = 1024 * 1024;
    const MAX_CHUNK_ASSETS = 16;
    const totalBytes = assets.reduce((sum, value) => sum + Buffer.byteLength(value, "utf8"), 0);
    if (totalBytes <= MAX_CHUNK_BYTES) {
      groups.push(assets);
    } else {
      let group = [];
      let groupBytes = 0;
      for (const value of assets) {
        const bytes = Buffer.byteLength(value, "utf8");
        if (group.length > 0 && (groupBytes + bytes > MAX_CHUNK_BYTES || group.length >= MAX_CHUNK_ASSETS)) {
          groups.push(group);
          group = [];
          groupBytes = 0;
        }
        group.push(value);
        groupBytes += bytes;
      }
      if (group.length > 0) groups.push(group);
    }

    const groupFiles = groups.map((part, index) => {
      const payload = JSON.stringify(part);
      const hash = createHash("sha256").update(payload).digest("hex").slice(0, 12);
      const name = index === 0
        ? `client.assets-${entry.id}-${hash}.js`
        : `client.assets-${entry.id}-p${index + 1}-${hash}.js`;
      const source = `// Generated theme image data; run npm run build.\nwindow.__ModuleLoader__.load({\n  id: "dsh-themes",\n  chunk: ${JSON.stringify(name)},\n  factory: () => ({ assets: ${payload} }),\n});\n`;
      chunks.set(name, source);
      return `./${name}`;
    });
    files.push(groupFiles);
    return JSON.parse(json);
  });
  const source = `(() => {
  const entries = ${JSON.stringify(entries, null, 2)};
  const files = ${JSON.stringify(files)};
  let pending;
  Object.defineProperty(entries, "loadAssets", { value: () => {
    if (pending) return pending;
    pending = Promise.all(files.map((parts) => parts ? Promise.all(parts.map((file) => require.async(file))).then((loaded) => loaded.flatMap((chunk) => chunk.assets)) : null)).then((loaded) => {
      const restore = (value, assets) => {
        if (!value || typeof value !== "object") return value;
        if (Object.hasOwn(value, "$dshAsset")) return assets[value.$dshAsset];
        for (const key of Object.keys(value)) value[key] = restore(value[key], assets);
        return value;
      };
      entries.forEach((entry, index) => restore(entry, loaded[index]));
    }).catch((error) => { pending = null; throw error; });
    return pending;
  } });
  return entries;
})()`;
  return { source, chunks };
}
