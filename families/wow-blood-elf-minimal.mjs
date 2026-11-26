import family from "./wow-blood-elf.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "wow-blood-elf-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "wow-blood-elf",
  legacyFamilies: [
    { id: "wow-dwarf-minimal" },
    { id: "wow-orc-minimal" },
    { id: "wow-tauren-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
