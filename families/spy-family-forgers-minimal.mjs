import family from "./spy-family-forgers.mjs";

export default {
  id: "spy-family-forgers-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "spy-family-forgers",
  legacyFamilies: [
    { id: "spy-family-mission-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
