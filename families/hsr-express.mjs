import { createVividFamily } from "./create-vivid-family.js";

// 场景短句按侧栏角色顺序排列。
const family = createVividFamily({
  "id": "hsr-express",
  "signaturePrefix": "hsr-express",
  "names": {
    "zh": "崩坏：星穹铁道",
    "en": "Honkai: Star Rail",
  },
  "phrases": {
    "zh": [
      [
        "三月七：这一站，也要拍下来！",
        "合影的位置给你留好了。",
      ],
      [
        "丹恒：行程已经记下。",
        "资料库里还有新线索。",
      ],
      [
        "星：下一站，出发。",
        "先把补给收好。",
      ]
    ],
    "en": [
      [
        "March 7th: This stop needs a photo!",
        "I saved you a spot in the picture.",
      ],
      [
        "Dan Heng: The route is recorded.",
        "The archives hold another clue.",
      ],
      [
        "Stelle: On to the next stop.",
        "Supplies first.",
      ]
    ],
  },
  "light": {
    "paper": "#F2F7FB",
    "vividPaper": "#E2EDF4",
    "ink": "#303540",
    "brand": "#3D6387",
    "brandText": "#FFFFFF",
    "signature": "#A56B86",
    "deepAccent": "#3D6387",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#182332",
    "vividPaper": "#223047",
    "text": "#F0EAE0",
    "brand": "#B4CDEB",
    "brandText": "#181B24",
    "signature": "#E2B5CF",
    "deepAccent": "#B4CDEB",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// 深色悬停表面上的次要文字仍需清晰。
family.dark.textSecondary = "#B4B2AF";

// 原三套竖版群像按高度与正文右侧空白共同限制大小。
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

family.originalArtworkNames = { zh: "列车晨光", en: "Express Morning" };
family.legacyFamilies = [
  { id: "hsr-hunters", artwork: "hunters-after-hours" },
  { id: "hsr-firefly", artwork: "firefly-promise" },
];
family.artworks = [
  {
    id: "hunters-after-hours",
    names: { zh: "星核夜话", en: "Hunters After Hours" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["卡芙卡：稍等，故事才刚开始。", "咖啡还温着。"],
          ["银狼：这关，我熟。", "进度已经保存。"],
          ["刃：走吧。", "该收尾了。"],
        ],
        en: [
          ["Kafka: Wait. The story has just begun.", "The coffee is still warm."],
          ["Silver Wolf: I know this level.", "Progress saved."],
          ["Blade: Let us go.", "Time to finish this."],
        ],
      },
    },
  },
  {
    id: "firefly-promise",
    names: { zh: "萤火之约", en: "Firefly Promise" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["流萤：再多停留一会儿吧。", "这份回忆，我会收好。"],
          ["星：约好了，一起看。", "今天也值得记录。"],
        ],
        en: [
          ["Firefly: Let us stay a little longer.", "I will keep this memory."],
          ["Stelle: We promised to see it together.", "Today is worth remembering."],
        ],
      },
    },
  },
  {
    id: "luofu-leisure",
    names: { zh: "罗浮闲局", en: "Leisure on the Luofu" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      // 庭院坐姿比原群像宽，保留完整手脚并避开正文与输入区。
      wallpaperSize: "min(38vw, 470px, calc(56vh * var(--dsw-pack-wallpaper-ratio, 1)), max(220px, calc((100vw - 1200px) / 2 - 24px)))",
      wallpaperPosition: "right 22px bottom 12px",
      heroTranslate: "calc(-0.3 * min(38vw, 470px)) calc(-1 * min(6vh, 64px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 470px) - 64px)",
      phrases: {
        zh: [
          ["景元：不急，这一手慢慢想。", "景元：稍歇片刻，棋局还长。"],
          ["彦卿：将军，这次我可看清了。", "彦卿：等您醒了，再下一局。"],
        ],
        en: [
          ["Jing Yuan: Take your time with this move.", "Jing Yuan: A short rest. The game can wait."],
          ["Yanqing: General, I see your plan this time.", "Yanqing: Another game when you wake up."],
        ],
      },
    },
  },
];

export default family;
