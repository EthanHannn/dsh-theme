import { createVividFamily } from "./create-vivid-family.js";

// Strawberry picnics and little homemade treats, with rose and lilac accents.
const family = createVividFamily({
  id: "doro-happy",
  signaturePrefix: "doro-happy",
  names: { zh: "咕嘎 Doro·草莓幸福日", en: "Guga & Doro · Strawberry Happy Days" },
  phrases: {
    zh: [
      ["doro～最大颗的草莓留给你！", "doro，带上小蛋糕去野餐吧。"],
      ["doro！饼干出炉啦。", "doro～这颗小爱心是你的。"],
      ["doro～抱着软软的靠垫。", "doro，今天也过得甜甜的。"],
    ],
    en: [
      ["Doro~ The biggest strawberry is for you!", "Doro. Cake packed, picnic time!"],
      ["Doro! The cookies are ready.", "Doro~ This little heart is yours."],
      ["Doro~ A soft cushion and a cuddle.", "Doro. Another sweet little day."],
    ],
  },
  light: {
    paper: "#FFF7FB",
    vividPaper: "#FBE8EF",
    ink: "#3F2C3E",
    brand: "#9F456E",
    brandText: "#FFFFFF",
    signature: "#7651A3",
    deepAccent: "#9F456E",
    success: "#466E60",
    error: "#B43B55",
    warning: "#866026",
  },
  dark: {
    ground: "#241D2B",
    vividPaper: "#2B2231",
    text: "#FFF1F8",
    brand: "#F2ACCC",
    brandText: "#362235",
    signature: "#C4AFF0",
    deepAccent: "#F2ACCC",
    success: "#A5D3BC",
    error: "#F6A1B8",
    warning: "#EAC68E",
  },
});

family.sortKey = "guga-doro-03-happy";

// Rose-tinted interaction layers need a brighter secondary label.
family.dark.textSecondary = "#CAB8CB";

family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
