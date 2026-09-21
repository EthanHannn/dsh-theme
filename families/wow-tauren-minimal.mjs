import family from "./wow-tauren.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "wow-tauren-minimal",
  names: { zh: "魔兽世界·牛头人德鲁伊·简约", en: "WoW Tauren Druid · Minimal" },
  kin: "wow-tauren",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
