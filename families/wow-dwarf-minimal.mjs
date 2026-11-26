import family from "./wow-dwarf.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "wow-dwarf-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "wow-dwarf",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
