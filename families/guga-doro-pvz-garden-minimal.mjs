import family from "./guga-doro-pvz-garden.mjs";

export default {
  id: "guga-doro-pvz-garden-minimal",
  sortKey: `${family.sortKey}-minimal`,
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "guga-doro-pvz-garden",
  legacyFamilies: [
    { id: "guga-doro-pvz-moonwatch-minimal" },
    { id: "guga-doro-pvz-pool-minimal" },
    { id: "guga-doro-pvz-rooftop-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
