import { createVividFamily } from "./create-vivid-family.js";

// A promotional ensemble, not a literal meeting of Conan and Shinichi.
// The bow tie, midnight blue and silver card connect the core cast's stories.
const family = createVividFamily({
  id: "conan-ensemble",
  signaturePrefix: "beika",
  names: { zh: "柯南·米花协奏", en: "Conan · Beika Ensemble" },
  phrases: {
    // Original lines, in asset order: Conan, Ran, Shinichi, Ai, Kogoro, Heiji, Kid.
    zh: [
      ["柯南：线索，就藏在细节里。", "柯南：等一下，还有个地方没想通。", "柯南：把这些线索连起来看看。", "柯南：这次，也一起找出答案吧。"],
      ["小兰：忙完了，记得好好吃饭。", "小兰：别逞强，我也能帮上忙。", "小兰：再晚，也要平安回来。", "小兰：答应的事，可不能忘。"],
      ["新一：先把不可能的情况排除。", "新一：答案应该就在我们眼前。", "新一：再确认一遍时间顺序。", "新一：等我把这件事弄清楚。"],
      ["小哀：大侦探，也该休息一下了。", "小哀：别急着下结论。", "小哀：偶尔听听不同的解释吧。", "小哀：咖啡凉了，可就不好喝了。"],
      ["小五郎：交给名侦探就行了。", "小五郎：咳，这一点我当然想到了。", "小五郎：重要的事，先记下来。", "小五郎：今天也算办成一件大事。"],
      ["平次：喂，这次可别抢跑啊。", "平次：换个角度，再推理一次。", "平次：有意思，我也来试试。", "平次：等忙完了，带你去吃大阪烧。"],
      ["基德：今晚的惊喜，准备好了吗？", "基德：谜底，留到最后一刻。", "基德：请看仔细，别错过细节。", "基德：那么，下次月下再见。"],
    ],
    en: [
      ["Conan: The clue is in the details.", "Conan: Wait. One thing still doesn't fit.", "Conan: Let's connect these clues.", "Conan: Let's find the answer together."],
      ["Ran: Remember to eat when you're done.", "Ran: I can help too, you know.", "Ran: Just make it home safely.", "Ran: Don't forget your promise."],
      ["Shinichi: First, rule out the impossible.", "Shinichi: The answer may be right here.", "Shinichi: Check the timeline once more.", "Shinichi: Let me get to the bottom of this."],
      ["Ai: Even a detective needs a break.", "Ai: Don't jump to conclusions.", "Ai: Try hearing another explanation.", "Ai: Your coffee is getting cold."],
      ["Kogoro: Leave it to the great detective.", "Kogoro: Ahem. I knew that already.", "Kogoro: Write down what matters.", "Kogoro: A good day's work, I'd say."],
      ["Heiji: Hey, no head starts this time.", "Heiji: Look at it from another angle.", "Heiji: Interesting. Let me try.", "Heiji: Okonomiyaki after we're done?"],
      ["Kid: Ready for tonight's surprise?", "Kid: The reveal comes at the very end.", "Kid: Watch closely. Every detail counts.", "Kid: Until our next moonlit meeting."],
    ],
  },
  light: {
    paper: "#F7F9FC", vividPaper: "#EDF2F8", ink: "#28354A",
    brand: "#365B8D", brandText: "#FFFFFF", signature: "#A33F50",
    deepAccent: "#785E43", success: "#426F64", error: "#B53B4F", warning: "#84601C",
    parameter: "#775C90", function: "#95526C",
  },
  dark: {
    ground: "#101B2F", vividPaper: "#142139", text: "#EAF1FB",
    brand: "#A3C5F3", brandText: "#172D4B", signature: "#F0A4B1",
    deepAccent: "#E9C799", success: "#A1CDBD", error: "#F2A2B0", warning: "#E5C690",
    parameter: "#C9BAE7", function: "#E7ACC6",
  },
});

family.dark.textSecondary = "#C1CEDF";
// Seven readable faces need a broad stage and a separate composer column.
family.decor.wallpaperSize = "min(44vw, 560px, 56vh)";
family.decor.heroTranslate = "calc(-0.4 * min(44vw, 560px, 56vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(44vw, 560px, 56vh) - 64px)";

export default family;
