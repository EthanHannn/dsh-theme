import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "hearthstone-lich-king",
  "signaturePrefix": "col4",
  "names": {
    "zh": "炉石传说·冰冠王座",
    "en": "Hearthstone · Frozen Throne",
  },
  "phrases": {
    "zh": [
      [
        "巫妖王：寒冰也需要耐心雕琢。",
      ],
      [
        "冰霜幼龙：今天也要飞得更高。",
      ],
    ],
    "en": [
      [
        "Lich King: Even ice takes patience to shape.",
      ],
      [
        "Frost Wyrm: A little higher today.",
      ],
    ],
  },
  "light": {
    "paper": "#EDF2F4",
    "vividPaper": "#E7EEF0",
    "ink": "#2B2E39",
    "brand": "#3D6273",
    "brandText": "#FFFFFF",
    "signature": "#626BA0",
    "deepAccent": "#626BA0",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#101D26",
    "vividPaper": "#13222C",
    "text": "#FFF8F2",
    "brand": "#A6D4E6",
    "brandText": "#20212B",
    "signature": "#ADBCEB",
    "deepAccent": "#ADBCEB",
    "success": "#A9D4B8",
    "error": "#FFABBA",
    "warning": "#E5CB8A",
  },
});

// Normalize optical artwork mass across modes; keep the central reading area clear.
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";
export default family;
