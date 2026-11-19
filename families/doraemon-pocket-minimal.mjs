import family from "./doraemon-pocket.mjs";

export default {
  id: "doraemon-pocket-minimal",
  names: { zh: "哆啦A梦 · 奇妙同行 · 简约", en: "Doraemon · Everyday Adventures · Minimal" },
  kin: "doraemon-pocket",
  legacyFamilies: [
    { id: "doraemon-afterschool-minimal" },
    { id: "doraemon-starlight-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
