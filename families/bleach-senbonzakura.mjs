import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the anime.
const family = createVividFamily({
  "id": "bleach-senbonzakura",
  "signaturePrefix": "bls",
  "names": {
    "zh": "死神·千本樱",
    "en": "Bleach · Senbonzakura"
  },
  "phrases": {
    "zh": [
      [
        "白哉：静心，方能看清下一步。",
        "白哉：让每一片花瓣各归其位。"
      ],
      [
        "露琪亚：今天也向前走吧。",
        "露琪亚：先歇一会儿，雪会慢慢停。"
      ]
    ],
    "en": [
      [
        "Byakuya: Still your mind. See the next step.",
        "Byakuya: Let every petal find its place."
      ],
      [
        "Rukia: Let us keep moving today.",
        "Rukia: Rest a while. The snow will settle."
      ]
    ]
  },
  "light": {
    "paper": "#F7F1F4",
    "vividPaper": "#F2E9EF",
    "ink": "#362C3E",
    "brand": "#8A4569",
    "brandText": "#FFFFFF",
    "signature": "#4C7288",
    "deepAccent": "#81547D",
    "success": "#466E68",
    "error": "#B33F61",
    "warning": "#89631F"
  },
  "dark": {
    "ground": "#1A1522",
    "vividPaper": "#211A2C",
    "text": "#F1EAF4",
    "brand": "#E4A3C8",
    "brandText": "#302039",
    "signature": "#9ACFE6",
    "deepAccent": "#C8B4ED",
    "success": "#9ACABF",
    "error": "#FF9DB5",
    "warning": "#DFC48E"
  }
});

// A compact portrait duo: size by height so faces stay large without a wide footprint.
family.decor.wallpaperSize = "auto min(62vh, 620px, 92vw)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
export default family;
