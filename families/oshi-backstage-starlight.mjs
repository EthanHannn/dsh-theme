import { createVividFamily } from "./create-vivid-family.js";

// 以专属日常场景组织浅深两种活动，简约配对复用同一色板。
const family = createVividFamily({
  "id": "oshi-backstage-starlight",
  "phrases": {
    "zh": [
      [
        "露比：麦克风准备好，下一秒就登场！",
        "露比：这个开场，我练习过很多次啦。"
      ],
      [
        "阿库亚：场记板核对过了。",
        "阿库亚：先把眼前这一幕拍好。"
      ],
      [
        "露比：星星别针，要别得端端正正。",
        "露比：收好这颗星，明天还要闪亮登场。"
      ],
      [
        "阿库亚：热饮在这里，先歇一会儿。",
        "阿库亚：散场了，不用赶下一拍。"
      ]
    ],
    "en": [
      [
        "Ruby: Mic ready. My cue is coming!",
        "Ruby: I have practiced this entrance so many times."
      ],
      [
        "Aqua: The slate is checked.",
        "Aqua: Let us get this scene right first."
      ],
      [
        "Ruby: The star pin needs to sit just right.",
        "Ruby: Keep this star safe for tomorrow."
      ],
      [
        "Aqua: Here is your warm drink. Take a break.",
        "Aqua: The show is over. No need to rush."
      ]
    ]
  },
  "light": {
    "paper": "#FAF3F7",
    "vividPaper": "#F4EBF2",
    "ink": "#382D3E",
    "brand": "#8B365F",
    "brandText": "#FFFFFF",
    "signature": "#5C4888",
    "deepAccent": "#8B365F",
    "success": "#44694D",
    "error": "#AA3C54",
    "warning": "#7D5B24"
  },
  "dark": {
    "ground": "#1A1822",
    "vividPaper": "#272332",
    "text": "#F6EDF4",
    "brand": "#EDB0CE",
    "brandText": "#211922",
    "signature": "#CBBBED",
    "deepAccent": "#EDB0CE",
    "success": "#B7D5BD",
    "error": "#F3ABB9",
    "warning": "#E8CA94"
  },
  "signaturePrefix": "oshi-backstage-starlight",
  "names": {
    "zh": "我推的孩子 · 星幕候场",
    "en": "Oshi no Ko · Backstage Starlight"
  }
});

family.sortKey = "oshi-01-backstage-starlight";
family.light.textSecondary = "#655567";
family.dark.textSecondary = "#D4C8D7";
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
