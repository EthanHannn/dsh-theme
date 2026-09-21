import family from "./wow-dwarf.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "wow-dwarf-minimal",
  names: { zh: "魔兽世界·矮人战士·简约", en: "WoW Dwarf Warrior · Minimal" },
  kin: "wow-dwarf",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
