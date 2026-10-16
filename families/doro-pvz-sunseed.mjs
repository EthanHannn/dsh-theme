import { createVividFamily } from "./create-vivid-family.js";

// One sculpted Dave Doro connects distinct PvZ daily activities.
const family = createVividFamily({
  id: "doro-pvz-sunseed",
  signaturePrefix: "doro-pvz-sunseed",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 阳光种子铺",
    en: "Guga & Doro · Plants vs. Zombies · Sunshine Seed Shop",
  },
  phrases: {
    zh: [
      [
        "doro～这一包，种下明天的小太阳。",
        "doro？先给小苗找个舒服的位置。",
      ],
      [
        "doro～慢慢浇，小叶子也要喝水。",
        "doro！今天又长高一点点。",
      ],
      [
        "doro！接住啦，一枚暖暖的阳光。",
        "doro～这枚先存着，明天还要用。",
      ],
      [
        "doro～种箱关好，希望都在里面。",
        "doro！收工啦，明天再开小铺。",
      ],
    ],
    en: [
      [
        "Doro~ A little packet of tomorrow's sunshine.",
        "Doro? A cozy place for this tiny seedling first.",
      ],
      [
        "Doro~ A gentle drink for the little leaves.",
        "Doro! A tiny bit taller today.",
      ],
      [
        "Doro! Caught one warm little sun.",
        "Doro~ Saving this one for tomorrow.",
      ],
      [
        "Doro~ Box closed. Little hopes tucked inside.",
        "Doro! Shop closed. See you tomorrow.",
      ],
    ],
  },
  light: {
    paper: "#F9F4E5",
    vividPaper: "#F0E7CF",
    ink: "#463F29",
    brand: "#5E682F",
    brandText: "#FFFFFF",
    signature: "#72501E",
    deepAccent: "#5E682F",
    success: "#3F7058",
    error: "#A24C5E",
    warning: "#7D5B25",
  },
  dark: {
    ground: "#27271D",
    vividPaper: "#383B29",
    text: "#F6F0D9",
    brand: "#D0D69A",
    brandText: "#27271D",
    signature: "#EBD197",
    deepAccent: "#D0D69A",
    success: "#B1D7B7",
    error: "#F1AABB",
    warning: "#ECD49B",
  },
});

family.sortKey = "guga-doro-03-pvz-05-sunseed";
family.light.textSecondary = "#656044";
family.dark.textSecondary = "#D4D3B4";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
