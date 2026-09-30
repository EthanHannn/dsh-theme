import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the anime.
const family = createVividFamily({
  "id": "bleach-zangetsu",
  "signaturePrefix": "blz",
  "names": {
    "zh": "死神·斩月",
    "en": "Bleach · Zangetsu"
  },
  "phrases": {
    "zh": [
      [
        "一护：想守护的，就握紧手里的刀。",
        "一护：一步一步，越过眼前这一关。"
      ],
      ["魂：今天也轮到我大显身手！", "魂：休息一下，再精神满满地出发！"]
    ],
    "en": [
      [
        "Ichigo: Hold on to what you want to protect.",
        "Ichigo: One step at a time. Keep moving."
      ],
      ["Kon: Time for me to shine!", "Kon: Take a break, then bounce back!"]
    ]
  },
  "light": {
    "paper": "#F4F3F0",
    "vividPaper": "#EEEDE8",
    "ink": "#292E36",
    "brand": "#985020",
    "brandText": "#FFFFFF",
    "signature": "#536984",
    "deepAccent": "#A34E28",
    "success": "#436B60",
    "error": "#B33D47",
    "warning": "#91651F"
  },
  "dark": {
    "ground": "#11161E",
    "vividPaper": "#151C27",
    "text": "#EDF0F4",
    "brand": "#F0AD70",
    "brandText": "#241C18",
    "signature": "#9EBDE5",
    "deepAccent": "#F0AD70",
    "success": "#91C8B3",
    "error": "#FF939B",
    "warning": "#E6C481"
  }
});

// Normalize optical artwork mass across modes; keep the central reading area clear.
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";
export default family;
