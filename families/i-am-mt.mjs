import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "i-am-mt",
  signaturePrefix: "imt",
  names: { zh: "我叫MT", en: "I Am MT" },
  phrases: { zh: [["我叫MT，铜墙铁壁的身躯！", "冲锋之前……先看看治疗在不在。"]], en: [["I'm MT—the toughest wall!", "Before charging…is the healer here?"]] },
  light: { paper: "#FFF1D8", vividPaper: "#F9E5C5", ink: "#3A3028", brand: "#A85A26", brandText: "#FFFFFF", signature: "#3C78A5", deepAccent: "#8B4324", success: "#5A8346", error: "#B13C32", warning: "#A66B1D" },
  dark: { ground: "#15110F", vividPaper: "#191411", text: "#F3E4CE", brand: "#E99B5C", brandText: "#2C1608", signature: "#75B6E2", deepAccent: "#F2C467", success: "#91C875", error: "#EF776B", warning: "#F2C467" },
});
