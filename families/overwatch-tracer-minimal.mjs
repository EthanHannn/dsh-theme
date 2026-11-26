import family from "./overwatch-tracer.mjs";

export default {
  id: "overwatch-tracer-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "overwatch-tracer",
  legacyFamilies: [
    { id: "overwatch-mercy-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
