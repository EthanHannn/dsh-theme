import family from "./doraemon-pocket.mjs";

export default {
  id: "doraemon-pocket-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "doraemon-pocket",
  legacyFamilies: [
    { id: "doraemon-afterschool-minimal" },
    { id: "doraemon-starlight-minimal" },
  ],
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
