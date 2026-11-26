import family from "./naruto.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "naruto-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "naruto",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
