import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "doraemon-starlight",
  "signaturePrefix": "doraemon-starlight",
  "names": {
    "zh": "哆啦A梦·星空航路",
    "en": "Doraemon · Starlit Journey",
  },
  "phrases": {
    "zh": [
      [
        "哆啦A梦：下一站，看星星！",
        "航路已经记下了。",
      ],
      [
        "大雄：那颗星好亮啊。",
        "这回我来拿地图！",
      ],
      [
        "静香：灯光会陪着我们。",
        "一起找到那颗星吧。",
      ]
    ],
    "en": [
      [
        "Doraemon: Next stop, the stars!",
        "Our route is marked.",
      ],
      [
        "Nobita: That star is so bright.",
        "I will carry the map this time!",
      ],
      [
        "Shizuka: The lantern will guide us.",
        "Let us find that star together.",
      ]
    ],
  },
  "light": {
    "paper": "#F2F3FB",
    "vividPaper": "#E8EBF6",
    "ink": "#303540",
    "brand": "#515BA1",
    "brandText": "#FFFFFF",
    "signature": "#A77735",
    "deepAccent": "#515BA1",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#151A32",
    "vividPaper": "#1B2341",
    "text": "#F0EAE0",
    "brand": "#ADB8F0",
    "brandText": "#181B24",
    "signature": "#EDCD92",
    "deepAccent": "#ADB8F0",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B3B0AF";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
