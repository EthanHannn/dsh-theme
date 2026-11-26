import { createVividFamily } from "./create-vivid-family.js";

const family = createVividFamily({
  id: "wow-blood-elf",
  signaturePrefix: "wbe",
  names: { zh: "魔兽世界", en: "World of Warcraft" },
  phrases: {
    zh: [
      ["为了辛多雷的荣耀。", "太阳之井的光芒仍在。"],
      ["圣光照亮前路。", "盾牌举稳，向前。"],
      ["旅途也需要片刻宁静。", "翻过这一页，再出发。"],
    ],
    en: [
      ["For the glory of the Sin'dorei.", "The Sunwell still shines."],
      ["The Light shows the way.", "Shield steady. Forward."],
      ["A quiet moment on the road.", "One more page, then onward."],
    ],
  },
  light: { paper: "#FFF3DD", vividPaper: "#F8E8CF", ink: "#352A31", brand: "#9E2F3D", brandText: "#FFFFFF", signature: "#C6922E", deepAccent: "#7E284E", success: "#4F8C64", error: "#A92F3C", warning: "#9A6B1D" },
  dark: { ground: "#170D16", vividPaper: "#1B101A", text: "#F6E7D4", brand: "#F07B8E", brandText: "#300B13", signature: "#F0C65E", deepAccent: "#F0C65E", success: "#77D69A", error: "#F07B8E", warning: "#F0C65E" },
});

// 合并艾泽拉斯四族为单一入口，各场景沿用原配图、物件、文件夹、侧栏角色与短句。
family.originalArtworkNames = { zh: "血精灵", en: "Blood Elf" };
family.legacyFamilies = [
  { id: "wow-dwarf", artwork: "dwarf" },
  { id: "wow-orc", artwork: "orc" },
  { id: "wow-tauren", artwork: "tauren" },
];
family.artworks = [
  {
    id: "dwarf",
    names: { zh: "矮人", en: "Dwarf" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["为卡兹莫丹而战！", "先来一杯，再上战场。"],
          ["目标确认，稳住。", "看风向，别着急。"],
          ["新的发现就在前面。", "灯还亮着，继续探索。"],
        ],
        en: [
          ["For Khaz Modan!", "One ale, then battle."],
          ["Target spotted. Steady.", "Read the wind. Take your time."],
          ["A new discovery lies ahead.", "The lantern is lit. Keep exploring."],
        ],
      },
    },
  },
  {
    id: "orc",
    names: { zh: "兽人战士", en: "Orc Warrior" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["力量与荣耀！", "为了部落！"],
          ["为了部落，整装出发。", "双斧在手，勇往直前。"],
          ["磨好斧头，再上路。", "火堆边歇一会儿。"],
        ],
        en: [
          ["Strength and honor!", "For the Horde!"],
          ["For the Horde. Gear up.", "Axes ready. Onward."],
          ["Sharpen the axe, then march.", "Rest by the campfire."],
        ],
      },
    },
  },
  {
    id: "tauren",
    names: { zh: "牛头人德鲁伊", en: "Tauren Druid" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["愿大地母亲护佑你。", "聆听风与草木的低语。"],
          ["愿每一颗种子都能生根。", "种下一点新的希望。"],
          ["咕咕，月光正好。", "月光下，伸个懒腰。"],
        ],
        en: [
          ["May the Earth Mother watch over you.", "Listen to the whispers of wind and leaf."],
          ["May every seed take root.", "Plant a little hope."],
          ["Hoot. A fine moon tonight.", "A stretch in the moonlight."],
        ],
      },
    },
  },
];

export default family;
