import family from "./one-piece.mjs";

// 简约版沿用基础配色。
export default {
  id: "one-piece-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "one-piece",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
