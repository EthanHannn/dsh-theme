import { createVividFamily } from "./create-vivid-family.js";

const family = createVividFamily({
  id: "saint-seiya-bronze",
  signaturePrefix: "ssb",
  names: {
    zh: "圣斗士·天马流星",
    en: "Saint Seiya · Pegasus Meteor"
  },
  phrases: {
    zh: [
      [
        "星矢：燃烧吧，小宇宙！",
        "星矢：还有下一拳！"
      ],
      [
        "紫龙：稳住心，也稳住拳。",
        "紫龙：这一关，一起闯过去。"
      ],
      [
        "冰河：冰雪会指引方向。",
        "冰河：冷静，看清对手。"
      ],
      [
        "瞬：锁链会守护大家。",
        "瞬：我不愿伤害任何人。"
      ],
      [
        "一辉：凤凰会再次归来。",
        "一辉：这里交给我。"
      ]
    ],
    en: [
      [
        "Seiya: Burn, my Cosmos!",
        "Seiya: One more punch!"
      ],
      [
        "Shiryu: A steady heart, a steady fist.",
        "Shiryu: We will pass this trial together."
      ],
      [
        "Hyoga: Let the ice guide us.",
        "Hyoga: Stay calm. Watch closely."
      ],
      [
        "Shun: These chains will protect us.",
        "Shun: I do not wish to hurt anyone."
      ],
      [
        "Ikki: The phoenix rises again.",
        "Ikki: Leave this to me."
      ]
    ]
  },
  light: {
    paper: "#F5F7FA",
    vividPaper: "#EDF2F7",
    ink: "#25334A",
    brand: "#315A91",
    brandText: "#FFFFFF",
    signature: "#B4444C",
    deepAccent: "#587C91",
    success: "#3D7862",
    error: "#AD414B",
    warning: "#91691F"
  },
  dark: {
    ground: "#101827",
    vividPaper: "#101B2C",
    text: "#ECF1FA",
    brand: "#91BDF1",
    brandText: "#13233A",
    signature: "#F18B91",
    deepAccent: "#DFC586",
    success: "#88C8AF",
    error: "#F18B91",
    warning: "#D7BA75"
  }
});

family.decor.headerArt = { bakedHorizontalFade: true };
family.decor.wallpaperSize = "min(44vw, 560px, 56vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.4 * min(44vw, 560px, 56vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(44vw, 560px, 56vh) - 64px)";
export default family;
