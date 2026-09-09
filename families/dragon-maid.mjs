import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "dragon-maid",
  signaturePrefix: "dgm",
  names: { zh: "小林家的龙女仆", en: "Miss Kobayashi's Dragon Maid" },
  phrases: {
    zh: [
      ["小林小姐，今天也交给我吧！", "要来一份蛋包饭吗？"],
      ["托尔：今天也元气满满！", "托尔：餐点已经准备好了。"],
      ["艾露玛：先吃一口。", "艾露玛：最后一口，真的。"],
    ],
    en: [
      ["Miss Kobayashi, leave today to me!", "Would you like omurice?"],
      ["Tohru: Full of energy today!", "Tohru: The meal is ready."],
      ["Elma: Just one bite first.", "Elma: Last bite. Really."],
    ],
  },
  light: { paper: "#FFF5E8", vividPaper: "#FCEEDD", ink: "#30323B", brand: "#397B65", brandText: "#FFFFFF", signature: "#C95D43", deepAccent: "#6F4D87", success: "#4D8964", error: "#BF4E49", warning: "#A86D22" },
  dark: { ground: "#10141A", vividPaper: "#131820", text: "#F5EDE2", brand: "#83C9AD", brandText: "#10271F", signature: "#F08A6D", deepAccent: "#D7A7EA", success: "#8ED0A5", error: "#F07C76", warning: "#E7B85C" },
});
