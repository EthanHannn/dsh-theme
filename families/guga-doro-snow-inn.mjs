import { createVividFamily } from "./create-vivid-family.js";

// Natural materials and recurring travel objects connect the independent scenes.
const family = createVividFamily({
  id: "guga-doro-snow-inn",
  signaturePrefix: "guga-doro-snow-inn",
  names: { zh: "咕嘎和 Doro · 江湖 · 雪驿围炉", en: "Guga & Doro · Jianghu · Snowbound Hearth" },
  phrases: {
    zh: [
      [
        "咕嘎。扫出一条路，等你回门。",
        "咕嘎。门槛干净，今晚睡得踏实。",
      ],
      [
        "doro～三根小柴，够暖两双手。",
        "doro！柴抱回来啦，围巾也没丢。",
      ],
      [
        "咕嘎。再翻一面，甜味就出来。",
        "咕嘎。别急，炉火比脚步慢一点。",
      ],
      [
        "doro～一人一半，最甜的都在中间。",
        "doro！雪再大，也冻不着这一口。",
      ],
    ],
    en: [
      [
        "Guga. A clear path for your way back.",
        "Guga. Clean doorstep, peaceful sleep.",
      ],
      [
        "Doro~ Three little logs for four warm paws.",
        "Doro! Wood is here. Scarf is safe too.",
      ],
      [
        "Guga. One more turn brings out the sweet.",
        "Guga. Easy. The hearth takes its time.",
      ],
      [
        "Doro~ Half for each. Sweetest in the middle.",
        "Doro! No snow can chill this bite.",
      ],
    ],
  },
  light: {
    paper: "#F5F5FA",
    vividPaper: "#E8E8F2",
    ink: "#443E54",
    brand: "#675378",
    brandText: "#FFFFFF",
    signature: "#70482D",
    deepAccent: "#675378",
    success: "#4B6D59",
    error: "#AC4F64",
    warning: "#845922",
  },
  dark: {
    ground: "#302535",
    vividPaper: "#3B2D40",
    text: "#FAEFF7",
    brand: "#E4BFD4",
    brandText: "#492F42",
    signature: "#F0CD99",
    deepAccent: "#E4BFD4",
    success: "#C2D8B2",
    error: "#F6ACB8",
    warning: "#F0CD99",
  },
});

family.sortKey = "guga-doro-01-jianghu-04-guga-doro-snow-inn";
family.light.textSecondary = "#60546C";
family.dark.textSecondary = "#DFCADB";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
