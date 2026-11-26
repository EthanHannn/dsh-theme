import family from "./minecraft.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "minecraft-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "minecraft",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
