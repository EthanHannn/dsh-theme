import family from "./one-piece.mjs";

// Share the base palette; vivid surface overrides and artwork stay with the parent.
export default {
  id: "one-piece-minimal",
  names: { zh: "海贼王·简约", en: "One Piece · Minimal" },
  kin: "one-piece",
  styles: ["minimal"],
  light: family.light,
  dark: family.dark,
};
