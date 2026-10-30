import { createVividFamily } from "./create-vivid-family.js";

// 角色动作对应侧栏短句，浅深采用独立场景。
const family = createVividFamily({
  id: "jojo-stardust-crusaders",
  signaturePrefix: "jojo-stardust-crusaders",
  names: {
    zh: "JOJO · 星尘远征",
    en: "JoJo · Stardust Crusaders",
  },
  phrases: {
    zh: [
      [
        "承太郎：帽子戴稳，继续赶路。",
        "承太郎：先看清眼前这一站。",
      ],
      [
        "白金之星：拳头收好，集中精神。",
        "白金之星：该出手时，干净利落。",
      ],
      [
        "伊奇：咖啡口香糖，记得留一份。",
        "伊奇：这一站，本大爷先歇着。",
      ],
      [
        "承太郎：路线确认过了。",
        "承太郎：收好地图，下一站见。",
      ],
    ],
    en: [
      [
        "Jotaro: Hat steady. Keep moving.",
        "Jotaro: Focus on the stop ahead.",
      ],
      [
        "Star Platinum: Steady fists. Stay focused.",
        "Star Platinum: Make the moment count.",
      ],
      [
        "Iggy: Save some coffee gum for me.",
        "Iggy: I am taking a break at this stop.",
      ],
      [
        "Jotaro: The route is checked.",
        "Jotaro: Fold the map. See you at the next stop.",
      ],
    ],
  },
  light: {
    paper: "#F4F2FA",
    vividPaper: "#E8E1F1",
    ink: "#352D49",
    brand: "#5B4083",
    brandText: "#FFFFFF",
    signature: "#634215",
    deepAccent: "#5B4083",
    success: "#356653",
    error: "#AF354D",
    warning: "#81591E",
  },
  dark: {
    ground: "#181526",
    vividPaper: "#28213E",
    text: "#F3F1ED",
    brand: "#C6B4EF",
    brandText: "#181526",
    signature: "#E7CB8A",
    deepAccent: "#C6B4EF",
    success: "#A4D4B5",
    error: "#F7A5B3",
    warning: "#E8C88C",
  },
});

family.sortKey = "jojo-01-stardust-crusaders";
family.light.textSecondary = "#5A565A";
family.dark.textSecondary = "#D0C8D5";
// 保留纵向角色比例，让正文与输入区域保持清晰。
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
