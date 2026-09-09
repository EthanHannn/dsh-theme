import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "wow-blood-elf",
  signaturePrefix: "wbe",
  names: { zh: "魔兽世界·血精灵", en: "WoW Blood Elf" },
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
