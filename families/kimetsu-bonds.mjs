import { createVividFamily } from "./create-vivid-family.js";

// Celadon travel daylight / moonlit teal, with Nezuko's wisteria-pink accent.
const family = createVividFamily({
  id: "kimetsu-bonds",
  signaturePrefix: "kmb",
  names: { zh: "鬼灭之刃·羁绊同行", en: "Demon Slayer · Bonds" },
  phrases: {
    // Original character-inspired lines; order matches the four pal assets.
    zh: [
      ["炭治郎：一起走下去吧。", "炭治郎：先调整呼吸，再往前一步。", "炭治郎：大家都要平安回来。"],
      ["祢豆子：唔，唔！", "祢豆子：嗯嗯！", "祢豆子：唔——！"],
      ["善逸：休息一下，好不好？", "善逸：这次我也会保护大家！", "善逸：饭团要留我一份啊。"],
      ["伊之助：跟上本大爷！", "伊之助：下一个山头也要拿下！", "伊之助：再来一碗！"],
    ],
    en: [
      ["Tanjiro: Let's keep going together.", "Tanjiro: Breathe, then take one more step.", "Tanjiro: Everyone comes home safely."],
      ["Nezuko: Mmm, mm!", "Nezuko: Mm-hmm!", "Nezuko: Mmmm!"],
      ["Zenitsu: Can we take a little break?", "Zenitsu: I'll protect everyone too!", "Zenitsu: Save a rice ball for me."],
      ["Inosuke: Keep up with me!", "Inosuke: That next mountain is mine!", "Inosuke: Another bowl!"],
    ],
  },
  light: {
    paper: "#F3F6EF", vividPaper: "#EAF2E9", ink: "#233C35",
    brand: "#286454", brandText: "#FFFFFF", signature: "#845079",
    deepAccent: "#845079", success: "#386A47", error: "#AF3748", warning: "#805B19",
  },
  dark: {
    ground: "#0D191C", vividPaper: "#111F22", text: "#E8F0E9",
    brand: "#8FD0B2", brandText: "#122B23", signature: "#D6A2CE",
    deepAccent: "#D6A2CE", success: "#A4CE94", error: "#FF8D9B", warning: "#EBC27C",
  },
});

// Four full-body figures retain a portrait canvas and a short-window height cap.
family.decor.wallpaperSize = "min(40vw, 520px, 49vh)";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 49vh)) calc(-1 * min(10vh, 100px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 49vh) - 64px)";

export default family;
