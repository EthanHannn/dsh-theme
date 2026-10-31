import { createVividFamily } from "./create-vivid-family.js";

// 猫猫辨药与灯下核对药笺形成浅深两段日常。
const family = createVividFamily({
  id: "apothecary-lantern-herbs",
  signaturePrefix: "apothecary-lantern-herbs",
  names: {
    zh: "药屋少女的呢喃 · 药香夜话",
    en: "The Apothecary Diaries · Herbs by Lanternlight",
  },
  phrases: {
    zh: [
      ["猫猫：这片叶子，倒是有点意思。", "猫猫：先闻一闻，再下结论。"],
      ["壬氏：这只香囊，劳烦你看看。", "壬氏：不必着急，我等你的答案。"],
      ["猫猫：药材要分清，事情也一样。", "猫猫：少放一点，反而更合适。"],
      ["壬氏：灯还亮着，慢慢来。", "壬氏：今天的药笺，就整理到这里吧。"],
    ],
    en: [
      ["Maomao: This leaf is rather interesting.", "Maomao: Smell it first. Conclusions can wait."],
      ["Jinshi: Would you take a look at this sachet?", "Jinshi: Take your time. I can wait for your answer."],
      ["Maomao: Sort the herbs. The same goes for thoughts.", "Maomao: Sometimes a little less is just right."],
      ["Jinshi: The lantern is still lit. No need to hurry.", "Jinshi: That is enough sorting for tonight."],
    ],
  },
  light: {
    paper: "#F5F4EB",
    vividPaper: "#EDEFE3",
    ink: "#293B34",
    brand: "#356749",
    brandText: "#FFFFFF",
    signature: "#714B77",
    deepAccent: "#356749",
    success: "#3C6A4C",
    error: "#A83C4F",
    warning: "#79591F",
  },
  dark: {
    ground: "#141D1A",
    vividPaper: "#1D2825",
    text: "#F2EEE4",
    brand: "#ACD3AE",
    brandText: "#141D1A",
    signature: "#D4B8DB",
    deepAccent: "#ACD3AE",
    success: "#ABD2AC",
    error: "#F0A9B6",
    warning: "#E3C486",
  },
});

family.sortKey = "apothecary-01-lantern-herbs";
family.light.textSecondary = "#505D52";
family.dark.textSecondary = "#CDD3C9";
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
