import { createVividFamily } from "./create-vivid-family.js";

// Planting and defense share a material palette, with separately staged scenes.
const family = createVividFamily({
  id: "guga-doro-pvz-garden",
  signaturePrefix: "guga-doro-pvz-garden",
  names: { zh: "咕嘎和 Doro · 植物大战僵尸 · 戴夫种植队", en: "Guga & Doro · Plants vs. Zombies · Dave Garden Crew" },
  phrases: {
    zh: [
      [
        "咕嘎。这一铲，给小苗留个家。",
        "咕嘎。豌豆这一排，我来种。",
      ],
      [
        "doro～这颗阳光，先存起来！",
        "doro！离下一株向日葵又近一点。",
      ],
      [
        "咕嘎。坚果站稳，后面交给我。",
        "咕嘎。今天种下的，一棵也不让。",
      ],
      [
        "doro～喝饱水，明天一起守家。",
        "doro！浇完这壶，我们就收工。",
      ],
    ],
    en: [
      [
        "Guga. A little home for this seedling.",
        "Guga. I will plant the Peashooter row.",
      ],
      [
        "Doro~ Saving this bit of sunshine!",
        "Doro! One step closer to another Sunflower.",
      ],
      [
        "Guga. Stand firm, Wall-nut. I have your back.",
        "Guga. Every seedling stays safe tonight.",
      ],
      [
        "Doro~ Drink up. Tomorrow we guard the garden.",
        "Doro! One last watering, then we rest.",
      ],
    ],
  },
  light: {
    paper: "#F8FAEE",
    vividPaper: "#F0F3DF",
    ink: "#35482C",
    brand: "#4A6C31",
    brandText: "#FFFFFF",
    signature: "#715317",
    deepAccent: "#4A6C31",
    success: "#3F6D49",
    error: "#AD4C43",
    warning: "#89621D",
  },
  dark: {
    ground: "#1C281E",
    vividPaper: "#263629",
    text: "#F1F6E8",
    brand: "#C8DDA1",
    brandText: "#273821",
    signature: "#E9CF89",
    deepAccent: "#C8DDA1",
    success: "#AFD7AA",
    error: "#F1AAA0",
    warning: "#E9CF89",
  },
});

family.sortKey = "guga-doro-03-pvz-01-guga-doro-pvz-garden";
family.light.textSecondary = "#50603A";
family.dark.textSecondary = "#C7D4B9";
// Independent poses use matched head scale on a shared portrait canvas.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
