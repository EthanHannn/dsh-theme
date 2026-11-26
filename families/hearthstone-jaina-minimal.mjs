import family from "./hearthstone-jaina.mjs";

export default {
  id: "hearthstone-jaina-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "hearthstone-jaina",
  legacyFamilies: [
    { id: "hearthstone-lich-king-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
