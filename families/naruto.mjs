import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "naruto",
  signaturePrefix: "nrt",
  names: { zh: "火影忍者", en: "Naruto" },
  phrases: {
    zh: [
      ["说到做到，这就是我的忍道！", "影分身之术！"],
      ["小李：今天也要努力！", "小李：再来一组训练！"],
      ["天天：装备准备好了。", "天天：卷轴可别落下。"],
    ],
    en: [
      ["I never go back on my word!", "Shadow Clone Jutsu!"],
      ["Lee: Give it your all today!", "Lee: One more set!"],
      ["Tenten: Gear is ready.", "Tenten: Do not forget the scroll."],
    ],
  },
  light: { paper: "#FFF3DE", vividPaper: "#FCEBD2", ink: "#282D3A", brand: "#D95F18", brandText: "#FFFFFF", signature: "#2F588C", deepAccent: "#B7412B", success: "#4D7C45", error: "#B93732", warning: "#A96818" },
  dark: { ground: "#10141C", vividPaper: "#121820", text: "#F4EBDD", brand: "#FF9A4A", brandText: "#241207", signature: "#79A9DF", deepAccent: "#FFB35F", success: "#8FC47C", error: "#F4776D", warning: "#F2B95F" },
});
