import { createVividFamily } from "./create-vivid-family.js";

// Wuxiang peerless skin: official announcement and reference design material.
// https://www.taptap.cn/moment/754831784436304136
// https://www.sina.cn/news/detail/5250324851855907.html
// Original character-inspired lines; not quotations from the game.
const family = createVividFamily({
  id: "hok-wukong-wuxiang",
  signaturePrefix: "hok-wukong-wuxiang",
  names: {
    zh: "王者荣耀·孙悟空·无相",
    en: "Honor of Kings · Wukong: Wuxiang",
  },
  phrases: {
    zh: [
      ["悟空：静下心来，自有眉目。", "一朵莲开，也是一程。"],
      ["悟空：心有定处，便向前走。", "眼前的难关，陪你一道过。"],
    ],
    en: [
      ["Wukong: A quiet mind sees the way.", "Each lotus bloom marks a step."],
      ["Wukong: Keep your purpose clear, then move.", "We will face this challenge together."],
    ],
  },
  light: {
    paper: "#F7F3EB",
    vividPaper: "#F1EADD",
    ink: "#3C332C",
    brand: "#805D2F",
    brandText: "#FFFFFF",
    signature: "#694A6A",
    deepAccent: "#825B83",
    success: "#4A7155",
    error: "#AF4051",
    warning: "#83601F",
  },
  dark: {
    ground: "#211D1A",
    vividPaper: "#2B241F",
    text: "#F7EFDF",
    brand: "#E5C991",
    brandText: "#32251A",
    signature: "#D7BBE0",
    deepAccent: "#D7BBE0",
    success: "#ADCDAA",
    error: "#EDA5B6",
    warning: "#E9C68B",
  },
});

// Warm secondary labels retain contrast on the dark settings hover surfaces.
family.dark.textSecondary = "#CEC1B2";

// Keep the full halo and staff clear of the main reading column.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
