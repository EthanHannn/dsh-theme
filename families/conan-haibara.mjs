import { createVividFamily } from "./create-vivid-family.js";

// Sage cloth, auburn hair and amber glass: a quiet day off / a late lab night.
const family = createVividFamily({
  id: "conan-haibara",
  signaturePrefix: "haibara",
  names: { zh: "灰原哀·琥珀微光", en: "Ai Haibara · Amber Quiet" },
  phrases: {
    // Original lines for the coffee, research and kitten companions, in order.
    zh: [
      ["灰原：咖啡还温着，先坐一会儿。", "灰原：下过雨，空气倒是清爽了。", "灰原：今天也留一点时间给自己。", "灰原：不必每件事都急着找答案。"],
      ["灰原：假设不错，证据呢？", "灰原：这个细节，再核对一次。", "灰原：别熬太晚，明天还要继续。", "灰原：慢一点，记录要写清楚。"],
      ["灰原：轻一点，它刚睡着。", "灰原：它好像很喜欢这里。", "灰原：看来今天得陪它一会儿。", "灰原：嘘，休息时间。"],
    ],
    en: [
      ["Haibara: The coffee's still warm. Sit awhile.", "Haibara: The rain left the air so clear.", "Haibara: Save a little time for yourself.", "Haibara: Some answers can wait."],
      ["Haibara: A good hypothesis. Where's the evidence?", "Haibara: Check that detail once more.", "Haibara: Don't stay up too late.", "Haibara: Take your time with those notes."],
      ["Haibara: Gently. It just fell asleep.", "Haibara: It seems to like it here.", "Haibara: I think I'll keep it company.", "Haibara: Shh. Time for a break."],
    ],
  },
  light: {
    paper: "#F6F7F1", vividPaper: "#EEF2E9", ink: "#293B35",
    brand: "#436A5C", brandText: "#FFFFFF", signature: "#936035",
    deepAccent: "#805438", success: "#3E7059", error: "#B13E4A", warning: "#85621E",
    parameter: "#7B536C", function: "#865C37",
  },
  dark: {
    ground: "#101C1B", vividPaper: "#142321", text: "#E6EEE7",
    brand: "#A1C9B5", brandText: "#16332A", signature: "#DFB17A",
    deepAccent: "#E1BD8D", success: "#A2C9A8", error: "#EE96A1", warning: "#DBBE84",
    parameter: "#C9AEC3", function: "#E1BD8D",
  },
});

family.sortKey = "conan-haibara";
// The green-grey paper needs a brighter secondary label on layered hover fills.
family.dark.textSecondary = "#BDCCC3";
family.decor.wallpaperSize = "min(25vw, 280px, 28vh)";
family.decor.heroTranslate = "calc(-0.35 * min(25vw, 280px, 28vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(25vw, 280px, 28vh) - 64px)";

export default family;
