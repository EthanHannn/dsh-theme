import { createVividFamily } from "./create-vivid-family.js";

// Ivory and vermilion courtyard / indigo night watch with silver-teal accents.
const family = createVividFamily({
  id: "kimetsu-hashira",
  signaturePrefix: "kmh",
  names: { zh: "鬼灭之刃·柱之誓约", en: "Demon Slayer · Hashira Oath" },
  phrases: {
    // Imagined ensemble and original mood lines, not quotations from the work.
    zh: [
      ["炼狱：带着热忱向前吧！", "炼狱：每一步都要坚定！", "炼狱：这份便当，很有精神！"],
      ["义勇：沉住气。", "义勇：我会守住这里。", "义勇：先做好眼前的事。"],
      ["忍：休息也是修行的一部分。", "忍：今天的状态还好吗？", "忍：慢一点，别弄伤自己。"],
      ["无一郎：云又飘过去了。", "无一郎：记住要守护的东西。", "无一郎：该出发了。"],
    ],
    en: [
      ["Rengoku: Move forward with passion!", "Rengoku: Make every step count!", "Rengoku: What a spirited meal!"],
      ["Giyu: Stay composed.", "Giyu: I'll hold this place.", "Giyu: Focus on what is before you."],
      ["Shinobu: Rest is part of training.", "Shinobu: How are you feeling today?", "Shinobu: Take care of yourself."],
      ["Muichiro: There goes another cloud.", "Muichiro: Remember what you protect.", "Muichiro: Time to go."],
    ],
  },
  light: {
    paper: "#FAF5ED", vividPaper: "#F5EDE4", ink: "#352D3C",
    brand: "#993E36", brandText: "#FFFFFF", signature: "#456777",
    deepAccent: "#754A79", success: "#4C694C", error: "#AE324B", warning: "#80591C",
  },
  dark: {
    ground: "#14131F", vividPaper: "#1B1928", text: "#F2EAE5",
    brand: "#F2AD86", brandText: "#362019", signature: "#A5C9D5",
    deepAccent: "#C6B1E0", success: "#B0CF9A", error: "#FF91A4", warning: "#E8C384",
  },
});

family.decor.wallpaperSize = "min(40vw, 520px, 49vh)";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 49vh)) calc(-1 * min(10vh, 100px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 49vh) - 64px)";

export default family;
