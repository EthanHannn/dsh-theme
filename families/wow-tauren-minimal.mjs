import family from "./wow-tauren.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "wow-tauren-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "wow-tauren",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
