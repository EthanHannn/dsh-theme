import { createVividFamily } from "./create-vivid-family.js";

// One wizard identity connects distinct daily activities in each mode.
const family = createVividFamily({
  id: "doro-mage-cloud-bakery",
  signaturePrefix: "doro-mage-cloud-bakery",
  names: {
    zh: "咕嘎和 Doro · 魔法师 · 云朵烘焙",
    en: "Guga & Doro · Wizard Life · Cloud Bakery",
  },
  phrases: {
    zh: [
      [
        "doro！小面包，轻轻飞起来。",
        "doro～云朵要烤得松松的。",
      ],
      [
        "doro？鼻尖这点，也是面粉。",
        "doro～碗里还有一朵没醒的云。",
      ],
      [
        "doro～一颗星星，点一滴甜。",
        "doro！这枚糖霜，画得圆圆的。",
      ],
      [
        "doro～丝带系好，明天有礼物。",
        "doro！盒子里，装着刚出炉的好心情。",
      ],
    ],
    en: [
      [
        "Doro! Little bun, float up gently.",
        "Doro~ Clouds should bake soft and fluffy.",
      ],
      [
        "Doro? Yes, that is flour on my nose.",
        "Doro~ One sleepy cloud is still in the bowl.",
      ],
      [
        "Doro~ One star, one little drop of sweet.",
        "Doro! A round little dot of icing.",
      ],
      [
        "Doro~ Ribbon tied. Tomorrow has a present.",
        "Doro! A box full of freshly baked happiness.",
      ],
    ],
  },
  light: {
    paper: "#F7F1FA",
    vividPaper: "#EEE3F3",
    ink: "#4B3D58",
    brand: "#765987",
    brandText: "#FFFFFF",
    signature: "#754423",
    deepAccent: "#765987",
    success: "#3E705B",
    error: "#A34D63",
    warning: "#805C26",
  },
  dark: {
    ground: "#2C2438",
    vividPaper: "#3B2E48",
    text: "#F7EDF9",
    brand: "#D9BCE8",
    brandText: "#2C2438",
    signature: "#F0CD99",
    deepAccent: "#D9BCE8",
    success: "#B2DDBF",
    error: "#F2A6B9",
    warning: "#ECD096",
  },
});

family.sortKey = "guga-doro-04-mage-02-cloud-bakery";
family.light.textSecondary = "#6A5575";
family.dark.textSecondary = "#DDC8E6";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
