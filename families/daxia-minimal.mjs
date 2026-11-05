import family from "./daxia.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "daxia-minimal",
  sortKey: `${family.sortKey}-minimal`,
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "daxia",
  legacyFamilies: [
    { id: "guga-doro-bamboo-tea-minimal" },
    { id: "guga-doro-rain-ferry-minimal" },
    { id: "guga-doro-snow-inn-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
