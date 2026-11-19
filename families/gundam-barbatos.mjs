import { createVividFamily } from "./create-vivid-family.js";

// 伙伴短句分别对应机体、整备和出击准备。
const family = createVividFamily({
  "id": "gundam-barbatos",
  "signaturePrefix": "gundam-barbatos",
  "names": {
    "zh": "高达 · 巴巴托斯",
    "en": "Gundam · Barbatos",
  },
  "phrases": {
    "zh": [
      [
        "巴巴托斯：下一段路，继续向前。",
        "巴巴托斯：白甲上的尘土，是走过的路。",
      ],
      [
        "整备记录：关节检查完成。",
        "整备记录：把每一处细节照顾好。",
      ],
      [
        "出击准备：机体状态良好。",
        "出击准备：铁与火之间，保持清醒。",
      ]
    ],
    "en": [
      [
        "Barbatos: Onward to the next stretch.",
        "Barbatos: Dust on white armor marks the road.",
      ],
      [
        "Maintenance: Joint checks complete.",
        "Maintenance: Every small detail matters.",
      ],
      [
        "Ready: All systems in good order.",
        "Ready: Steady between iron and fire.",
      ]
    ],
  },
  "light": {
    "paper": "#F7F4EE",
    "vividPaper": "#EEE6DA",
    "ink": "#28313B",
    "brand": "#835538",
    "brandText": "#FFFFFF",
    "signature": "#8D4450",
    "deepAccent": "#8D4450",
    "success": "#386B55",
    "error": "#AD3D4E",
    "warning": "#806024",
  },
  "dark": {
    "ground": "#1B2028",
    "vividPaper": "#242B34",
    "text": "#F6F5F1",
    "brand": "#DEC09B",
    "brandText": "#19202B",
    "signature": "#E6A8AA",
    "deepAccent": "#E6A8AA",
    "success": "#A7D2B4",
    "error": "#F1A8B2",
    "warning": "#E7C58B",
  }
});

// 保持次级文字在带色悬停表面上的可读性。
family.dark.textSecondary = "#B9B9B9";

// 原持锤立绘沿用既有尺寸与位置。
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

family.originalArtworkNames = { zh: "持锤待命", en: "Mace at the Ready" };
family.artworks = [
  {
    id: "tachi-combat",
    names: { zh: "太刀近战", en: "Tachi Close Combat" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      // 低架防御与跃起蓄斩共享留边，刀尖和双脚均完整展示。
      wallpaperSize: "min(34vw, 460px, calc(64vh * var(--dsw-pack-wallpaper-ratio, 0.9)), max(280px, calc((100vw - 1160px) / 2 + 32px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(34vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(34vw, 460px) - 64px)",
      phrases: {
        zh: [
          ["巴巴托斯：稳住重心，再向前一步。", "巴巴托斯：这一刀，留给前方的阻碍。"],
          ["整备记录：刀柄与腕部连接已确认。", "整备记录：检查刃口，也别漏掉脚下。"],
          ["出击准备：近战路线已标记。", "出击准备：留出挥刀的距离。"],
        ],
        en: [
          ["Barbatos: Find your balance, then take one more step.", "Barbatos: A clear path begins with a steady blade."],
          ["Maintenance: Grip and wrist connections checked.", "Maintenance: Check the edge and your footing."],
          ["Ready: Close-combat route marked.", "Ready: Leave room for the swing."],
        ],
      },
    },
  },
  {
    id: "hangar-service",
    names: { zh: "机库整备", en: "Hangar Maintenance" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      // 坐台与单膝姿势保留座面、脚底和扶栏的支撑关系。
      wallpaperSize: "min(34vw, 450px, calc(62vh * var(--dsw-pack-wallpaper-ratio, 0.95)), max(280px, calc((100vw - 1160px) / 2 + 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(34vw, 450px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(34vw, 450px) - 64px)",
      phrases: {
        zh: [
          ["巴巴托斯：把每一处关节照顾好。", "巴巴托斯：歇一会儿，再继续走。"],
          ["整备记录：手部执行器检查中。", "整备记录：工作灯亮着，慢慢来。"],
          ["出击准备：先完成最后一项检修。", "出击准备：工具归位，状态已记录。"],
        ],
        en: [
          ["Barbatos: Give every joint the care it needs.", "Barbatos: Rest a while, then carry on."],
          ["Maintenance: Hand actuators under inspection.", "Maintenance: The worklight is on. Take your time."],
          ["Ready: One final service check first.", "Ready: Tools stowed and status logged."],
        ],
      },
    },
  },
  {
    id: "smoothbore-sortie",
    names: { zh: "滑膛炮出击", en: "Smoothbore Sortie" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      // 地面架炮与轨道漂浮各保留完整炮口及前后脚轮廓。
      wallpaperSize: "min(35vw, 470px, calc(64vh * var(--dsw-pack-wallpaper-ratio, 0.9)), max(290px, calc((100vw - 1160px) / 2 + 40px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(35vw, 470px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(35vw, 470px) - 64px)",
      phrases: {
        zh: [
          ["巴巴托斯：看清方向，再扣下扳机。", "巴巴托斯：越过尘土，继续前进。"],
          ["整备记录：炮身锁定，支撑检查完成。", "整备记录：补给箱与系绳已固定。"],
          ["出击准备：地面与轨道路线已确认。", "出击准备：保持姿态，等待窗口。"],
        ],
        en: [
          ["Barbatos: Know your bearing before you fire.", "Barbatos: Beyond the dust, onward."],
          ["Maintenance: Cannon locked and supports checked.", "Maintenance: Supply crate and tether secured."],
          ["Ready: Ground and orbital routes confirmed.", "Ready: Hold your attitude and wait for the opening."],
        ],
      },
    },
  },
];

export default family;
