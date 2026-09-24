import { createVividFamily } from "./create-vivid-family.js";

// Detective blue, bow-tie red and silver paper; midnight streets after rain.
const family = createVividFamily({
  id: "conan",
  signaturePrefix: "conan",
  names: { zh: "名侦探柯南·月下追踪", en: "Detective Conan · Moonlit Trail" },
  phrases: {
    // Original detective-themed lines, not quotations from the series.
    zh: [
      ["柯南：先把这条线索记下来。", "柯南：咦，这个细节值得放大看看。", "柯南：把时间顺序排好，再推理一次。", "柯南：笔记准备好了，开始调查吧。"],
      ["灰原：咖啡还热，慢慢想。", "灰原：先验证，再下结论。", "灰原：偶尔休息，思路会更清楚。", "灰原：别漏掉那个不起眼的细节。"],
      ["基德：今晚的线索，藏在月光里。", "基德：换个角度，秘密就露出来了。", "基德：这张预告函，请收好。", "基德：精彩的推理，值得一个谢幕。"],
    ],
    en: [
      ["Conan: Let's write this clue down.", "Conan: That detail deserves a closer look.", "Conan: Put the events in order, then try again.", "Conan: Notebook ready. Let's investigate."],
      ["Haibara: The coffee's warm. Take your time.", "Haibara: Verify before you conclude.", "Haibara: A little break clears the mind.", "Haibara: Don't overlook that tiny detail."],
      ["Kid: Tonight's clue waits in the moonlight.", "Kid: A new angle reveals the secret.", "Kid: Keep this calling card safe.", "Kid: A fine deduction deserves a curtain call."],
    ],
  },
  light: {
    paper: "#F5F7FA", vividPaper: "#EDF2F7", ink: "#202D42",
    brand: "#285BA3", brandText: "#FFFFFF", signature: "#AC354B",
    deepAccent: "#943447", success: "#347064", error: "#B63545", warning: "#88621F",
  },
  dark: {
    ground: "#0E1726", vividPaper: "#101C30", text: "#E6EDF7",
    brand: "#8EB9F2", brandText: "#10223C", signature: "#F08B9C",
    deepAccent: "#C2D8F6", success: "#83C8B5", error: "#FA919B", warning: "#DDBD7B",
  },
});

// Keep the standing night pose and the seated day pose clear of the composer.
family.decor.wallpaperSize = "min(25vw, 300px, 30vh)";
family.decor.heroTranslate = "calc(-0.35 * min(25vw, 300px, 30vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(25vw, 300px, 30vh) - 64px)";

export default family;
