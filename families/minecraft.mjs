import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "minecraft",
  signaturePrefix: "mcf",
  names: { zh: "我的世界", en: "Minecraft" },
  phrases: {
    zh: [
      ["先撸一棵树。", "嘶——小心苦力怕！"],
      ["Alex：再挖一层看看。", "Alex：火把带够了吗？"],
      ["伙伴已就位。", "摇摇尾巴，出发吧。"],
    ],
    en: [
      ["First, punch a tree.", "Sss—watch out for Creepers!"],
      ["Alex: One more layer.", "Alex: Enough torches?"],
      ["Companion ready.", "Tail wagging. Let us go."],
    ],
  },
  light: { paper: "#F3EED8", vividPaper: "#EDE6CC", ink: "#29362B", brand: "#4E7F3A", brandText: "#FFFFFF", signature: "#2B9EA3", deepAccent: "#7B542E", success: "#4E7F3A", error: "#A53D37", warning: "#A66F22" },
  dark: { ground: "#101715", vividPaper: "#121B18", text: "#EDF1E2", brand: "#88C66B", brandText: "#13220D", signature: "#61D7DD", deepAccent: "#D6A65C", success: "#88C66B", error: "#E6756A", warning: "#D6A65C" },
});
