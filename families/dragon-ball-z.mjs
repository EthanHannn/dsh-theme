import { createVividFamily } from "./create-vivid-family.js";

// Cell-era allies: cobalt armor, Piccolo's violet and Super Saiyan gold.
const family = createVividFamily({
  id: "dragon-ball-z",
  signaturePrefix: "zwarriors",
  names: { zh: "七龙珠·金焰并肩", en: "Dragon Ball · Golden Resolve" },
  phrases: {
    // Original lines: Goku, Vegeta, Gohan, Piccolo, Future Trunks.
    zh: [
      ["悟空：来吧，一起开始下一轮！", "悟空：先站稳，再试着发力。", "悟空：做得不错，再试一次！"],
      ["贝吉塔：这点程度，还远远不够。", "贝吉塔：下一次，我会做得更好。", "贝吉塔：少分心，专注眼前的事。"],
      ["悟饭：先稳住气，再慢慢发力。", "悟饭：这一轮，我想再试一次。", "悟饭：我能控制住这股力量！"],
      ["比克：沉住气，看清对方的动作。", "比克：先稳住呼吸。", "比克：力量，也需要控制。"],
      ["特兰克斯：剑带固定好了，随时可以开始。", "特兰克斯：这一次，我们一起面对。", "特兰克斯：下一轮对练，我准备好了。"],
    ],
    en: [
      ["Goku: Come on, let's start the next round!", "Goku: Get your footing before adding power.", "Goku: Nice work! Give it another try!"],
      ["Vegeta: That is nowhere near enough.", "Vegeta: I'll do better next time.", "Vegeta: Focus on what's in front of you."],
      ["Gohan: Steady my ki, then build it up slowly.", "Gohan: I'd like to try this round again.", "Gohan: I can control this power!"],
      ["Piccolo: Stay calm. Watch their moves.", "Piccolo: Steady your breathing first.", "Piccolo: Power needs control."],
      ["Trunks: Sword strap secured. Ready when you are.", "Trunks: This time, we face it together.", "Trunks: I'm ready for the next sparring round."],
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
