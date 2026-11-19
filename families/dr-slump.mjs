import { createVividFamily } from "./create-vivid-family.js";

// 语录围绕各场景编写。
const family = createVividFamily({
  "id": "dr-slump",
  "signaturePrefix": "col10",
  "names": {
    "zh": "阿拉蕾 · 企鹅村",
    "en": "Dr. Slump · Penguin Village",
  },
  "phrases": {
    "zh": [
      [
        "阿拉蕾：今天也去探险吧！",
      ],
      [
        "千兵卫：这回的发明一定行！",
      ],
    ],
    "en": [
      [
        "Arale: Another day for an adventure!",
      ],
      [
        "Senbei: This invention will work!",
      ],
    ],
  },
  "light": {
    "paper": "#F9F2E4",
    "vividPaper": "#F7EEDB",
    "ink": "#2B2E39",
    "brand": "#80602B",
    "brandText": "#FFFFFF",
    "signature": "#805799",
    "deepAccent": "#805799",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#211C31",
    "vividPaper": "#262039",
    "text": "#FFF8F2",
    "brand": "#E7C785",
    "brandText": "#20212B",
    "signature": "#C9B0ED",
    "deepAccent": "#C9B0ED",
    "success": "#A9D4B8",
    "error": "#FFABBA",
    "warning": "#E5CB8A",
  },
});

// 保留原主图的摆放，给中央阅读区留出空间。
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";

function sceneDecor(width, phrases) {
  const artworkWidth = `min(38vw, ${width}px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))`;
  return {
    wallpaperSize: artworkWidth,
    wallpaperPosition: "right 24px bottom 16px",
    heroTranslate: `calc(-0.32 * ${artworkWidth}) calc(-1 * min(7vh, 70px))`,
    heroMaxWidth: `calc(100vw - 280px - ${artworkWidth} - 64px)`,
    phrases,
  };
}

family.originalArtworkNames = { zh: "企鹅村探险", en: "Penguin Village Adventure" };
family.artworks = [
  {
    id: "gatchan-snack",
    names: { zh: "小吉的加餐", en: "Gatchan's Snack" },
    decor: sceneDecor(460, {
      zh: [
        ["阿拉蕾：布丁归我，勺子归你？", "小吉，那个杯子还要还回去！"],
        ["小吉：啾啾！", "小吉抱紧磁铁，等着螺母飞过来。"],
      ],
      en: [
        ["Arale: Pudding for me and the spoon for you?", "Gatchan, we have to give the cup back!"],
        ["Gatchan: Chup chup!", "Gatchan hugs the magnet and waits for the nuts to come flying."],
      ],
    }),
  },
  {
    id: "invention-misfire",
    names: { zh: "发明大失控", en: "Invention Misfire" },
    decor: sceneDecor(470, {
      zh: [
        ["千兵卫：弹簧怎么跑到外边去了？", "下一次试车，先把护目镜戴好。"],
        ["阿拉蕾：博士，这么拔就停啦！", "博士，要不要我帮你捡零件？"],
      ],
      en: [
        ["Senbei: How did the spring get out?", "Next time, goggles before the test run."],
        ["Arale: Doctor, I unplugged it and it stopped!", "Want me to help pick up the parts?"],
      ],
    }),
  },
  {
    id: "super-strength",
    names: { zh: "阿拉蕾的怪力", en: "Arale's Super Strength" },
    decor: sceneDecor(490, {
      zh: [
        ["阿拉蕾：咦，怎么有条裂缝？", "巡逻车搬到这里行吗？"],
        ["奥博奇曼：再往右一点就到车位了。", "阿拉蕾，你刚才真的只用了一只手？"],
      ],
      en: [
        ["Arale: Huh? Where did that crack come from?", "Does the patrol car go here?"],
        ["Obotchaman: A bit farther right and you are in the parking space.", "Arale, did you really use just one hand?"],
      ],
    }),
  },
];

export default family;
