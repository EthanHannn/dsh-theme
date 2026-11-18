import family from "./hsr-express.mjs";

export default {
  id: "hsr-express-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "hsr-express",
  legacyFamilies: [{ id: "hsr-hunters-minimal" }, { id: "hsr-firefly-minimal" }],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
