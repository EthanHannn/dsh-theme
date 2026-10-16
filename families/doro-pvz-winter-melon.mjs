import { createVividFamily } from "./create-vivid-family.js";

// Dave Doro keeps the same reference outfit across each distinct daily activity.
const family = createVividFamily({
  id: "doro-pvz-winter-melon",
  signaturePrefix: "doro-pvz-winter-melon",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 冰瓜凉饮铺",
    en: "Guga & Doro · Plants vs. Zombies · Winter Melon Refreshments",
  },
  phrases: {
    zh: [
      [
        "doro～冰冰凉凉，先装满这一小杯。",
        "doro？再加一小勺，夏天就不热啦。",
      ],
      [
        "doro～勺子轻一点，冰花要堆得软软的。",
        "doro！蓝瓷小碟，也一起凉快一下。",
      ],
      [
        "doro！这一根，留给最辛苦的小冰瓜。",
        "doro～咬一小口，慢慢享受。",
      ],
      [
        "doro～冰箱关好，歇脚时间到。",
        "doro！今天的凉快，也分你一点。",
      ],
    ],
    en: [
      [
        "Doro~ One little cup of summer cool.",
        "Doro? One more scoop to beat the heat.",
      ],
      [
        "Doro~ Gently. Keep the ice fluffy.",
        "Doro! Even the little saucer feels cool.",
      ],
      [
        "Doro! This pop is for our busy little melon.",
        "Doro~ A tiny bite. Take your time.",
      ],
      [
        "Doro~ Cooler closed. Time to sit a while.",
        "Doro! A little summer cool, just for you.",
      ],
    ],
  },
  light: {
    paper: "#EDF8F8",
    vividPaper: "#D7EAED",
    ink: "#29464E",
    brand: "#326578",
    brandText: "#FFFFFF",
    signature: "#594C29",
    deepAccent: "#326578",
    success: "#356E53",
    error: "#A34C59",
    warning: "#795222",
  },
  dark: {
    ground: "#1D2C32",
    vividPaper: "#30454F",
    text: "#F4F1E9",
    brand: "#ACD7E3",
    brandText: "#1D2C32",
    signature: "#E8D3A1",
    deepAccent: "#ACD7E3",
    success: "#B0D9BE",
    error: "#F0ADB8",
    warning: "#EBD09F",
  },
});

family.sortKey = "guga-doro-03-pvz-09-winter-melon";
family.light.textSecondary = "#45656F";
family.dark.textSecondary = "#C3D9DE";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
