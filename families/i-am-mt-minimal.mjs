import family from "./i-am-mt.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "i-am-mt-minimal",
  names: { zh: "我叫MT·简约", en: "I Am MT · Minimal" },
  kin: "i-am-mt",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
