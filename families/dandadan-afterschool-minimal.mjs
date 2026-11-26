import family from "./dandadan-afterschool.mjs";

export default {
  id: "dandadan-afterschool-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "dandadan-afterschool",
  legacyFamilies: [
    { id: "dandadan-awakening-minimal" },
    { id: "dandadan-nightwatch-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
