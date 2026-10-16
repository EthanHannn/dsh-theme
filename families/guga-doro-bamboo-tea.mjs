import { createVividFamily } from "./create-vivid-family.js";

// Natural materials and recurring travel objects connect the independent scenes.
const family = createVividFamily({
  id: "guga-doro-bamboo-tea",
  signaturePrefix: "guga-doro-bamboo-tea",
  names: { zh: "咕嘎和 Doro · 江湖 · 竹涧茶歇", en: "Guga & Doro · Jianghu · Bamboo Creek Tea" },
  phrases: {
    zh: [
      [
        "咕嘎。火候慢一点，茶香会等人。",
        "咕嘎。这阵风，只借给小炉子。",
      ],
      [
        "doro～先吹三下，再喝一小口。",
        "doro？你的杯子，也温好啦。",
      ],
      [
        "咕嘎。最后这颗，已经剥好。",
        "咕嘎。赶路前，先把手心暖暖。",
      ],
      [
        "doro～两只杯子，一起收好。",
        "doro！下一个歇脚处，还泡这壶茶。",
      ],
    ],
    en: [
      [
        "Guga. Easy with the fire. Tea can wait.",
        "Guga. This breeze is for the little stove.",
      ],
      [
        "Doro~ Three little blows, then one sip.",
        "Doro? Your cup is warm too.",
      ],
      [
        "Guga. The last chestnut. Peeled for you.",
        "Guga. Warm your paws before the road.",
      ],
      [
        "Doro~ Two cups, packed together.",
        "Doro! Same tea at our next stop.",
      ],
    ],
  },
  light: {
    paper: "#F1F7F0",
    vividPaper: "#E2EEDF",
    ink: "#2C4337",
    brand: "#356548",
    brandText: "#FFFFFF",
    signature: "#655024",
    deepAccent: "#356548",
    success: "#3C6C4C",
    error: "#A94D48",
    warning: "#7B5A22",
  },
  dark: {
    ground: "#172923",
    vividPaper: "#20392E",
    text: "#EDF7E9",
    brand: "#ADD5B5",
    brandText: "#1C3928",
    signature: "#E8CA8B",
    deepAccent: "#ADD5B5",
    success: "#ACD6AA",
    error: "#F0A39B",
    warning: "#E8CA8B",
  },
});

family.sortKey = "guga-doro-01-jianghu-02-guga-doro-bamboo-tea";
family.light.textSecondary = "#48604D";
family.dark.textSecondary = "#BFD4C2";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
