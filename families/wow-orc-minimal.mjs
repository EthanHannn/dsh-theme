import family from "./wow-orc.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "wow-orc-minimal",
  names: { zh: "魔兽世界·兽人战士·简约", en: "WoW Orc Warrior · Minimal" },
  kin: "wow-orc",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
