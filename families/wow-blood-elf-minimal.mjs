import family from "./wow-blood-elf.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "wow-blood-elf-minimal",
  names: { zh: "魔兽世界·血精灵·简约", en: "WoW Blood Elf · Minimal" },
  kin: "wow-blood-elf",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
