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
    const payload = JSON.stringify(assets);
    const hash = createHash("sha256").update(payload).digest("hex").slice(0, 12);
    const name = `client.assets-${entry.id}-${hash}.js`;
    const source = `// Generated theme image data; run npm run build.\nwindow.__ModuleLoader__.load({\n  id: "dsh-themes",\n  chunk: ${JSON.stringify(name)},\n  factory: () => ({ assets: ${payload} }),\n});\n`;
    chunks.set(name, source);
    files.push(`./${name}`);
    return JSON.parse(json);
  });
  const source = `(() => {
  const entries = ${JSON.stringify(entries, null, 2)};
  const files = ${JSON.stringify(files)};
  let pending;
  Object.defineProperty(entries, "loadAssets", { value: () => {
    if (pending) return pending;
    pending = Promise.all(files.map((file) => file ? require.async(file) : null)).then((loaded) => {
      const restore = (value, assets) => {
        if (!value || typeof value !== "object") return value;
        if (Object.hasOwn(value, "$dshAsset")) return assets[value.$dshAsset];
        for (const key of Object.keys(value)) value[key] = restore(value[key], assets);
        return value;
      };
      entries.forEach((entry, index) => restore(entry, loaded[index]?.assets));
    }).catch((error) => { pending = null; throw error; });
    return pending;
  } });
  return entries;
})()`;
  return { source, chunks };
}
