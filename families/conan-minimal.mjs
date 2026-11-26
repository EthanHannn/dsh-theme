import family from "./conan.mjs";

export default {
  id: "conan-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "conan",
  legacyFamilies: [
    { id: "conan-jewel-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
