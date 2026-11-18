import { createVividFamily } from "./create-vivid-family.js";

// Detective blue, bow-tie red and silver paper; midnight streets after rain.
const family = createVividFamily({
  id: "conan",
  signaturePrefix: "conan",
  names: { zh: "名侦探柯南 · 月下谜踪", en: "Detective Conan · Moonlit Mysteries" },
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

// 合并入口保留稳定标识，各场景沿用原有构图与整套配图。
family.originalArtworkNames = { zh: "月下追踪", en: "Moonlit Trail" };
family.legacyFamilies = [
  { id: "conan-jewel", artwork: "jewel-mystery" },
];
family.artworks = [
  {
    id: "jewel-mystery",
    names: { zh: "宝石谜夜", en: "Jewel Enigma" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["柯南：再小的线索，也不会白白出现。", "柯南：这颗宝石，还有没说完的故事。"],
          ["灰原：先把线索收好，别急着下结论。", "灰原：你又发现什么了？"],
          ["基德：今夜的谜题，就留给你了。", "基德：比宝石更耀眼的，是揭晓的那一刻。"],
        ],
        en: [
          ["Conan: Even the smallest clue has a reason.", "Conan: This jewel still has a story to tell."],
          ["Haibara: Keep the clues. Conclusions can wait.", "Haibara: What have you found this time?"],
          ["Kid: Tonight's mystery is yours to solve.", "Kid: The reveal shines brighter than the jewel."],
        ],
      },
      wallpaperSize: "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(29vw, 430px) - 64px)",
    },
  },
  {
    id: "rail-trace",
    names: { zh: "轨道追迹", en: "Railway Clues" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      // 滑板追踪和站台取证各自保留完整落脚处，横向双人构图单独占位。
      wallpaperSize: "min(34vw, 420px, calc(60vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(34vw, 420px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(34vw, 420px) - 64px)",
      phrases: {
        zh: [
          ["柯南：沿着这条路线，再确认一次。", "柯南：这张车票，刚好补上了最后一环。"],
          ["灰原：把时刻和路线对照看看。", "灰原：大侦探，这次别漏看脚边。"],
          ["基德：追上谜底之前，可别急着谢幕。", "基德：下一站，也许就有答案。"],
        ],
        en: [
          ["Conan: Let's check this route once more.", "Conan: This ticket fills the last gap."],
          ["Haibara: Compare the times with the route.", "Haibara: Look by your feet, detective."],
          ["Kid: No curtain call before the mystery is solved.", "Kid: The next stop may hold the answer."],
        ],
      },
    },
  },
  {
    id: "clocktower-code",
    names: { zh: "钟楼暗号", en: "Clocktower Cipher" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      // 短梯双人和石栏坐姿保留顶帽、鞋尖及支撑结构，避免挤入输入区域。
      wallpaperSize: "min(32vw, 400px, calc(64vh * var(--dsw-pack-wallpaper-ratio, 0.9)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 400px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 400px) - 64px)",
      phrases: {
        zh: [
          ["柯南：预告函上的暗号，还差一个解释。", "柯南：钟声响起前，先把线索对齐。"],
          ["灰原：齿轮再复杂，也有它的顺序。", "灰原：谜题可以等，脚下先站稳。"],
          ["基德：这封预告函，就当作今晚的邀请。", "基德：在钟声之间，留一点揭晓的余地。"],
        ],
        en: [
          ["Conan: One cipher on the card is still unsolved.", "Conan: Align the clues before the bell rings."],
          ["Haibara: Even complex gears follow an order.", "Haibara: The mystery can wait. Watch your step."],
          ["Kid: Consider this card an invitation for tonight.", "Kid: Leave a little room for the reveal between bells."],
        ],
      },
    },
  },
];

export default family;
