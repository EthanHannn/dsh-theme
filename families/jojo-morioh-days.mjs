import { createVividFamily } from "./create-vivid-family.js";

// 角色动作对应侧栏短句，浅深采用独立场景。
const family = createVividFamily({
  id: "jojo-morioh-days",
  signaturePrefix: "jojo-morioh-days",
  names: {
    zh: "JOJO · 杜王町晴日",
    en: "JoJo · Morioh Days",
  },
  phrases: {
    zh: [
      [
        "仗助：头发收拾好，今天也精神点。",
        "仗助：小镇的好天气，别辜负啦。",
      ],
      [
        "疯狂钻石：裂缝接好了，小心拿。",
        "疯狂钻石：慢慢修，总会恢复整齐。",
      ],
      [
        "康一：这一项完成了，真不错！",
        "康一：下一步，我也来帮忙。",
      ],
      [
        "仗助：工具收齐，出门走走。",
        "仗助：忙完一起在街角碰面。",
      ],
    ],
    en: [
      [
        "Josuke: Hair ready. A fresh start.",
        "Josuke: Make the most of this fine day.",
      ],
      [
        "Crazy Diamond: Fixed. Handle it gently.",
        "Crazy Diamond: Piece by piece, it comes together.",
      ],
      [
        "Koichi: One task done. Looking good!",
        "Koichi: I can help with the next step.",
      ],
      [
        "Josuke: Tools packed. Time for a walk.",
        "Josuke: Meet you at the corner after work.",
      ],
    ],
  },
  light: {
    paper: "#F3F8F0",
    vividPaper: "#E2EDDA",
    ink: "#304234",
    brand: "#386647",
    brandText: "#FFFFFF",
    signature: "#5E3568",
    deepAccent: "#386647",
    success: "#356653",
    error: "#AF354D",
    warning: "#81591E",
  },
  dark: {
    ground: "#17241C",
    vividPaper: "#253B2C",
    text: "#F3F1ED",
    brand: "#B0D8AA",
    brandText: "#17241C",
    signature: "#D4BAE4",
    deepAccent: "#B0D8AA",
    success: "#A4D4B5",
    error: "#F7A5B3",
    warning: "#E8C88C",
  },
});

family.sortKey = "jojo-02-morioh-days";
family.light.textSecondary = "#5A565A";
family.dark.textSecondary = "#D0C8D5";
// 保留纵向角色比例，让正文与输入区域保持清晰。
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
