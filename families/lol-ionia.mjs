import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "lol-ionia",
  "signaturePrefix": "lol-ionia",
  "names": {
    "zh": "英雄联盟·艾欧尼亚茶会",
    "en": "League of Legends · Ionia Tea Gathering",
  },
  "phrases": {
    "zh": [
      [
        "阿狸：先喝杯茶，再听你的故事。",
      ],
      [
        "亚索：风也有停下来的时候。",
      ],
      [
        "艾瑞莉娅：此刻的宁静，值得守护。",
      ],
      [
        "阿卡丽：点心我先替你尝了。",
      ]
    ],
    "en": [
      [
        "Ahri: A cup of tea, then your story.",
      ],
      [
        "Yasuo: Even the wind takes a pause.",
      ],
      [
        "Irelia: This quiet moment is worth protecting.",
      ],
      [
        "Akali: I already checked the snacks.",
      ]
    ],
  },
  "light": {
    "paper": "#F5F8F2",
    "vividPaper": "#EBF2E8",
    "ink": "#283238",
    "brand": "#376D62",
    "brandText": "#FFFFFF",
    "signature": "#9D4D55",
    "deepAccent": "#9D4D55",
    "success": "#356B58",
    "error": "#AE3B52",
    "warning": "#7D5F21",
  },
  "dark": {
    "ground": "#122521",
    "vividPaper": "#19312C",
    "text": "#F5FAFF",
    "brand": "#A2D6C3",
    "brandText": "#142333",
    "signature": "#ECB1B8",
    "deepAccent": "#ECB1B8",
    "success": "#9FD4B6",
    "error": "#F4A6B6",
    "warning": "#E4C98B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B5BEC1";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
