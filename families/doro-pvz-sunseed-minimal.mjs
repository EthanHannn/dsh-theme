import family from "./doro-pvz-sunseed.mjs";

export default {
  id: "doro-pvz-sunseed-minimal",
  sortKey: "guga-doro-03-pvz-05-sunseed-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "doro-pvz-sunseed",
  legacyFamilies: [
    { id: "doro-pvz-pea-practice-minimal" },
    { id: "doro-pvz-walnut-workshop-minimal" },
    { id: "doro-pvz-magnet-salvage-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
