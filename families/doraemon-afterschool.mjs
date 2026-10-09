import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "doraemon-afterschool",
  "signaturePrefix": "doraemon-afterschool",
  "names": {
    "zh": "哆啦A梦·放学后的约定",
    "en": "Doraemon · After-School Promise",
  },
  "phrases": {
    "zh": [
      [
        "哆啦A梦：先吃点心再出发。",
        "约好了，要一起回家。",
      ],
      [
        "大雄：今天的作业先写完。",
        "这页我没有忘记！",
      ],
      [
        "静香：放学后一起走吧。",
        "书包不要落下哦。",
      ]
    ],
    "en": [
      [
        "Doraemon: A snack before we go.",
        "We promised to walk home together.",
      ],
      [
        "Nobita: Homework first today.",
        "I remembered this page!",
      ],
      [
        "Shizuka: Let us walk home after class.",
        "Do not forget your schoolbag.",
      ]
    ],
  },
  "light": {
    "paper": "#FAF5EC",
    "vividPaper": "#F1EBDC",
    "ink": "#303540",
    "brand": "#A16432",
    "brandText": "#FFFFFF",
    "signature": "#458579",
    "deepAccent": "#A16432",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#221E21",
    "vividPaper": "#2B2529",
    "text": "#F0EAE0",
    "brand": "#E6BD85",
    "brandText": "#181B24",
    "signature": "#A9D2C0",
    "deepAccent": "#E6BD85",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B6B1AB";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
