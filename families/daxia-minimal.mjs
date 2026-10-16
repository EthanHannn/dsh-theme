import family from "./daxia.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "daxia-minimal",
  sortKey: `${family.sortKey}-minimal`,
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "daxia",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
