import family from "./guga-doro-together.mjs";

export default {
  id: "guga-doro-together-minimal",
  sortKey: `${family.sortKey}-minimal`,
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "guga-doro-together",
  legacyFamilies: [
    { id: "guga-doro-starlamp-minimal" },
    { id: "guga-doro-cafe-minimal" },
    { id: "guga-doro-hotpot-minimal" },
    { id: "guga-doro-coop-minimal" },
    { id: "guga-doro-camping-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
