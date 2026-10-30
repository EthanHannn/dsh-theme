import { createVividFamily } from "./create-vivid-family.js";

// 角色动作对应侧栏短句，浅深采用独立场景。
const family = createVividFamily({
  id: "jojo-golden-wind",
  signaturePrefix: "jojo-golden-wind",
  names: {
    zh: "JOJO · 黄金之风",
    en: "JoJo · Golden Wind",
  },
  phrases: {
    zh: [
      [
        "乔鲁诺：先让这一点希望发芽。",
        "乔鲁诺：今天，也朝梦想近一点。",
      ],
      [
        "黄金体验：新芽需要一点耐心。",
        "黄金体验：照顾好眼前的小小进展。",
      ],
      [
        "布加拉提：路线我来确认。",
        "布加拉提：大家一起，稳稳往前。",
      ],
      [
        "乔鲁诺：把新芽放在有光的地方。",
        "乔鲁诺：收工时，也留一点期待。",
      ],
    ],
    en: [
      [
        "Giorno: Let this little hope take root.",
        "Giorno: One step closer to the dream.",
      ],
      [
        "Gold Experience: A new shoot needs patience.",
        "Gold Experience: Care for each small sign of progress.",
      ],
      [
        "Bruno: I will check our route.",
        "Bruno: Together, we keep a steady pace.",
      ],
      [
        "Giorno: Leave the sprout where the light falls.",
        "Giorno: Keep a little hope for tomorrow.",
      ],
    ],
  },
  light: {
    paper: "#FBF6ED",
    vividPaper: "#F0E6CE",
    ink: "#493D2E",
    brand: "#805B24",
    brandText: "#FFFFFF",
    signature: "#67315D",
    deepAccent: "#805B24",
    success: "#356653",
    error: "#AF354D",
    warning: "#81591E",
  },
  dark: {
    ground: "#251D24",
    vividPaper: "#3A2D36",
    text: "#F3F1ED",
    brand: "#E8CB90",
    brandText: "#251D24",
    signature: "#E4B6D8",
    deepAccent: "#E8CB90",
    success: "#A4D4B5",
    error: "#F7A5B3",
    warning: "#E8C88C",
  },
});

family.sortKey = "jojo-03-golden-wind";
family.light.textSecondary = "#5A565A";
family.dark.textSecondary = "#D0C8D5";
// 保留纵向角色比例，让正文与输入区域保持清晰。
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
