import { createVividFamily } from "./create-vivid-family.js";

// The reference costume connects moon-lamp crafting with evening observation.
const family = createVividFamily({
  id: "doro-mage-starmoon-atelier",
  signaturePrefix: "doro-mage-starmoon-atelier",
  names: {
    zh: "咕嘎和 Doro · 魔法师 · 星月工坊",
    en: "Guga & Doro · Wizard Life · Starmoon Atelier",
  },
  phrases: {
    zh: [
      [
        "doro～把这颗小星星，嵌进月亮里。",
        "doro？再转半圈，星晶就坐稳啦。",
      ],
      [
        "doro！白天做的小月灯，终于亮啦。",
        "doro～留一小格月光，陪你到很晚。",
      ],
      [
        "doro？这条星线，是不是通往月亮？",
        "doro～星镜调好，今晚慢慢看。",
      ],
      [
        "doro～帽尖也困了，今天先看到这里。",
        "doro！星图收好，明晚还来呀。",
      ],
    ],
    en: [
      [
        "Doro~ A little star, tucked inside the moon.",
        "Doro? Half a turn. The star crystal fits.",
      ],
      [
        "Doro! The moon lamp we made is glowing!",
        "Doro~ A little moonlight to keep you company.",
      ],
      [
        "Doro? Does this star trail lead to the moon?",
        "Doro~ Telescope ready. Take your time tonight.",
      ],
      [
        "Doro~ Even my hat tip is sleepy now.",
        "Doro! Charts packed. See you tomorrow night.",
      ],
    ],
  },
  light: {
    paper: "#F7F3FC",
    vividPaper: "#EAE3F4",
    ink: "#40364F",
    brand: "#624683",
    brandText: "#FFFFFF",
    signature: "#65451F",
    deepAccent: "#624683",
    success: "#3B6758",
    error: "#9E4961",
    warning: "#77521F",
  },
  dark: {
    ground: "#242230",
    vividPaper: "#353046",
    text: "#F5EFFA",
    brand: "#CCB7EC",
    brandText: "#242230",
    signature: "#F0D19A",
    deepAccent: "#CCB7EC",
    success: "#AFD5C4",
    error: "#F0ABC0",
    warning: "#EDD299",
  },
});

family.sortKey = "guga-doro-04-mage-04-starmoon-atelier";
family.light.textSecondary = "#5C4C6C";
family.dark.textSecondary = "#D6C9E5";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
