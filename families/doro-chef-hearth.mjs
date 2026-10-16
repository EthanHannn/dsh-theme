import { createVividFamily } from "./create-vivid-family.js";

// Each role keeps its own costume and distinct light/dark daily activities.
const family = createVividFamily({
  id: "doro-chef-hearth",
  signaturePrefix: "doro-chef-hearth",
  names: {
    zh: "咕嘎和 Doro · 厨师 · 暖锅小馆",
    en: "Guga & Doro · Chef Life · Little Hearth Kitchen",
  },
  phrases: {
    zh: [
      [
        "doro～揉圆一点，明天的餐包也会松软。",
        "doro？面团是不是也在偷偷长肚皮？",
      ],
      [
        "doro！第一只小餐包，烤得刚刚好。",
        "doro～掰开看看，里面还暖着呢。",
      ],
      [
        "doro～最后尝一口，盐放得刚好。",
        "doro！忙完一天，也要好好喝碗汤。",
      ],
      [
        "doro～木板擦干净，小馆收工啦。",
        "doro！帽子歪一点点，今天很努力。",
      ],
    ],
    en: [
      [
        "Doro~ Round and soft. A little roll in the making.",
        "Doro? Is this dough growing a tiny belly too?",
      ],
      [
        "Doro! Our first little roll is just right.",
        "Doro~ Break it open. Still warm inside.",
      ],
      [
        "Doro~ One last taste. Just enough salt.",
        "Doro! A busy day deserves a warm bowl.",
      ],
      [
        "Doro~ Board wiped. Kitchen closed for today.",
        "Doro! A slightly crooked hat after a busy day.",
      ],
    ],
  },
  light: {
    paper: "#F8F2E9",
    vividPaper: "#EDE2D1",
    ink: "#493D30",
    brand: "#68533A",
    brandText: "#FFFFFF",
    signature: "#6B442E",
    deepAccent: "#68533A",
    success: "#3F7058",
    error: "#A24C5E",
    warning: "#7D5B25",
  },
  dark: {
    ground: "#2C2A26",
    vividPaper: "#413B32",
    text: "#F6EFDF",
    brand: "#D6C39D",
    brandText: "#2C2A26",
    signature: "#F1CCA4",
    deepAccent: "#D6C39D",
    success: "#B1D7B7",
    error: "#F1AABB",
    warning: "#ECD49B",
  },
});

family.sortKey = "guga-doro-07-chef-01-hearth";
family.light.textSecondary = "#655746";
family.dark.textSecondary = "#DBD0BA";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
