import { createVividFamily } from "./create-vivid-family.js";

// Official skin references: game.gtimg.cn/images/yxzj/img201606/skin/hero-info/
// 141/141-bigskin-4.jpg (仲夏夜之梦), 505/505-bigskin-3.jpg (遇见神鹿),
// 191/191-bigskin-6.jpg (白鹤梁神女), 199/199-bigskin-5.jpg (祈雪灵祝).
// Original character-inspired lines, in the same order as the companions.
const family = createVividFamily({
  id: "hok-moonlit-bloom",
  signaturePrefix: "hok-moonlit-bloom",
  names: {
    zh: "王者荣耀·花月幻境",
    en: "Honor of Kings · Moonlit Bloom",
  },
  phrases: {
    zh: [
      ["貂蝉：指尖这只蝶，也舍不得夜色。", "借一片蝶翼，藏住仲夏的梦。"],
      ["瑶：鹿角上的花，又开了一朵。", "跟着杖尖的光，慢慢走。"],
      ["大乔：把心事放轻，听一听水声。", "归途的灯，已经亮了。"],
      ["公孙离：伞下留了你的位置。", "雪会停，花也会再开。"],
    ],
    en: [
      ["Diao Chan: This butterfly lingers for the night.", "A butterfly wing shelters a midsummer dream."],
      ["Yao: Another flower blooms on my antlers.", "Follow the light at my staff's tip."],
      ["Da Qiao: Set your worries down and hear the water.", "The lights along the way home are lit."],
      ["Gongsun Li: There is room under my parasol.", "Snow will pass, and flowers will return."],
    ],
  },
  light: {
    paper: "#F3F8F5",
    vividPaper: "#EAF3EF",
    ink: "#2A3B3D",
    brand: "#356F6A",
    brandText: "#FFFFFF",
    signature: "#674C82",
    deepAccent: "#795A99",
    success: "#3B745B",
    error: "#B24260",
    warning: "#83602C",
  },
  dark: {
    ground: "#142627",
    vividPaper: "#1B3031",
    text: "#EEF7F4",
    brand: "#A6D9CB",
    brandText: "#16302E",
    signature: "#D2B8EB",
    deepAccent: "#D2B8EB",
    success: "#A5D3AD",
    error: "#F2A4BD",
    warning: "#E1C692",
  },
});

// Secondary labels need extra contrast on tinted settings hover surfaces.
family.dark.textSecondary = "#B9CBC7";

// Keep the four-person portrait inside the reading gutter at desktop widths.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
