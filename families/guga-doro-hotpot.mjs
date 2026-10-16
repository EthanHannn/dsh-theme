import { createVividFamily } from "./create-vivid-family.js";

// Independent day/night activities share plush identities and calibrated head scale.
const family = createVividFamily({
  id: "guga-doro-hotpot",
  signaturePrefix: "guga-doro-hotpot",
  names: { zh: "咕嘎和 Doro · 日常 · 咕嘟火锅", en: "Guga & Doro · Daily Life · Hotpot Together" },
  phrases: {
    zh: [
      [
        "咕嘎。锅开啦，先吃一口。",
        "这一碗，给你留着。",
      ],
      [
        "doro～番茄汤好香呀！",
        "doro！再煮一颗丸子。",
      ],
      [
        "咕嘎。一起吃才热闹。",
        "doro～碰个小碗！",
      ],
      [
        "咕嘎。慢慢吃，不着急。",
        "doro～吃饱了，歇一会儿。",
      ]
    ],
    en: [
      [
        "Guga. The pot is bubbling!",
        "I saved this bowl for you.",
      ],
      [
        "Doro~ That tomato broth smells lovely!",
        "Doro! One more bite.",
      ],
      [
        "Guga. Meals are better together.",
        "Doro~ Cheers, little bowls!",
      ],
      [
        "Guga. Take your time.",
        "Doro~ Full and happy.",
      ]
    ],
  },
  light: {
    paper: "#FBF6EE",
    vividPaper: "#F7EBDD",
    ink: "#513B33",
    brand: "#A3482F",
    brandText: "#FFFFFF",
    signature: "#705021",
    deepAccent: "#A3482F",
    success: "#4E714F",
    error: "#AC3F46",
    warning: "#845E27",
  },
  dark: {
    ground: "#241C1A",
    vividPaper: "#302320",
    text: "#FFF0E5",
    brand: "#F4B58E",
    brandText: "#3A231D",
    signature: "#E7C189",
    deepAccent: "#F4B58E",
    success: "#B5D4AB",
    error: "#F1A2A7",
    warning: "#E7C189",
  }
});

family.sortKey = "guga-doro-02-daily-06-guga-doro-hotpot";
family.light.textSecondary = "#6A4A3D";
family.dark.textSecondary = "#DBBEB0";
// Shared canvas dimensions retain layout; head widths are calibrated per scene.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
