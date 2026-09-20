import { createVividFamily } from "./create-vivid-family.js";

// Makima: ivory ritual light, crimson hair, dark suits and ringed golden eyes.
const family = createVividFamily({
  id: "makima",
  signaturePrefix: "mkm",
  names: { zh: "电锯人·玛奇玛", en: "Chainsaw Man · Makima" },
  phrases: {
    // Original mood lines, paired with ritual / ability / seated-coffee mascots.
    zh: [
      ["玛奇玛：安静，集中注意力。", "玛奇玛：把双手交叠起来。", "玛奇玛：有些力量，不必喧哗。", "玛奇玛：一切都在掌握之中。"],
      ["玛奇玛：看着我指的方向。", "玛奇玛：接下来，听我的。", "玛奇玛：该轮到我了。", "玛奇玛：准备好了吗？"],
      ["玛奇玛：坐下，喝杯咖啡。", "玛奇玛：今天想聊些什么？", "玛奇玛：慢慢来，我在听。", "玛奇玛：期待你明天的表现。"],
    ],
    en: [
      ["Makima: Quiet. Focus.", "Makima: Fold your hands together.", "Makima: Power need not be loud.", "Makima: Everything is in hand."],
      ["Makima: Look where I point.", "Makima: Now, listen to me.", "Makima: My turn.", "Makima: Are you ready?"],
      ["Makima: Sit down. Have some coffee.", "Makima: What shall we talk about?", "Makima: Take your time. I'm listening.", "Makima: I look forward to tomorrow."],
    ],
  },
  light: {
    paper: "#F5F1EB", vividPaper: "#F3E8E4", ink: "#30242B",
    brand: "#8F3348", brandText: "#FFFFFF", signature: "#806019",
    deepAccent: "#7D3949", success: "#4F6954", error: "#B02F45", warning: "#876118",
  },
  dark: {
    ground: "#160F15", vividPaper: "#20121C", text: "#F3E8E7",
    brand: "#E699A9", brandText: "#30151F", signature: "#DAB774",
    deepAccent: "#DAB774", success: "#9ABEA6", error: "#FF8492", warning: "#E5BD77",
  },
});

// Keep this standalone palette beside the other Chainsaw Man family.
family.sortKey = "chainsaw-makima";
// Portrait action artwork, matching the tall single-character families.
family.decor.wallpaperSize = "min(38vw, 520px, 52vh)";
family.decor.heroTranslate = "calc(-0.5 * min(38vw, 520px, 52vh)) calc(-1 * min(10vh, 100px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(38vw, 520px, 52vh) - 64px)";

export default family;
