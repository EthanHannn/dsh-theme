import family from "./sumikko-teahouse.mjs";

export default {
  id: "sumikko-teahouse-minimal",
  names: { zh: "角落小伙伴 · 角落慢时光 · 简约", en: "Sumikko Gurashi · Cozy Corner Days · Minimal" },
  kin: "sumikko-teahouse",
  legacyFamilies: [
    { id: "sumikko-bakery-minimal" },
    { id: "sumikko-rainy-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
