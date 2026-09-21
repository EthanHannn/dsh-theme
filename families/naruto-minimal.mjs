import family from "./naruto.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "naruto-minimal",
  names: { zh: "火影忍者·简约", en: "Naruto · Minimal" },
  kin: "naruto",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
