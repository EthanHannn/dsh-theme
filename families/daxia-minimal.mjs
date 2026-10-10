import family from "./daxia.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "daxia-minimal",
  sortKey: `${family.sortKey}-minimal`,
  names: { zh: "咕嘎 Doro·江湖大侠·简约", en: "Guga & Doro · Jianghu Heroes · Minimal" },
  kin: "daxia",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
