import { createVividFamily } from "./create-vivid-family.js";

// Guga and Doro plant daisies in the sun and share cocoa on a rainy evening.
const family = createVividFamily({
  id: "guga-doro-together",
  signaturePrefix: "guga-doro-together",
  names: { zh: "咕嘎 Doro·晴雨相伴", en: "Guga & Doro · Sunshine & Rain" },
  phrases: {
    zh: [
      ["咕嘎。花开啦，你看。", "doro～这朵小花送给你！"],
      ["咕嘎。热可可，给你留了一杯。", "doro～毯子分你一半。"],
      ["咕嘎。靠近一点，淋不到雨。", "doro～晴天雨天，都一起呀。"],
    ],
    en: [
      ["Guga. Look, our flowers are blooming.", "Doro~ This little flower is for you!"],
      ["Guga. I saved you a cup of cocoa.", "Doro~ Half the blanket is yours."],
      ["Guga. Stay close, out of the rain.", "Doro~ Sunshine or rain, we're together."],
    ],
  },
  light: {
    paper: "#F4F8FB",
    vividPaper: "#EAF2F7",
    ink: "#283546",
    brand: "#496A83",
    brandText: "#FFFFFF",
    signature: "#A16A27",
    deepAccent: "#A55875",
    success: "#3F745E",
    error: "#B54565",
    warning: "#8C6628",
  },
  dark: {
    ground: "#1B2432",
    vividPaper: "#242F40",
    text: "#F1F3FA",
    brand: "#AFCEE2",
    brandText: "#243247",
    signature: "#EFC385",
    deepAccent: "#E7B2CB",
    success: "#AAD2BC",
    error: "#F0A0B8",
    warning: "#E8CB92",
  },
});

family.sortKey = "guga-doro-04-together";
// Cool rainy-night layers need a clear secondary label on stacked hover fills.
family.dark.textSecondary = "#BECBDC";
family.decor.wallpaperSize = "min(30vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.85)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(30vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(30vw, 440px) - 64px)";

export default family;
