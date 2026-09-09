import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "wow-tauren",
  signaturePrefix: "wta",
  names: { zh: "魔兽世界·牛头人德鲁伊", en: "WoW Tauren Druid" },
  phrases: {
    zh: [
      ["愿大地母亲护佑你。", "聆听风与草木的低语。"],
      ["愿大地母亲护佑你。", "种下一点新的希望。"],
      ["咕咕，月光正好。", "月光下，伸个懒腰。"],
    ],
    en: [
      ["May the Earth Mother watch over you.", "Listen to the whispers of wind and leaf."],
      ["May the Earth Mother guide you.", "Plant a little hope."],
      ["Hoot. A fine moon tonight.", "A stretch in the moonlight."],
    ],
  },
  light: { paper: "#F4E8D2", vividPaper: "#EEDFC5", ink: "#352D27", brand: "#765033", brandText: "#FFFFFF", signature: "#2E7180", deepAccent: "#9A602D", success: "#53764B", error: "#9B3E32", warning: "#94641E" },
  dark: { ground: "#15110E", vividPaper: "#19140F", text: "#EFE5D3", brand: "#C59B70", brandText: "#28170C", signature: "#72B7C4", deepAccent: "#E1A75C", success: "#8FC282", error: "#E57668", warning: "#E1A75C" },
});
