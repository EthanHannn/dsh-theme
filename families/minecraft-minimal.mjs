import family from "./minecraft.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "minecraft-minimal",
  names: { zh: "我的世界·简约", en: "Minecraft · Minimal" },
  kin: "minecraft",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
