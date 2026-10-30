import { createVividFamily } from "./create-vivid-family.js";

// 角色动作对应侧栏短句，浅深采用独立场景。
const family = createVividFamily({
  id: "jujutsu-infinite-void",
  signaturePrefix: "jujutsu-infinite-void",
  names: {
    zh: "咒术回战 · 无量空处",
    en: "Jujutsu Kaisen · Infinite Void",
  },
  phrases: {
    zh: [
      [
        "五条：甜点补给到位，先歇一会儿。",
        "五条：这一口，可别留到任务结束。",
      ],
      [
        "五条：别急，把眼前这一件做好。",
        "五条：交给老师，你继续往前。",
      ],
      [
        "五条：看清楚了，再迈下一步。",
        "五条：视野开阔些，路就多一点。",
      ],
      [
        "五条：今天的进度已经很漂亮。",
        "五条：收工之前，分你一颗甜点。",
      ],
    ],
    en: [
      [
        "Gojo: Dessert is here. Take a little break.",
        "Gojo: No need to save this bite for later.",
      ],
      [
        "Gojo: Easy. One thing at a time.",
        "Gojo: Keep going. Your teacher is here.",
      ],
      [
        "Gojo: Look clearly, then take the next step.",
        "Gojo: A wider view reveals another path.",
      ],
      [
        "Gojo: That is plenty of progress today.",
        "Gojo: One last sweet before we call it a day.",
      ],
    ],
  },
  light: {
    paper: "#F2F6FA",
    vividPaper: "#E4EEF7",
    ink: "#28394D",
    brand: "#245C91",
    brandText: "#FFFFFF",
    signature: "#5C3E78",
    deepAccent: "#245C91",
    success: "#356653",
    error: "#AF354D",
    warning: "#81591E",
  },
  dark: {
    ground: "#111B2A",
    vividPaper: "#182A40",
    text: "#F3F1ED",
    brand: "#A7D4F7",
    brandText: "#111B2A",
    signature: "#D4BCEB",
    deepAccent: "#A7D4F7",
    success: "#A4D4B5",
    error: "#F7A5B3",
    warning: "#E8C88C",
  },
});

family.sortKey = "jujutsu-20-infinite-void";
family.light.textSecondary = "#5A565A";
family.dark.textSecondary = "#D0C8D5";
// 保留纵向角色比例，让正文与输入区域保持清晰。
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
