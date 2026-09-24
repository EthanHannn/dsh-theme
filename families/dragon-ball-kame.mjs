import { createVividFamily } from "./create-vivid-family.js";

// Sea glass, the little pink island house and orange training uniforms.
const family = createVividFamily({
  id: "dragon-ball-kame",
  signaturePrefix: "kame",
  names: { zh: "七龙珠·龟仙流夏日", en: "Dragon Ball · Turtle School Days" },
  phrases: {
    // Original lines: child Goku, child Krillin, Roshi, sea turtle.
    zh: [
      ["悟空：修行完了，能吃饭了吗？", "悟空：今天还能再跑一圈！", "悟空：嘿嘿，这次我可不会输。"],
      ["克林：等等我，别跑那么快！", "克林：一步一步，总会变强的。", "克林：这次换我先来试试。"],
      ["龟仙人：该练的时候练，该休息时休息。", "龟仙人：先把基础练扎实。", "龟仙人：今天的进步，我看到了。"],
      ["海龟：海风正好，慢慢来吧。", "海龟：歇一会儿，也不耽误出发。", "海龟：太阳落山前，记得回来。"],
    ],
    en: [
      ["Goku: Can we eat after training?", "Goku: I've got another lap in me!", "Goku: Hehe, I won't lose this time."],
      ["Krillin: Wait up! Not so fast!", "Krillin: We get stronger one step at a time.", "Krillin: Let me try first this time."],
      ["Roshi: Train well, and rest well too.", "Roshi: Get the basics right first.", "Roshi: I saw your progress today."],
      ["Turtle: A fine sea breeze. Take your time.", "Turtle: A short rest won't hurt.", "Turtle: Be back before sunset."],
    ],
  },
  light: {
    paper: "#F7FAF5", vividPaper: "#EDF5ED", ink: "#263C39",
    brand: "#27685E", brandText: "#FFFFFF", signature: "#A65332",
    deepAccent: "#976443", success: "#426E4D", error: "#AF4050", warning: "#825F1D",
    parameter: "#7D6286", function: "#A65332",
  },
  dark: {
    ground: "#102324", vividPaper: "#132A2B", text: "#E9F5F0",
    brand: "#A3D3C7", brandText: "#163C35", signature: "#F5B17C",
    deepAccent: "#EDCD98", success: "#AFD4AE", error: "#F3A7AE", warning: "#E5CA91",
    parameter: "#D0BCDE", function: "#F5B17C",
  },
});

family.dark.textSecondary = "#C2D6D0";
family.decor.wallpaperSize = "min(40vw, 500px, 50vh)";
family.decor.heroTranslate = "calc(-0.38 * min(40vw, 500px, 50vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 500px, 50vh) - 64px)";

export default family;
