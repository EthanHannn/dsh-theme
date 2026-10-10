import { createVividFamily } from "./create-vivid-family.js";

// Classic plush friends share realistic pastries and crockery in a cafe cutout.
const family = createVividFamily({
  id: "guga-doro-cafe",
  signaturePrefix: "guga-doro-cafe",
  names: { zh: "咕嘎 Doro·街角咖啡", en: "Guga & Doro · Corner Cafe" },
  phrases: {
    zh: [
      ["咕嘎。这块酥酥的，留给你。", "doro～一起吃才更香呀！"],
      ["咕嘎。热饮还暖着呢。", "doro～在这里多坐一会儿吧。"],
      ["咕嘎。今天也有小小的快乐。", "doro～有你在，刚刚好。"],
    ],
    en: [
      ["Guga. This flaky bite is for you.", "Doro~ It tastes better together!"],
      ["Guga. Our drink is still warm.", "Doro~ Let's stay a little longer."],
      ["Guga. A little joy for today.", "Doro~ Being with you feels just right."],
    ],
  },
  light: {
    paper: "#F7F3ED",
    vividPaper: "#EEE7DC",
    ink: "#343B37",
    brand: "#49665B",
    brandText: "#FFFFFF",
    signature: "#915E2F",
    deepAccent: "#49665B",
    success: "#4A7155",
    error: "#A74751",
    warning: "#846025",
  },
  dark: {
    ground: "#211F1D",
    vividPaper: "#292624",
    text: "#F3EEE5",
    brand: "#B6CEBF",
    brandText: "#25352C",
    signature: "#E4B986",
    deepAccent: "#B6CEBF",
    success: "#B3D2B5",
    error: "#E9A5AE",
    warning: "#DFC28C",
  },
});

family.sortKey = "guga-doro-06-cafe";
family.dark.textSecondary = "#CEC5BA";
// Keep the paired foreground scene clear beside the home-page composer.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
