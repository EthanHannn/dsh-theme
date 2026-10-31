const layoutKeys = ["wallpaperSize", "wallpaperPosition", "heroTranslate", "heroMaxWidth"];

// 变体只携带图片与构图，主题配色仍由原来的皮肤提供。
export function buildArtworkVariants(family, { assetValue, dimensions, pals, headerTokens }) {
  if (family.artworks === undefined) return [];
  if (!Array.isArray(family.artworks) || !(family.styles ?? ["minimal", "vivid"]).includes("vivid")) {
    throw new Error(`${family.id}: artworks requires a vivid family and an array`);
  }
  const ids = new Set(["original"]);
  return family.artworks.map((variant) => {
    if (!variant || typeof variant.id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(variant.id) || ids.has(variant.id) || !["zh", "en"].every((lang) => typeof variant.names?.[lang] === "string" && variant.names[lang].trim())) {
      throw new Error(`${family.id}: artwork variants need unique ids and bilingual names`);
    }
    ids.add(variant.id);
    const prefix = `${family.id}-${variant.id}`;
    const modes = {};
    let hasAsset = false;
    for (const mode of ["light", "dark"]) {
      const tokens = {};
      const wallpaper = assetValue(`${prefix}-${mode}`);
      if (wallpaper) {
        const size = dimensions(`${prefix}-${mode}`);
        if (!(size?.width > 0 && size?.height > 0)) throw new Error(`${prefix}-${mode}: invalid wallpaper dimensions`);
        tokens["--dsw-pack-wallpaper"] = wallpaper;
        tokens["--dsw-pack-wallpaper-ratio"] = String(size.width / size.height);
      }
      const banner = assetValue(`${prefix}-banner-${mode}`) ?? assetValue(`${prefix}-banner`);
      if (banner) {
        tokens["--dsw-pack-panel"] = banner;
        Object.assign(tokens, headerTokens("banner", (variant.decor?.headerArt ?? family.decor?.headerArt)?.bakedHorizontalFade === true));
      }
      const folder = assetValue(`${prefix}-folder-${mode}`);
      const open = assetValue(`${prefix}-folder-open-${mode}`);
      if (folder) tokens["--dsw-pack-folder"] = folder;
      if (open || folder) tokens["--dsw-pack-folder-open"] = open ?? folder;
      const props = assetValue(`${prefix}-props-${mode}`) ?? assetValue(`${prefix}-props`);
      if (props) {
        tokens["--dsw-pack-scene-props"] = props;
        tokens["--dsw-pack-scene-props-secondary"] = "none";
        tokens["--dsw-pack-scene-props-size"] = "contain";
      }
      modes[mode] = tokens;
      hasAsset ||= Object.keys(tokens).length > 0;
    }
    const decor = {};
    const images = pals(prefix);
    if (images.length) { decor.pals = images; hasAsset = true; }
    if (variant.decor?.phrases) decor.phrases = variant.decor.phrases;
    for (const key of layoutKeys) {
      if (Object.hasOwn(variant.decor ?? {}, key)) {
        if (typeof variant.decor[key] !== "string") throw new Error(`${prefix}: ${key} must be a string`);
        decor[key] = variant.decor[key];
      }
    }
    if (!hasAsset) throw new Error(`${prefix}: no artwork assets found`);
    return { id:variant.id, names:variant.names, modes, decor };
  });
}
