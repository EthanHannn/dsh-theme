import { createVividFamily } from "./create-vivid-family.js";

// Independent day/night activities share plush identities and calibrated head scale.
const family = createVividFamily({
  id: "guga-doro-camping",
  signaturePrefix: "guga-doro-camping",
  names: { zh: "咕嘎和 Doro · 日常 · 湖畔露营", en: "Guga & Doro · Daily Life · Lakeside Camping" },
  phrases: {
    zh: [
      [
        "咕嘎。湖边的风刚刚好。",
        "坐下来，喝口热的。",
      ],
      [
        "doro～棉花糖烤好啦！",
        "doro，这颗分给你。",
      ],
      [
        "咕嘎。毯子够我们俩。",
        "doro～再靠近一点点。",
      ],
      [
        "咕嘎。天上的星星亮了。",
        "doro～今晚一起数星星。",
      ]
    ],
    en: [
      [
        "Guga. The lake breeze feels lovely.",
        "Sit down for something warm.",
      ],
      [
        "Doro~ Marshmallows are ready!",
        "Doro. This one is for you.",
      ],
      [
        "Guga. Room for both under this blanket.",
        "Doro~ A little closer.",
      ],
      [
        "Guga. The stars are out.",
        "Doro~ Let's count them together.",
      ]
    ],
  },
  light: {
    paper: "#F6F6ED",
    vividPaper: "#EEF1E2",
    ink: "#344C3C",
    brand: "#466A45",
    brandText: "#FFFFFF",
    signature: "#6F5420",
    deepAccent: "#466A45",
    success: "#456D48",
    error: "#AD4650",
    warning: "#866527",
  },
  dark: {
    ground: "#1C2923",
    vividPaper: "#23362E",
    text: "#EFF5E7",
    brand: "#B8D79D",
    brandText: "#263B25",
    signature: "#E2C48E",
    deepAccent: "#B8D79D",
    success: "#B4D7AF",
    error: "#EFA6AA",
    warning: "#E2C48E",
  }
});

family.sortKey = "guga-doro-02-daily-08-guga-doro-camping";
family.light.textSecondary = "#455C4A";
family.dark.textSecondary = "#BDD0C2";
// Shared canvas dimensions retain layout; head widths are calibrated per scene.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
