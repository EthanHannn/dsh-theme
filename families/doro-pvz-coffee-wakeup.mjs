import { createVividFamily } from "./create-vivid-family.js";

// 同一戴夫造型连接浅深两幅独立的植物日常。
const family = createVividFamily({
  id: "doro-pvz-coffee-wakeup",
  signaturePrefix: "doro-pvz-coffee-wakeup",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 咖啡唤醒站",
    en: "Guga & Doro · Plants vs. Zombies · Coffee Wake-up Nook",
  },
  phrases: {
    zh: [
      [
        "doro～小杯子放好，先闻一闻香气。",
        "doro？这一口，要留给刚醒的朋友。",
      ],
      [
        "doro～小喷菇，困了就再眯一会儿。",
        "doro！餐巾铺好，醒来就能喝啦。",
      ],
      [
        "doro～咖啡豆到位，今晚一起值班。",
        "doro？这颗小豆子，比我还精神。",
      ],
      [
        "doro～小勺子收齐，月亮已经上岗。",
        "doro！锅帽戴好，陪你守到晚安。",
      ],
    ],
    en: [
      [
        "Doro~ Cup ready. Smell that lovely coffee.",
        "Doro? This sip is for our sleepy little friend.",
      ],
      [
        "Doro~ Sleep a little longer, little Puff-shroom.",
        "Doro! Napkin ready for when you wake.",
      ],
      [
        "Doro~ Coffee Bean is here. We share the night watch.",
        "Doro? This little bean is livelier than me.",
      ],
      [
        "Doro~ Spoons packed. The moon is on duty.",
        "Doro! Pot on snug. Here until goodnight.",
      ],
    ],
  },
  light: {
    paper: "#F5F1F6",
    vividPaper: "#E6DDE8",
    ink: "#493C50",
    brand: "#705478",
    brandText: "#FFFFFF",
    signature: "#654832",
    deepAccent: "#705478",
    success: "#38674D",
    error: "#9D454D",
    warning: "#79501F",
  },
  dark: {
    ground: "#26222D",
    vividPaper: "#3E3548",
    text: "#F6F0E9",
    brand: "#D5B8DA",
    brandText: "#26222D",
    signature: "#E7CAA5",
    deepAccent: "#D5B8DA",
    success: "#B3D5BA",
    error: "#F1B1B8",
    warning: "#E9CB9B",
  },
});

family.sortKey = "guga-doro-03-pvz-14-coffee-wakeup";
family.light.textSecondary = "#66556D";
family.dark.textSecondary = "#D4C8DC";
// 对齐浅深角色的头部尺度，为正文与输入区保留空间。
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
