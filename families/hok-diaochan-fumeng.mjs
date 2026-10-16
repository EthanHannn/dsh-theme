import { createVividFamily } from "./create-vivid-family.js";

// Mucha collaboration: spring/day Fan Hua and winter/night Fu Meng forms.
// https://bbs.4399.cn/thread-view-tid-49044756
// Original companion phrases, not quotations from the game.
const family = createVividFamily({
  id: "hok-diaochan-fumeng",
  signaturePrefix: "hok-diaochan-fumeng",
  names: {
    zh: "王者荣耀·貂蝉·馥梦繁花",
    en: "Honor of Kings · Diaochan: Fumeng Fanhua",
  },
  phrases: {
    zh: [
      ["貂蝉：让灵感像花一样舒展。", "把眼前这一页，慢慢写好。"],
      ["貂蝉：夜色静了，思绪更清。", "留一点余裕，等灵感落下。"],
    ],
    en: [
      ["Diaochan: Let your ideas unfold like flowers.", "Give this page the time it needs."],
      ["Diaochan: A quiet night makes room for thought.", "Leave a little room for inspiration."],
    ],
  },
  light: {
    paper: "#F7F5EC",
    vividPaper: "#F1EFE2",
    ink: "#344D45",
    brand: "#426F5F",
    brandText: "#FFFFFF",
    signature: "#6E5233",
    deepAccent: "#8B6841",
    success: "#487A58",
    error: "#B1415A",
    warning: "#886520",
  },
  dark: {
    ground: "#181C32",
    vividPaper: "#232942",
    text: "#EEF0FD",
    brand: "#B9CFFF",
    brandText: "#222D49",
    signature: "#D1BCEC",
    deepAccent: "#D1BCEC",
    success: "#A9D8CD",
    error: "#F0A5C3",
    warning: "#DFC58E",
  },
});

// Keep secondary labels legible on tinted settings hover surfaces.
family.light.textSecondary = "#4F655A";
family.dark.textSecondary = "#C4C9DF";

// The paired 760x1510 canvases align eyes and soles at the same body scale.
// Keep the complete winter crown and trailing hair beside the reading column.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
