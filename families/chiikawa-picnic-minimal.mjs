import family from "./chiikawa-picnic.mjs";

export default {
  id: "chiikawa-picnic-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "chiikawa-picnic",
  legacyFamilies: [
    { id: "chiikawa-stargaze-minimal" },
    { id: "chiikawa-bakery-minimal" },
    { id: "chiikawa-rainy-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
