import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "wow-dwarf",
  signaturePrefix: "wdw",
  names: { zh: "魔兽世界·矮人战士", en: "WoW Dwarf Warrior" },
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
  light: { paper: "#F5ECDD", vividPaper: "#EEE2CF", ink: "#303238", brand: "#4D657E", brandText: "#FFFFFF", signature: "#B96028", deepAccent: "#8A5429", success: "#4D7654", error: "#A63D32", warning: "#9C681E" },
  dark: { ground: "#121316", vividPaper: "#16181C", text: "#F0E7D8", brand: "#8FB4D7", brandText: "#10202D", signature: "#EF9350", deepAccent: "#F0B75F", success: "#85BD8C", error: "#ED796B", warning: "#F0B75F" },
});
