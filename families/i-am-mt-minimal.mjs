import family from "./i-am-mt.mjs";

// 共用基础配色，插画与场景切换由父家族提供。
export default {
  id: "i-am-mt-minimal",
  names: { zh: "我叫MT · 部落冒险 · 简约", en: "I Am MT · Horde Adventures · Minimal" },
  kin: "i-am-mt",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
