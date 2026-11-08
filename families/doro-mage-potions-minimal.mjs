import family from "./doro-mage-potions.mjs";

export default {
  id: "doro-mage-potions-minimal",
  sortKey: `${family.sortKey}-minimal`,
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "doro-mage-potions",
  legacyFamilies: [
    { id: "doro-mage-cloud-bakery-minimal" },
    { id: "doro-mage-moonmail-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
