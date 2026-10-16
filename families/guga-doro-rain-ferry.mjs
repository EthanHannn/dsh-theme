import { createVividFamily } from "./create-vivid-family.js";

// Natural materials and recurring travel objects connect the independent scenes.
const family = createVividFamily({
  id: "guga-doro-rain-ferry",
  signaturePrefix: "guga-doro-rain-ferry",
  names: { zh: "咕嘎和 Doro · 江湖 · 烟雨摆渡", en: "Guga & Doro · Jianghu · Rainy River Ferry" },
  phrases: {
    zh: [
      [
        "咕嘎。结打牢，雨就进不来。",
        "咕嘎。这一小段绳，护一船干燥。",
      ],
      [
        "doro～小纸船，替我们先探路。",
        "doro？它也想去对岸看看。",
      ],
      [
        "咕嘎。桨声轻些，别惊着晚风。",
        "咕嘎。慢慢划，靠岸前再歇一歇。",
      ],
      [
        "doro～灯往这边，包袱不会湿。",
        "doro！你顾桨，我顾回家的光。",
      ],
    ],
    en: [
      [
        "Guga. A good knot keeps the rain out.",
        "Guga. One little rope, one dry boat.",
      ],
      [
        "Doro~ Little paper boat, scout ahead.",
        "Doro? It wants to see the far bank too.",
      ],
      [
        "Guga. Gentle strokes for a quiet river.",
        "Guga. Slowly. One more rest before shore.",
      ],
      [
        "Doro~ Light this way. The bundle stays dry.",
        "Doro! You row. I will keep our light.",
      ],
    ],
  },
  light: {
    paper: "#F0F4FA",
    vividPaper: "#E3EAF3",
    ink: "#303E55",
    brand: "#425D84",
    brandText: "#FFFFFF",
    signature: "#69502E",
    deepAccent: "#425D84",
    success: "#3F6B62",
    error: "#AB5262",
    warning: "#806023",
  },
  dark: {
    ground: "#1C2538",
    vividPaper: "#28354B",
    text: "#EEF2FC",
    brand: "#B9CFF1",
    brandText: "#263A58",
    signature: "#E6CB9B",
    deepAccent: "#B9CFF1",
    success: "#B1D8C9",
    error: "#F0AABB",
    warning: "#E6CB9B",
  },
});

family.sortKey = "guga-doro-01-jianghu-03-guga-doro-rain-ferry";
family.light.textSecondary = "#4E5E76";
family.dark.textSecondary = "#C6D1E5";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
