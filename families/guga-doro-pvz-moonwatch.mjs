import { createVividFamily } from "./create-vivid-family.js";

// Planting and defense share a material palette, with separately staged scenes.
const family = createVividFamily({
  id: "guga-doro-pvz-moonwatch",
  signaturePrefix: "guga-doro-pvz-moonwatch",
  names: {
    zh: "咕嘎 Doro·月夜守卫战",
    en: "Guga & Doro · Moonlight Garden Defense",
  },
  phrases: {
    zh: [
      [
        "咕嘎。蘑菇在这格，小路留给我们。",
        "咕嘎。先看路线，再开种。",
      ],
      [
        "doro～先睡一会，月亮来叫你。",
        "doro！给小喷菇找好位置啦。",
      ],
      [
        "咕嘎。坚果别怕，蘑菇阵醒了。",
        "咕嘎。这条小路，今晚不让。",
      ],
      [
        "doro～跟着灯走，我照着你。",
        "doro！月亮上班，我们也上班。",
      ],
    ],
    en: [
      [
        "Guga. Mushrooms here. Keep our path clear.",
        "Guga. Check the route, then plant.",
      ],
      [
        "Doro~ Rest a little. The moon will wake you.",
        "Doro! A perfect spot for Puff-shroom.",
      ],
      [
        "Guga. Easy, Wall-nut. Our mushrooms are awake.",
        "Guga. This path is ours tonight.",
      ],
      [
        "Doro~ Follow my lantern. I will light the way.",
        "Doro! The moon is up. Our shift begins.",
      ],
    ],
  },
  light: {
    paper: "#F8F5FC",
    vividPaper: "#EEEAF6",
    ink: "#443953",
    brand: "#645182",
    brandText: "#FFFFFF",
    signature: "#315A67",
    deepAccent: "#645182",
    success: "#457260",
    error: "#AA4C69",
    warning: "#8A6329",
  },
  dark: {
    ground: "#201D30",
    vividPaper: "#29243D",
    text: "#F4EFFB",
    brand: "#CDC0E9",
    brandText: "#302440",
    signature: "#A6D5DB",
    deepAccent: "#CDC0E9",
    success: "#ACD4BB",
    error: "#EDADC4",
    warning: "#E4C98D",
  },
});

family.sortKey = "guga-doro-11-pvz-moonwatch";
family.light.textSecondary = "#615270";
family.dark.textSecondary = "#D0C5E0";
// Independent poses use matched head scale on a shared portrait canvas.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
