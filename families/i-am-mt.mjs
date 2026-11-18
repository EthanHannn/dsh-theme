import { createVividFamily } from "./create-vivid-family.js";

const family = createVividFamily({
  id: "i-am-mt",
  signaturePrefix: "imt",
  names: { zh: "我叫MT · 部落冒险", en: "I Am MT · Horde Adventures" },
  phrases: {
    zh: [
      ["呆贼：潜行到位，准备开溜！", "这回真没贪那把匕首。"],
      ["猎人：别急，我先放个陷阱。", "箭带够了，方向也找对了！"],
      ["猎人：这次陷阱放对了。", "猎人：别自己踩进去了。"],
      ["呆贼：我就看一眼。", "呆贼：开箱前先看四周。"],
    ],
    en: [
      ["Daizei: Sneak in, sprint out!", "I wasn't eyeing that dagger. Honest."],
      ["Lieren: Let me set a trap first.", "Arrows packed. Right way this time!"],
      ["Lieren: The trap is right this time.", "Lieren: Mind your own trap."],
      ["Daizei: Just taking a look.", "Daizei: Look around before opening it."],
    ],
  },
  light: { paper: "#FFF1D8", vividPaper: "#F9E5C5", ink: "#3A3028", brand: "#A85A26", brandText: "#FFFFFF", signature: "#3C78A5", deepAccent: "#8B4324", success: "#5A8346", error: "#B13C32", warning: "#A66B1D" },
  dark: { ground: "#15110F", vividPaper: "#191411", text: "#F3E4CE", brand: "#E99B5C", brandText: "#2C1608", signature: "#75B6E2", deepAccent: "#F2C467", success: "#91C875", error: "#EF776B", warning: "#F2C467" },
});

// 四组获准场景在前，原版双人浅深配图作为第五组完整保留。
family.originalArtworkNames = { zh: "林间追猎", en: "Woodland Tracking" };
family.decor.wallpaperSize = "min(38vw, 500px, calc(53vh * var(--dsw-pack-wallpaper-ratio, 1)))";
family.decor.wallpaperPosition = "right 24px bottom 14px";
family.decor.heroTranslate = "calc(-0.30 * min(38vw, 500px)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(38vw, 500px) - 64px)";
family.decor.headerArt = { ...family.decor.headerArt, bakedHorizontalFade: true };

family.artworks = [
  {
    id: "rangers-contest",
    names: { zh: "猎手较量", en: "Rangers' Contest" },
  },
  {
    id: "camp-mishap",
    names: { zh: "营地插曲", en: "Camp Mishap" },
  },
  {
    id: "ruins-wayfinding",
    names: { zh: "遗迹探路", en: "Ruins Wayfinding" },
  },
  {
    id: "classic-duo",
    names: { zh: "原版劣人与呆贼", en: "Classic Lieren & Daizei" },
  },
];

export default family;
