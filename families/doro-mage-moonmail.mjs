import { createVividFamily } from "./create-vivid-family.js";

// One wizard identity connects distinct daily activities in each mode.
const family = createVividFamily({
  id: "doro-mage-moonmail",
  signaturePrefix: "doro-mage-moonmail",
  names: {
    zh: "咕嘎和 Doro · 魔法师 · 月邮小屋",
    en: "Guga & Doro · Wizard Life · Moonlit Mailroom",
  },
  phrases: {
    zh: [
      [
        "doro～封好啦，心意不会漏出来。",
        "doro？这枚月牙，盖得正不正？",
      ],
      [
        "doro！有一封给你的问候。",
        "doro～邮包不大，惦记很多。",
      ],
      [
        "doro～小扫帚，今晚慢一点飞。",
        "doro！下一站，是亮着灯的窗。",
      ],
      [
        "doro～最后一封，也平安送到。",
        "doro！空空的邮包，满满的一天。",
      ],
    ],
    en: [
      [
        "Doro~ Sealed. The warm wishes stay inside.",
        "Doro? Is this little crescent straight?",
      ],
      [
        "Doro! One little hello, addressed to you.",
        "Doro~ Small mailbag, so many warm thoughts.",
      ],
      [
        "Doro~ Little broom, fly gently tonight.",
        "Doro! Next stop: that warmly lit window.",
      ],
      [
        "Doro~ The very last letter arrived safely.",
        "Doro! Empty mailbag. Such a full day.",
      ],
    ],
  },
  light: {
    paper: "#EFF3FB",
    vividPaper: "#E2E9F7",
    ink: "#35435C",
    brand: "#4D638E",
    brandText: "#FFFFFF",
    signature: "#684820",
    deepAccent: "#4D638E",
    success: "#3E705B",
    error: "#A34D63",
    warning: "#805C26",
  },
  dark: {
    ground: "#1D273D",
    vividPaper: "#2B3854",
    text: "#EFF2FD",
    brand: "#BECFF3",
    brandText: "#1D273D",
    signature: "#EBCF99",
    deepAccent: "#BECFF3",
    success: "#B2DDBF",
    error: "#F2A6B9",
    warning: "#ECD096",
  },
});

family.sortKey = "guga-doro-04-mage-03-moonmail";
family.light.textSecondary = "#526781";
family.dark.textSecondary = "#C6D3EC";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
