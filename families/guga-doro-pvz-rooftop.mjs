import { createVividFamily } from "./create-vivid-family.js";

// Fitted tilted pot hats and Doro's small shirt tie the independent scenes together.
const family = createVividFamily({
  id: "guga-doro-pvz-rooftop",
  signaturePrefix: "guga-doro-pvz-rooftop",
  names: {
    zh: "咕嘎 Doro·屋顶投手队",
    en: "Guga & Doro · Rooftop Pult Crew",
  },
  phrases: {
    zh: [
      [
        "咕嘎。花盆坐稳，玉米就上班。",
        "咕嘎。屋顶这一格，留给你。",
      ],
      [
        "doro～小篮子装满，肚肚也圆圆。",
        "doro！补给送到，白衬衣没弄脏。",
      ],
      [
        "咕嘎。抬高一点，黄油准备。",
        "咕嘎。这次走弧线。",
      ],
      [
        "doro～这一小块，留给大场面。",
        "doro！锅帽歪了，勇气没歪。",
      ],
    ],
    en: [
      [
        "Guga. Pot steady. Corn is on duty.",
        "Guga. This rooftop tile is yours.",
      ],
      [
        "Doro~ Full little basket, round little belly.",
        "Doro! Supplies here. Shirt still clean.",
      ],
      [
        "Guga. A little higher. Butter ready.",
        "Guga. This one takes the curved route.",
      ],
      [
        "Doro~ One little square for a big moment.",
        "Doro! Hat tilted. Courage steady.",
      ],
    ],
  },
  light: {
    paper: "#FCF7EF",
    vividPaper: "#F5E9D6",
    ink: "#563E32",
    brand: "#975336",
    brandText: "#FFFFFF",
    signature: "#795022",
    deepAccent: "#975336",
    success: "#4A7044",
    error: "#AF4E47",
    warning: "#8B5C1D",
  },
  dark: {
    ground: "#302126",
    vividPaper: "#402C31",
    text: "#FFF1DF",
    brand: "#EDC296",
    brandText: "#462B20",
    signature: "#F3D78D",
    deepAccent: "#EDC296",
    success: "#C2D69B",
    error: "#F4ABA5",
    warning: "#F3D78D",
  },
});

family.sortKey = "guga-doro-13-pvz-rooftop";
family.light.textSecondary = "#6C5344";
family.dark.textSecondary = "#E0C7B8";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
