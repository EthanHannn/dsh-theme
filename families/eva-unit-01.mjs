import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, not quotations from the series.
const family = createVividFamily({
  "id": "eva-unit-01",
  "signaturePrefix": "ev1",
  "names": {
    "zh": "EVA · 初号机 · 觉醒",
    "en": "Evangelion · Unit-01 · Awakening"
  },
  "phrases": {
    "zh": [
      [
        "真嗣：先把眼前这一步做好。",
        "真嗣：这一次，我会认真面对。"
      ],
      [
        "绫波丽：我在这里。",
        "绫波丽：准备好了，就开始吧。"
      ]
    ],
    "en": [
      [
        "Shinji: First, take care of this step.",
        "Shinji: This time, I will face it."
      ],
      [
        "Rei: I am here.",
        "Rei: Begin when you are ready."
      ]
    ]
  },
  "light": {
    "paper": "#F3F0F8",
    "vividPaper": "#ECE8F4",
    "ink": "#302C42",
    "brand": "#654398",
    "brandText": "#FFFFFF",
    "signature": "#477335",
    "deepAccent": "#674487",
    "success": "#42765D",
    "error": "#B33D59",
    "warning": "#86651E"
  },
  "dark": {
    "ground": "#171320",
    "vividPaper": "#1D182B",
    "text": "#EEEAF5",
    "brand": "#B9A0EE",
    "brandText": "#251B39",
    "signature": "#B7DD76",
    "deepAccent": "#B7DD76",
    "success": "#9BCFB2",
    "error": "#FF91AD",
    "warning": "#E3C16C"
  }
});

// Normalize optical artwork mass across modes; keep the central reading area clear.
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";

family.originalArtworkNames = { zh: "初号觉醒", en: "First Awakening" };
family.artworks = [
  {
    id: "quiet-station",
    names: { zh: "第三新东京", en: "Quiet Station" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["真嗣：夏天的站台真安静，不用急着说什么也没关系。", "真嗣：夜水边很凉快，能看到清晰倒影的时候心也跟着定下来。"],
          ["绫波丽：这页快看完了，发车前还可以再坐一会儿。", "绫波丽：夜晚的风停下来了……我就在这片静水边。"],
        ],
        en: [
          ["Shinji: The summer platform feels calm enough that silence is fine.", "Shinji: Still shallow water under moonlight makes breathing feel easier."],
          ["Rei: Almost finished this chapter. We still have a minute before the train.", "Rei: Evening wind has settled... I am right here on the still reflection."],
        ],
      },
    },
  },
  {
    id: "hangar-briefing",
    names: { zh: "格纳库整备", en: "Hangar Briefing" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(54vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["真嗣：美里小姐又拿着整备简报来了……好，一步步确认完就出发。", "真嗣：格纳库拘束架里的初号机稳稳停在标线上，同步曲线很稳定。"],
          ["绫波丽：整备指标正常，天桥上的通讯也已经接通。", "绫波丽：锁定解除前还很安静……机甲的冷却蒸汽正在慢慢散开。"],
        ],
        en: [
          ["Shinji: Misato brought the briefing pad again... alright, one checklist item at a time.", "Shinji: Locked upright inside the restraint pylons—synchronization looks steady."],
          ["Rei: Pre-launch telemetry is nominal along the upper skybridge.", "Rei: Cooling steam drifts slowly around the cage before unsealing."],
        ],
      },
    },
  },
  {
    id: "starlit-resonance",
    names: { zh: "星夜共鸣", en: "Starlit Resonance" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["真嗣：原来两个人的节奏对上之后，连琴声也会变得这么轻快。", "真嗣：双手按实地面与光盾——哪怕只有一个人，这次也不会退后！"],
          ["绫波丽：阳光穿过琴房的乐声，像把彼此的频率轻柔合在一起。", "绫波丽：橙金色八角光盾展开了，我会守好后方与同步通道。"],
        ],
        en: [
          ["Shinji: When two sets of hands match tempo on the piano keys, the room brightens.", "Shinji: Both feet planted, both palms forward—this golden barrier will not give way!"],
          ["Rei: Sunlight across the four-hand melody sounds calm and unhurried.", "Rei: Octagonal barrier fields stabilized; synchronization link holds firm."],
        ],
      },
    },
  },
];

export default family;
