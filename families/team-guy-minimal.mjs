import family from "./team-guy.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "team-guy-minimal",
  names: { zh: `${family.names.zh} · 简约`, en: `${family.names.en} · Minimal` },
  kin: "team-guy",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
