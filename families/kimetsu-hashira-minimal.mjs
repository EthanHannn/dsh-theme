import family from "./kimetsu-hashira.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "kimetsu-hashira-minimal",
  names: { zh: "鬼灭之刃·柱之誓约·简约", en: "Demon Slayer · Hashira Oath · Minimal" },
  kin: "kimetsu-hashira",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
