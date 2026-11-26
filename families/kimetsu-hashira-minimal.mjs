import family from "./kimetsu-hashira.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "kimetsu-hashira-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "kimetsu-hashira",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
