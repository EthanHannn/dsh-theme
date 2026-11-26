import family from "./jujutsu-school-days.mjs";

export default {
  id: "jujutsu-school-days-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "jujutsu-school-days",
  legacyFamilies: [
    { id: "jujutsu-cursed-promise-minimal" },
    { id: "jujutsu-malevolent-shrine-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
