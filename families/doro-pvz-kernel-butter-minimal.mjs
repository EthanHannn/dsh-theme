import family from "./doro-pvz-kernel-butter.mjs";

export default {
  id: "doro-pvz-kernel-butter-minimal",
  sortKey: `${family.sortKey}-minimal`,
  names: {
    zh: `${family.names.zh} · 简约`,
    en: `${family.names.en} · Minimal`,
  },
  kin: "doro-pvz-kernel-butter",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
