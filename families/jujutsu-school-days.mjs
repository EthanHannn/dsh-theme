import { createVividFamily } from "./create-vivid-family.js";

// 象牙白、灰蓝与绛红串起青春、殊途、羁绊和领域四章。
const family = createVividFamily({
  id: "jujutsu-school-days",
  signaturePrefix: "jujutsu-school-days",
  names: { zh: "咒术回战 · 咒缘纪事", en: "Jujutsu Kaisen · Cursed Bonds" },
  phrases: {
    zh: [
      ["五条：冰棒要化了，先歇一会儿。", "五条：下一球，可别走神。"],
      ["夏油：茶给你，慢慢来。", "夏油：天台的风，刚刚好。"],
      ["硝子：你们两个，小声一点。", "硝子：今天就再坐一会儿吧。"],
    ],
    en: [
      ["Gojo: The ice pop is melting. Take a break.", "Gojo: Keep your eye on the next pass."],
      ["Geto: Here is your tea. Take your time.", "Geto: The rooftop breeze feels just right."],
      ["Shoko: You two, keep it down.", "Shoko: Let us stay a little longer today."],
    ],
  },
  light: {
    paper: "#F7F6EF", vividPaper: "#F1F0E7", ink: "#293441",
    brand: "#3E626D", brandText: "#FFFFFF", signature: "#8F444F",
    deepAccent: "#3E626D", success: "#3C6A56", error: "#AF354D", warning: "#81591E",
  },
  dark: {
    ground: "#101823", vividPaper: "#151D29", text: "#EEF0EB",
    brand: "#A3C9D3", brandText: "#101823", signature: "#EDACAE",
    deepAccent: "#A3C9D3", success: "#A4D4B5", error: "#F7A5B3", warning: "#E8C88C",
  },
});

family.sortKey = "jujutsu-10-cursed-bonds";
family.light.textSecondary = "#52616B";
family.dark.textSecondary = "#BCC8D2";
family.originalArtworkNames = { zh: "高专盛夏", en: "High School Summer" };
// 旧入口归入对应篇章，保留用户原先选择的浅深模式。
family.legacyFamilies = [
  { id: "jujutsu-cursed-promise", artwork: "pure-love" },
  { id: "jujutsu-malevolent-shrine", artwork: "cursed-throne" },
];

function sceneDecor(phrases, width = 460) {
  return {
    headerArt: { bakedHorizontalFade: true },
    // 正文页按右侧空白限制宽度，避免人物压到输入区边缘。
    wallpaperSize: `min(38vw, ${width}px, calc(55vh * var(--dsw-pack-wallpaper-ratio, 1)), max(220px, calc((100vw - 1200px) / 2 - 24px)))`,
    wallpaperPosition: "right 22px bottom 12px",
    heroTranslate: `calc(-0.3 * min(38vw, ${width}px)) calc(-1 * min(6vh, 64px))`,
    heroMaxWidth: `calc(100vw - 280px - min(38vw, ${width}px) - 64px)`,
    phrases,
  };
}

Object.assign(family.decor, sceneDecor(family.decor.phrases, 440));
family.artworks = [
  {
    id: "parting-echoes",
    names: { zh: "殊途回声", en: "Parting Echoes" },
    decor: sceneDecor({
      zh: [["夏油：走到这里，也该想清方向了。", "夏油：有些路，终究要自己走。"]],
      en: [["Geto: This far along, choose your direction.", "Geto: Some roads must be walked alone."]],
    }),
  },
  {
    id: "pure-love",
    names: { zh: "纯爱共战", en: "Love Stands Beside Me" },
    decor: sceneDecor({
      zh: [
        ["乙骨：约好的事，我一直记着。", "乙骨：这一次，我们一起向前。"],
        ["里香：忧太，我在这里。", "里香：这次也会陪着你。"],
      ],
      en: [
        ["Yuta: I have kept our promise.", "Yuta: This time, we move forward together."],
        ["Rika: Yuta, I am right here.", "Rika: I will stay beside you."],
      ],
    }, 470),
  },
  {
    id: "cursed-throne",
    names: { zh: "诅咒王座", en: "The Cursed Throne" },
    decor: sceneDecor({
      zh: [
        ["宿傩：既然开始了，就做得利落。", "宿傩：眼前这一项，先拿下。"],
        ["宿傩：坐稳，看看还剩哪一步。", "宿傩：有余裕，才看得清全局。"],
      ],
      en: [
        ["Sukuna: You began it. Finish it cleanly.", "Sukuna: Take the task in front of you."],
        ["Sukuna: Sit down. See what remains.", "Sukuna: Leave room to see the whole board."],
      ],
    }, 450),
  },
];

export default family;
