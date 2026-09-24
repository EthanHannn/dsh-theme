import { createVividFamily } from "./create-vivid-family.js";

// Cell-era allies: cobalt armor, Piccolo's violet and Super Saiyan gold.
const family = createVividFamily({
  id: "dragon-ball-z",
  signaturePrefix: "zwarriors",
  names: { zh: "七龙珠·金焰并肩", en: "Dragon Ball · Golden Resolve" },
  phrases: {
    // Original lines: Goku, Vegeta, Gohan, Piccolo, Future Trunks.
    zh: [
      ["悟空：来吧，再突破一次！", "悟空：遇到强手，才更有意思。", "悟空：还有力气，就继续试试。"],
      ["贝吉塔：这点程度，还远远不够。", "贝吉塔：下一次，我会做得更好。", "贝吉塔：少分心，专注眼前的事。"],
      ["悟饭：我想把这件事做好。", "悟饭：再难，也要勇敢试一次。", "悟饭：有大家在，我就不怕。"],
      ["比克：沉住气，看清对方的动作。", "比克：先稳住呼吸。", "比克：力量，也需要控制。"],
      ["特兰克斯：未来还可以改变。", "特兰克斯：这一次，我们一起面对。", "特兰克斯：先做好眼前能做的事。"],
    ],
    en: [
      ["Goku: Let's push past our limits!", "Goku: A strong opponent makes it fun.", "Goku: Still got energy? Try again."],
      ["Vegeta: That is nowhere near enough.", "Vegeta: I'll do better next time.", "Vegeta: Focus on what's in front of you."],
      ["Gohan: I want to get this right.", "Gohan: It's hard, but I'll give it a try.", "Gohan: With everyone here, I'm not afraid."],
      ["Piccolo: Stay calm. Watch their moves.", "Piccolo: Steady your breathing first.", "Piccolo: Power needs control."],
      ["Trunks: The future can still change.", "Trunks: This time, we face it together.", "Trunks: Start with what we can do now."],
    ],
  },
  light: {
    paper: "#F8F8FC", vividPaper: "#F0F1F8", ink: "#2D324A",
    brand: "#465895", brandText: "#FFFFFF", signature: "#915C18",
    deepAccent: "#785693", success: "#466D58", error: "#B13D50", warning: "#885D18",
    parameter: "#795894", function: "#925066",
  },
  dark: {
    ground: "#13182D", vividPaper: "#191E37", text: "#EFF1FC",
    brand: "#B3C6FF", brandText: "#202C50", signature: "#EBC369",
    deepAccent: "#CFB1EA", success: "#A8D0AF", error: "#F2A2B0", warning: "#EBC369",
    parameter: "#D1BCEC", function: "#EDB0BF",
  },
});

family.dark.textSecondary = "#CDD0E5";
family.decor.wallpaperSize = "min(43vw, 540px, 54vh)";
family.decor.heroTranslate = "calc(-0.4 * min(43vw, 540px, 54vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(43vw, 540px, 54vh) - 64px)";

export default family;
