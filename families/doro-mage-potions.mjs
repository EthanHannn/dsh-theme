import { createVividFamily } from "./create-vivid-family.js";

// One wizard identity connects distinct daily activities in each mode.
const family = createVividFamily({
  id: "doro-mage-potions",
  signaturePrefix: "doro-mage-potions",
  names: {
    zh: "咕嘎和 Doro · 魔法师 · 星露药房",
    en: "Guga & Doro · Wizard Life · Dewdrop Apothecary",
  },
  phrases: {
    zh: [
      [
        "doro～晨露两滴，今天就亮一点。",
        "doro？这一锅，会不会有青草香？",
      ],
      [
        "doro！小瓶子里，藏着一颗清晨。",
        "doro～举高一点，看见露珠啦。",
      ],
      [
        "doro～嗯，是刚下过雨的味道。",
        "doro？闻一下，困意也软乎乎。",
      ],
      [
        "doro～软木塞盖好，晚安也装好。",
        "doro！最后两瓶，留给好梦。",
      ],
    ],
    en: [
      [
        "Doro~ Two drops of dew to brighten the day.",
        "Doro? Will this little pot smell of grass?",
      ],
      [
        "Doro! A whole morning in one tiny bottle.",
        "Doro~ A little higher. There is the dewdrop.",
      ],
      [
        "Doro~ Mmm. Just like a garden after rain.",
        "Doro? Even sleepiness smells soft.",
      ],
      [
        "Doro~ Corks in. Good nights tucked away.",
        "Doro! The last two bottles are for sweet dreams.",
      ],
    ],
  },
  light: {
    paper: "#F1F6EF",
    vividPaper: "#E5EFDE",
    ink: "#344839",
    brand: "#496A46",
    brandText: "#FFFFFF",
    signature: "#694821",
    deepAccent: "#496A46",
    success: "#3E705B",
    error: "#A34D63",
    warning: "#805C26",
  },
  dark: {
    ground: "#1D2B27",
    vividPaper: "#293C33",
    text: "#EFF7E9",
    brand: "#C0DBAD",
    brandText: "#1D2B27",
    signature: "#E7C799",
    deepAccent: "#C0DBAD",
    success: "#B2DDBF",
    error: "#F2A6B9",
    warning: "#ECD096",
  },
});

family.sortKey = "guga-doro-04-mage-01-potions";
family.light.textSecondary = "#53684E";
family.dark.textSecondary = "#C5D8BB";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
