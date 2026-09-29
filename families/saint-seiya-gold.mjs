import { createVividFamily } from "./create-vivid-family.js";

const family = createVividFamily({
  id: "saint-seiya-gold",
  signaturePrefix: "ssg",
  names: {
    zh: "圣斗士·黄金十二宫",
    en: "Saint Seiya · Golden Sanctuary"
  },
  phrases: {
    zh: [
      [
        "艾欧里亚：让这一拳像闪电一样。",
        "艾欧里亚：狮子的勇气，不会退让。"
      ],
      [
        "沙加：静下心，感受小宇宙。",
        "沙加：闭上双眼，也能看见星光。"
      ],
      [
        "穆：圣衣也需要细心照料。",
        "穆：修好这片护甲，再出发。"
      ]
    ],
    en: [
      [
        "Aiolia: Let this fist strike like lightning.",
        "Aiolia: A lion never yields."
      ],
      [
        "Shaka: Be still. Feel your Cosmos.",
        "Shaka: Even closed eyes can see starlight."
      ],
      [
        "Mu: Every Cloth needs careful tending.",
        "Mu: One more repair before we go."
      ]
    ]
  },
  light: {
    paper: "#FBF3E3",
    vividPaper: "#F6EBD6",
    ink: "#3C3043",
    brand: "#79502A",
    brandText: "#FFFFFF",
    signature: "#8B526E",
    deepAccent: "#947329",
    success: "#527452",
    error: "#B04750",
    warning: "#92681C"
  },
  dark: {
    ground: "#141221",
    vividPaper: "#19152A",
    text: "#F4EBD8",
    brand: "#E4BE72",
    brandText: "#2B2031",
    signature: "#C7A1E1",
    deepAccent: "#EDCA83",
    success: "#9CC9A1",
    error: "#EF989C",
    warning: "#E4BE72"
  }
});

family.decor.headerArt = { bakedHorizontalFade: true };
family.decor.wallpaperSize = "min(34vw, 440px, 44vh)";
export default family;
