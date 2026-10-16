import family from "./doro-chef-hearth.mjs";

export default {
  id: "doro-chef-hearth-minimal",
  sortKey: `${family.sortKey}-minimal`,
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "doro-chef-hearth",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
