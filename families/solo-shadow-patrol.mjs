import { createVividFamily } from "./create-vivid-family.js";

// 以专属日常场景组织浅深两种活动，简约配对复用同一色板。
const family = createVividFamily({
  "id": "solo-shadow-patrol",
  "phrases": {
    "zh": [
      [
        "程肖宇：先看清魔晶，再判断路线。",
        "程肖宇：这一点发现，也算收获。"
      ],
      [
        "车海印：地图在这里，别漏掉岔路。",
        "车海印：出发前，再核对一遍。"
      ],
      [
        "程肖宇：补给收好，下一段路还很长。",
        "程肖宇：准备充分，才走得更远。"
      ],
      [
        "车海印：我举着灯，你慢慢整理。",
        "车海印：周围由我留意。"
      ]
    ],
    "en": [
      [
        "Jinwoo: Check the crystal before choosing a route.",
        "Jinwoo: Even a small find is worth keeping."
      ],
      [
        "Hae-in: Here is the map. Watch the forks.",
        "Hae-in: One more check before we move."
      ],
      [
        "Jinwoo: Pack the supplies. There is more road ahead.",
        "Jinwoo: Good preparation takes us farther."
      ],
      [
        "Hae-in: I will hold the lamp while you sort.",
        "Hae-in: I will keep an eye on our surroundings."
      ]
    ]
  },
  "light": {
    "paper": "#F1F4FA",
    "vividPaper": "#E8EDF4",
    "ink": "#2B3548",
    "brand": "#385A94",
    "brandText": "#FFFFFF",
    "signature": "#5D4777",
    "deepAccent": "#385A94",
    "success": "#3F6A5D",
    "error": "#A63E58",
    "warning": "#795C27"
  },
  "dark": {
    "ground": "#141B2A",
    "vividPaper": "#1C2334",
    "text": "#EAF0FA",
    "brand": "#A8C5FF",
    "brandText": "#172135",
    "signature": "#C7B6F1",
    "deepAccent": "#A8C5FF",
    "success": "#9FD6C3",
    "error": "#F3A8BE",
    "warning": "#E2CA96"
  },
  "signaturePrefix": "solo-shadow-patrol",
  "names": {
    "zh": "我独自升级 · 影域巡行",
    "en": "Solo Leveling · Shadow Patrol"
  }
});

family.sortKey = "solo-01-shadow-patrol";
family.light.textSecondary = "#536176";
family.dark.textSecondary = "#C5D0E2";
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
