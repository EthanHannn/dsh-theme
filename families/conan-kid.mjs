import { createVividFamily } from "./create-vivid-family.js";

// Ivory tailoring and cobalt hatband; moonlit silver replaces warm brass at night.
const family = createVividFamily({
  id: "conan-kid",
  signaturePrefix: "kaito",
  names: { zh: "怪盗基德·月白预告", en: "Kaito Kid · Moonlit Calling Card" },
  phrases: {
    // Original lines matched to the hat-tip, dove and card-flourish companions.
    zh: [
      ["基德：容我先整理一下礼帽。", "基德：登场之前，细节要准备好。", "基德：今晚的月色，正合适。", "基德：这次会是个漂亮的开场。"],
      ["基德：它可比我守时多了。", "基德：风停了，稍等片刻。", "基德：别担心，它认得回家的路。", "基德：留一点安静给这位小客人。"],
      ["基德：这张牌，请仔细看。", "基德：换个角度，再猜一次。", "基德：谜底可不能这么早揭晓。", "基德：预告已送达，稍后见。"],
    ],
    en: [
      ["Kid: A moment to straighten my hat.", "Kid: Every detail before the entrance.", "Kid: Just the right moon tonight.", "Kid: This calls for an elegant opening."],
      ["Kid: Far more punctual than I am.", "Kid: Let the wind settle first.", "Kid: Don't worry. It knows the way home.", "Kid: A quiet moment for our little guest."],
      ["Kid: Keep your eye on this card.", "Kid: Another angle. Another guess.", "Kid: Too soon to reveal the trick.", "Kid: Calling card delivered. See you soon."],
    ],
  },
  light: {
    paper: "#F7F8FC", vividPaper: "#EEF2FA", ink: "#263650",
    brand: "#365CA0", brandText: "#FFFFFF", signature: "#84662E",
    deepAccent: "#4C6192", success: "#3C746E", error: "#AD4057", warning: "#88661F",
    parameter: "#776399", function: "#725595",
  },
  dark: {
    ground: "#10172C", vividPaper: "#141D35", text: "#E9EFFC",
    brand: "#A5C6FA", brandText: "#15284A", signature: "#C4CFF1",
    deepAccent: "#D7E5FF", success: "#9ACFC4", error: "#F2A1B5", warning: "#DEC58E",
    parameter: "#C5B4E8", function: "#B9CBFA",
  },
});

family.sortKey = "conan-kid";
// The cape widens the cutout; allow enough width for the figure to read clearly.
family.decor.wallpaperSize = "min(38vw, 470px, 45vh)";
family.decor.heroTranslate = "calc(-0.35 * min(38vw, 470px, 45vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(38vw, 470px, 45vh) - 64px)";

export default family;
