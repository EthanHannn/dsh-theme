import family from "./dragon-maid.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "dragon-maid-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "dragon-maid",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
