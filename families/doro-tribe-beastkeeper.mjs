import { createVividFamily } from "./create-vivid-family.js";

// Each role keeps its own costume and distinct light/dark daily activities.
const family = createVividFamily({
  id: "doro-tribe-beastkeeper",
  signaturePrefix: "doro-tribe-beastkeeper",
  names: {
    zh: "咕嘎和 Doro · 魔法部落 · 灵兽营地",
    en: "Guga & Doro · Magical Tribe · Beastkeeper Camp",
  },
  phrases: {
    zh: [
      [
        "doro～抬抬小爪，这颗果子就是奖励。",
        "doro！幼龙今天学会等一等啦。",
      ],
      [
        "doro？软乎乎的小家伙也要喝水。",
        "doro～慢一点，碗沿可不是滑梯。",
      ],
      [
        "doro～月角轻轻碰一下，算打招呼。",
        "doro！你的叶子餐准备好啦。",
      ],
      [
        "doro～翅膀收好，暖窝刚刚铺完。",
        "doro！今天照顾了好多小伙伴。",
      ],
    ],
    en: [
      [
        "Doro~ One little paw up. One little fruit reward.",
        "Doro! Our baby drake learned to wait today.",
      ],
      [
        "Doro? Even little slimes need a drink.",
        "Doro~ Easy. The bowl rim is not a slide.",
      ],
      [
        "Doro~ A gentle antler bump says hello.",
        "Doro! Your leafy supper is ready.",
      ],
      [
        "Doro~ Wings tucked. Your cozy nest is ready.",
        "Doro! So many little friends cared for today.",
      ],
    ],
  },
  light: {
    paper: "#F0F5EF",
    vividPaper: "#E0EBE1",
    ink: "#30483E",
    brand: "#37624F",
    brandText: "#FFFFFF",
    signature: "#684820",
    deepAccent: "#37624F",
    success: "#3F7058",
    error: "#A24C5E",
    warning: "#7D5B25",
  },
  dark: {
    ground: "#202F2B",
    vividPaper: "#30453C",
    text: "#EFF6EA",
    brand: "#B6D6BD",
    brandText: "#202F2B",
    signature: "#EED29D",
    deepAccent: "#B6D6BD",
    success: "#B1D7B7",
    error: "#F1AABB",
    warning: "#ECD49B",
  },
});

family.sortKey = "guga-doro-05-tribe-01-beastkeeper";
family.light.textSecondary = "#4A6155";
family.dark.textSecondary = "#C8DDCE";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
