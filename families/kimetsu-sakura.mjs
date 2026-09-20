import { createVividFamily } from "./create-vivid-family.js";

// Mitsuri's sakura-pink braids and leaf-green tips anchor both ensemble palettes.
const family = createVividFamily({
  id: "kimetsu-sakura",
  signaturePrefix: "kms",
  names: { zh: "鬼灭之刃·樱庭恋歌", en: "Demon Slayer · Sakura Hearts" },
  phrases: {
    // Original mood lines, matching Mitsuri / Obanai / Shinobu / Kanao pals.
    zh: [
      ["蜜璃：一起吃樱饼吧！", "蜜璃：今天也有好多美好的事！", "蜜璃：想守护大家的心，不会输！"],
      ["伊黑：别走得太远。", "伊黑：樱饼给你留着。", "伊黑：镝丸，前面交给我们。"],
      ["忍：喝杯茶，再继续吧。", "忍：花开的时候，也要记得休息。", "忍：今天的茶很香呢。"],
      ["香奈乎：这次，由我来决定。", "香奈乎：花瓣落在这里了。", "香奈乎：我想和大家一起回去。"],
    ],
    en: [
      ["Mitsuri: Let's share some sakura mochi!", "Mitsuri: So many lovely things today!", "Mitsuri: My heart won't stop protecting you!"],
      ["Obanai: Don't wander too far.", "Obanai: I saved some mochi for you.", "Obanai: Kaburamaru, leave this to us."],
      ["Shinobu: Have some tea before we continue.", "Shinobu: Remember to rest among the blossoms.", "Shinobu: The tea smells lovely today."],
      ["Kanao: This time, I'll decide.", "Kanao: A petal landed here.", "Kanao: I want us all to go home together."],
    ],
  },
  light: {
    paper: "#FBF5F5", vividPaper: "#F5E9ED", ink: "#3D2C39",
    brand: "#925068", brandText: "#FFFFFF", signature: "#4D6A4D",
    deepAccent: "#78506E", success: "#4D6A4D", error: "#B13650", warning: "#805B21",
  },
  dark: {
    ground: "#1B141D", vividPaper: "#231923", text: "#F5EAF0",
    brand: "#E7A6BF", brandText: "#351D2B", signature: "#B8D69F",
    deepAccent: "#B8D69F", success: "#B8D69F", error: "#FF99AC", warning: "#E7C48D",
  },
});

family.decor.wallpaperSize = "min(40vw, 520px, 49vh)";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 49vh)) calc(-1 * min(10vh, 100px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 49vh) - 64px)";

export default family;
