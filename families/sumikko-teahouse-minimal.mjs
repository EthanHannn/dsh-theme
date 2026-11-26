import family from "./sumikko-teahouse.mjs";

export default {
  id: "sumikko-teahouse-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "sumikko-teahouse",
  legacyFamilies: [
    { id: "sumikko-bakery-minimal" },
    { id: "sumikko-rainy-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
