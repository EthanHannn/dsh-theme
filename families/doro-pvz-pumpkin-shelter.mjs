import { createVividFamily } from "./create-vivid-family.js";

// 同一戴夫造型连接浅深两幅独立的植物日常。
const family = createVividFamily({
  id: "doro-pvz-pumpkin-shelter",
  signaturePrefix: "doro-pvz-pumpkin-shelter",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 南瓜守护屋",
    en: "Guga & Doro · Plants vs. Zombies · Pumpkin Shelter",
  },
  phrases: {
    zh: [
      [
        "doro～软垫铺好，小屋就暖和啦。",
        "doro？这条小被子，刚好盖住叶尖。",
      ],
      [
        "doro～南瓜壳里，也能睡个好觉。",
        "doro！小枕头放稳，今晚我来守着。",
      ],
      [
        "doro～茶慢慢喝，幼苗已经睡着啦。",
        "doro？月亮升高了，再陪你一小会儿。",
      ],
      [
        "doro！叶扣合上，秋天的小床收好了。",
        "doro～明天，也给你留一个暖位置。",
      ],
    ],
    en: [
      [
        "Doro~ Soft bedding makes a cozy little home.",
        "Doro? This blanket fits right over the leaf tips.",
      ],
      [
        "Doro~ A pumpkin shell makes a lovely bed.",
        "Doro! Pillow ready. I will keep watch tonight.",
      ],
      [
        "Doro~ Sip slowly. The little sprout is asleep.",
        "Doro? Moon is up. I will stay a little longer.",
      ],
      [
        "Doro! Leaf clasp closed. Bedding tucked away.",
        "Doro~ A warm little place for you tomorrow.",
      ],
    ],
  },
  light: {
    paper: "#FAF3E8",
    vividPaper: "#EEE0CC",
    ink: "#4D392C",
    brand: "#80502B",
    brandText: "#FFFFFF",
    signature: "#644020",
    deepAccent: "#80502B",
    success: "#38674D",
    error: "#9D454D",
    warning: "#79501F",
  },
  dark: {
    ground: "#2A2422",
    vividPaper: "#443831",
    text: "#F5F0E9",
    brand: "#E6BA84",
    brandText: "#2A2422",
    signature: "#EDD09A",
    deepAccent: "#E6BA84",
    success: "#B3D5BA",
    error: "#F1B1B8",
    warning: "#E9CB9B",
  },
});

family.sortKey = "guga-doro-03-pvz-11-pumpkin-shelter";
family.light.textSecondary = "#68503B";
family.dark.textSecondary = "#DAC9B6";
// 统一头部观感尺寸，并为正文与输入区保留空间。
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
