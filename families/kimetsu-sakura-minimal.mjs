import family from "./kimetsu-sakura.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "kimetsu-sakura-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "kimetsu-sakura",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
