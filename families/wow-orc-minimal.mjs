import family from "./wow-orc.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "wow-orc-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "wow-orc",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
