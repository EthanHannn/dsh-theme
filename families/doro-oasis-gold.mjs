import { createVividFamily } from "./create-vivid-family.js";

// Each role keeps its own costume and distinct light/dark daily activities.
const family = createVividFamily({
  id: "doro-oasis-gold",
  signaturePrefix: "doro-oasis-gold",
  names: {
    zh: "咕嘎和 Doro · 中东土豪 · 金穗绿洲",
    en: "Guga & Doro · Arabian Luxury · Golden Oasis",
  },
  phrases: {
    zh: [
      [
        "doro～先来一小杯，金壶刚刚温好。",
        "doro！今天的咖啡也要认真招待。",
      ],
      [
        "doro～椰枣甜甜的，你也拿一颗。",
        "doro！最好的盘子，装最想分享的点心。",
      ],
      [
        "doro？这颗像不像绿洲里的小水滴？",
        "doro～宝石很亮，也没有你来做客开心。",
      ],
      [
        "doro～小箱锁好，月亮替我看庭院。",
        "doro！锦垫软软的，今晚不数宝石啦。",
      ],
    ],
    en: [
      [
        "Doro~ A little cup first. The gold pot is warm.",
        "Doro! Fresh coffee for our welcome guest.",
      ],
      [
        "Doro~ A sweet little date. Have one too.",
        "Doro! My best dish for a treat worth sharing.",
      ],
      [
        "Doro? A tiny drop of oasis blue, perhaps?",
        "Doro~ A bright gem. An even brighter visit.",
      ],
      [
        "Doro~ Chest locked. Moonlight watches the courtyard.",
        "Doro! Soft cushions. No counting gems tonight.",
      ],
    ],
  },
  light: {
    paper: "#FAF3E5",
    vividPaper: "#F0E3CB",
    ink: "#4B3B25",
    brand: "#705127",
    brandText: "#FFFFFF",
    signature: "#65461F",
    deepAccent: "#705127",
    success: "#3F7058",
    error: "#A24C5E",
    warning: "#7D5B25",
  },
  dark: {
    ground: "#292C32",
    vividPaper: "#3A3E44",
    text: "#F7F0DE",
    brand: "#DEC58F",
    brandText: "#292C32",
    signature: "#F2D59C",
    deepAccent: "#DEC58F",
    success: "#B1D7B7",
    error: "#F1AABB",
    warning: "#ECD49B",
  },
});

family.sortKey = "guga-doro-06-oasis-01-gold";
family.light.textSecondary = "#69583C";
family.dark.textSecondary = "#DDD2BA";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
