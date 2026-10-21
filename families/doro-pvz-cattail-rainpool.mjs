import { createVividFamily } from "./create-vivid-family.js";

// 同一戴夫造型连接浅深两幅独立的植物日常。
const family = createVividFamily({
  id: "doro-pvz-cattail-rainpool",
  signaturePrefix: "doro-pvz-cattail-rainpool",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 香蒲雨池",
    en: "Guga & Doro · Plants vs. Zombies · Cattail Rainpool",
  },
  phrases: {
    zh: [
      [
        "doro～叶舟放轻一点，雨池就不晃啦。",
        "doro！这一片小叶子，也想去兜兜风。",
      ],
      [
        "doro？小水珠，先在碟子里歇一会儿。",
        "doro～香蒲看着呢，慢慢把船放下。",
      ],
      [
        "doro～叶面擦干，夜风就不凉啦。",
        "doro！今天的小航行，平安靠岸。",
      ],
      [
        "doro～小毛巾卷好，明天再来放船。",
        "doro！锅帽上的雨声，也收工啦。",
      ],
    ],
    en: [
      [
        "Doro~ Gently. Keep our tiny pool still.",
        "Doro! Even a little leaf wants a boat ride.",
      ],
      [
        "Doro? Little raindrops, rest in this saucer.",
        "Doro~ Cattail is watching. Lower the boat slowly.",
      ],
      [
        "Doro~ Dry leaves stay cozy in the evening breeze.",
        "Doro! Our little voyage is safely ashore.",
      ],
      [
        "Doro~ Towel rolled. More little voyages tomorrow.",
        "Doro! Even the rain on my pot has clocked out.",
      ],
    ],
  },
  light: {
    paper: "#EDF5F2",
    vividPaper: "#D9E8E1",
    ink: "#29473F",
    brand: "#326455",
    brandText: "#FFFFFF",
    signature: "#59452A",
    deepAccent: "#326455",
    success: "#38674D",
    error: "#9D454D",
    warning: "#79501F",
  },
  dark: {
    ground: "#202B2C",
    vividPaper: "#314644",
    text: "#F5F0E9",
    brand: "#AED8C6",
    brandText: "#202B2C",
    signature: "#E7D0A4",
    deepAccent: "#AED8C6",
    success: "#B3D5BA",
    error: "#F1B1B8",
    warning: "#E9CB9B",
  },
});

family.sortKey = "guga-doro-03-pvz-12-cattail-rainpool";
family.light.textSecondary = "#456258";
family.dark.textSecondary = "#C3D8D0";
// 统一头部观感尺寸，并为正文与输入区保留空间。
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
