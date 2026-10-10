import { createVividFamily } from "./create-vivid-family.js";

// Honey toast in the morning; amber lamplight and a book after sunset.
const family = createVividFamily({
  id: "guga-cozy",
  signaturePrefix: "guga-cozy",
  names: { zh: "咕嘎 Doro·暖阳小日子", en: "Guga & Doro · Cozy Little Days" },
  phrases: {
    zh: [
      ["咕嘎。吐司烤好了，分你一半。", "咕嘎，今天的太阳暖暖的。"],
      ["咕嘎。小花又开了一朵。", "咕嘎，一起晒会儿太阳吧。"],
      ["咕嘎。热牛奶放这儿啦。", "咕嘎，翻完这页就去睡觉。"],
    ],
    en: [
      ["Guga. Toast is ready. Half is yours.", "Guga. The sunshine feels lovely today."],
      ["Guga. Another little flower opened.", "Guga. Stay in the sunshine with me."],
      ["Guga. Your warm milk is right here.", "Guga. One more page, then bedtime."],
    ],
  },
  light: {
    paper: "#FFF8EC",
    vividPaper: "#FFF0DA",
    ink: "#3B3029",
    brand: "#8D541E",
    brandText: "#FFFFFF",
    signature: "#3D7773",
    deepAccent: "#8D541E",
    success: "#456C57",
    error: "#B1404B",
    warning: "#846024",
  },
  dark: {
    ground: "#221E1B",
    vividPaper: "#28231F",
    text: "#FFF1DC",
    brand: "#F0C080",
    brandText: "#302219",
    signature: "#9BCAC4",
    deepAccent: "#F0C080",
    success: "#A9D0AC",
    error: "#F1A0AA",
    warning: "#E9CA90",
  },
});

// Keep the daily-life branches beside the original Jianghu branch.
family.sortKey = "guga-doro-02-cozy";

// Give secondary labels enough contrast on warm hover surfaces.
family.dark.textSecondary = "#C7BBAA";

// Portrait scene islands stay inside the right reading gutter on wide screens.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
