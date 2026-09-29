import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "dragon-maid",
  signaturePrefix: "dgm",
  names: { zh: "小林家的龙女仆", en: "Miss Kobayashi's Dragon Maid" },
  phrases: {
    zh: [
      ["托尔：蛋包饭做好了，趁热吃吧！", "托尔：小林小姐，午餐交给我吧！"],
      ["托尔：轻一点，康娜已经睡着了。", "托尔：餐盘擦好，今天也辛苦了。"],
      ["艾露玛：先吃一口。", "艾露玛：最后一口，真的。"],
    ],
    en: [
      ["Tohru: Omurice is ready. Enjoy it while it's hot!", "Tohru: Miss Kobayashi, leave lunch to me!"],
      ["Tohru: Quietly now. Kanna is asleep.", "Tohru: Plates dried. You've worked hard today."],
      ["Elma: Just one bite first.", "Elma: Last bite. Really."],
    ],
  },
  light: { paper: "#FFF5E8", vividPaper: "#FCEEDD", ink: "#30323B", brand: "#397B65", brandText: "#FFFFFF", signature: "#C95D43", deepAccent: "#6F4D87", success: "#4D8964", error: "#BF4E49", warning: "#A86D22" },
  dark: { ground: "#10141A", vividPaper: "#131820", text: "#F5EDE2", brand: "#83C9AD", brandText: "#10271F", signature: "#F08A6D", deepAccent: "#D7A7EA", success: "#8ED0A5", error: "#F07C76", warning: "#E7B85C" },
});
