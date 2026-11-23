import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "sumikko-teahouse",
  "signaturePrefix": "sumikko-teahouse",
  names: { zh: "角落小伙伴 · 角落慢时光", en: "Sumikko Gurashi · Cozy Corner Days" },
  "phrases": {
    "zh": [
      [
        "白熊：这杯茶暖暖的。",
        "角落里，刚刚好。",
      ],
      [
        "企鹅？：今天喝哪一种呢？",
        "先把茶罐收好。",
      ],
      [
        "猫咪：这里还有一个靠垫。",
        "一起坐一会儿吧。",
      ]
    ],
    "en": [
      [
        "Shirokuma: This tea is lovely and warm.",
        "This corner feels just right.",
      ],
      [
        "Penguin?: Which tea shall we try?",
        "Let us put the tea tin away.",
      ],
      [
        "Neko: There is another cushion here.",
        "Stay for a little while.",
      ]
    ],
  },
  "light": {
    "paper": "#FCF7ED",
    "vividPaper": "#F4EDD9",
    "ink": "#303540",
    "brand": "#7B7650",
    "brandText": "#FFFFFF",
    "signature": "#729184",
    "deepAccent": "#7B7650",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#26271F",
    "vividPaper": "#313327",
    "text": "#F0EAE0",
    "brand": "#D2CCA1",
    "brandText": "#181B24",
    "signature": "#ADD5BC",
    "deepAccent": "#D2CCA1",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B7B3AA";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

// 合并入口保留稳定标识，各场景沿用原有构图与整套配图。
family.originalArtworkNames = { zh: "暖茶小憩", en: "Cozy Tea Corner" };
family.legacyFamilies = [
  { id: "sumikko-bakery", artwork: "bakery" },
  { id: "sumikko-rainy", artwork: "rainy-letter" },
];
family.artworks = [
  {
    id: "bakery",
    names: { zh: "面包房值日", en: "Bakery Helpers" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["炸猪排：面包还热着呢。", "今天也有我的一份吗？"],
          ["炸虾尾：这颗小面包给你。", "围裙已经收好了。"],
          ["猫咪：慢慢揉，别着急。", "最后一盘也烤好了。"],
        ],
        en: [
          ["Tonkatsu: The bread is still warm.", "Is there a little share for me?"],
          ["Ebifurai: This little roll is for you.", "The apron is put away."],
          ["Neko: Knead slowly, there is no rush.", "The last tray is ready too."],
        ],
      },
      wallpaperSize: "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(29vw, 430px) - 64px)",
    },
  },
  {
    id: "rainy-letter",
    names: { zh: "雨窗来信", en: "Rainy Window Letters" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["蜥蜴：雨停了就出发。", "信要好好收着。"],
          ["白熊：收到一封暖暖的信。", "这里可以躲一会儿雨。"],
          ["企鹅？：毯子分你一半。", "等雨小一点再走吧。"],
        ],
        en: [
          ["Tokage: We can leave when the rain stops.", "Keep the letter safe."],
          ["Shirokuma: A letter full of warmth.", "You can shelter here for a while."],
          ["Penguin?: Half the blanket is yours.", "Let us wait for lighter rain."],
        ],
      },
      wallpaperSize: "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(29vw, 430px) - 64px)",
    },
  },
];

export default family;
