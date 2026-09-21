import family from "./dragon-maid.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "dragon-maid-minimal",
  names: { zh: "小林家的龙女仆·简约", en: "Miss Kobayashi's Dragon Maid · Minimal" },
  kin: "dragon-maid",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
