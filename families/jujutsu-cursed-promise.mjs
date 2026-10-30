import { createVividFamily } from "./create-vivid-family.js";

// 角色动作对应侧栏短句，浅深采用独立场景。
const family = createVividFamily({
  id: "jujutsu-cursed-promise",
  signaturePrefix: "jujutsu-cursed-promise",
  names: {
    zh: "咒术回战 · 纯爱之约",
    en: "Jujutsu Kaisen · Cursed Promise",
  },
  phrases: {
    zh: [
      [
        "乙骨：约好的事，我记着呢。",
        "乙骨：慢慢来，也是在往前走。",
      ],
      [
        "乙骨：准备好了，我们一起去。",
        "乙骨：这一次，我会站稳。",
      ],
      [
        "乙骨：先歇一会儿吧，我陪你。",
        "乙骨：花开得很好，抬头看看。",
      ],
      [
        "乙骨：有人陪着，就没那么怕了。",
        "乙骨：今天也把约定好好收着。",
      ],
    ],
    en: [
      [
        "Yuta: I remember our promise.",
        "Yuta: A small step still takes us forward.",
      ],
      [
        "Yuta: Ready. Let us go together.",
        "Yuta: This time, I will stand firm.",
      ],
      [
        "Yuta: Rest a little. I am here.",
        "Yuta: Look up. The flowers are beautiful.",
      ],
      [
        "Yuta: Company makes it less frightening.",
        "Yuta: Keep our promise safe today, too.",
      ],
    ],
  },
  light: {
    paper: "#F1F7F3",
    vividPaper: "#DEEBE4",
    ink: "#2E403C",
    brand: "#286653",
    brandText: "#FFFFFF",
    signature: "#5C3868",
    deepAccent: "#286653",
    success: "#356653",
    error: "#AF354D",
    warning: "#81591E",
  },
  dark: {
    ground: "#142320",
    vividPaper: "#203A33",
    text: "#F3F1ED",
    brand: "#A9DEC5",
    brandText: "#142320",
    signature: "#D5B9E3",
    deepAccent: "#A9DEC5",
    success: "#A4D4B5",
    error: "#F7A5B3",
    warning: "#E8C88C",
  },
});

family.sortKey = "jujutsu-22-cursed-promise";
family.light.textSecondary = "#5A565A";
family.dark.textSecondary = "#D0C8D5";
// 保留纵向角色比例，让正文与输入区域保持清晰。
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
