import { createVividFamily } from "./create-vivid-family.js";

// 角色动作对应侧栏短句，浅深采用独立场景。
const family = createVividFamily({
  id: "jujutsu-malevolent-shrine",
  signaturePrefix: "jujutsu-malevolent-shrine",
  names: {
    zh: "咒术回战 · 伏魔御厨子",
    en: "Jujutsu Kaisen · Malevolent Shrine",
  },
  phrases: {
    zh: [
      [
        "宿傩：先把这一项做完。",
        "宿傩：别让小事占满你的时间。",
      ],
      [
        "宿傩：坐稳，看看还剩哪一步。",
        "宿傩：有余裕，才看得清全局。",
      ],
      [
        "宿傩：茶还温着，歇够再继续。",
        "宿傩：收起杂念，留点精神。",
      ],
      [
        "宿傩：既然开始，就做到利落。",
        "宿傩：把收尾也安排妥当。",
      ],
    ],
    en: [
      [
        "Sukuna: Finish the task in front of you.",
        "Sukuna: Do not give small things all your time.",
      ],
      [
        "Sukuna: Sit down. See what remains.",
        "Sukuna: Leave room to see the whole board.",
      ],
      [
        "Sukuna: The tea is warm. Rest first.",
        "Sukuna: Clear the distractions. Save your strength.",
      ],
      [
        "Sukuna: You began it. Finish it cleanly.",
        "Sukuna: Give the final step its due.",
      ],
    ],
  },
  light: {
    paper: "#FAF3EE",
    vividPaper: "#EEDFD4",
    ink: "#49342F",
    brand: "#963E35",
    brandText: "#FFFFFF",
    signature: "#67421F",
    deepAccent: "#963E35",
    success: "#356653",
    error: "#AF354D",
    warning: "#81591E",
  },
  dark: {
    ground: "#211516",
    vividPaper: "#342125",
    text: "#F3F1ED",
    brand: "#F1B29D",
    brandText: "#211516",
    signature: "#E4C58C",
    deepAccent: "#F1B29D",
    success: "#A4D4B5",
    error: "#F7A5B3",
    warning: "#E8C88C",
  },
});

family.sortKey = "jujutsu-21-malevolent-shrine";
family.light.textSecondary = "#5A565A";
family.dark.textSecondary = "#D0C8D5";
// 保留纵向角色比例，让正文与输入区域保持清晰。
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
