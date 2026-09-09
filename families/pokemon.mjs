import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "pokemon",
  signaturePrefix: "pkm",
  names: { zh: "电光奇旅", en: "Sparktrail" },
  phrases: {
    zh: [
      ["追着星光，出发！", "下一段旅程会遇见什么？"],
      ["地图摊开，下一站出发。", "路标找到了！"],
      ["充好电，再去冒险。", "尾巴也要休息一下。"],
    ],
    en: [
      ["Follow the starlight—let's go!", "What awaits on the next trail?"],
      ["Map ready. On to the next stop.", "Found the trail!"],
      ["Recharge, then explore.", "Even this tail needs a rest."],
    ],
  },
  light: { paper: "#FFF9DB", vividPaper: "#FFF4C8", ink: "#26334A", brand: "#D93A3E", brandText: "#FFFFFF", signature: "#E5B900", deepAccent: "#3169A6", success: "#4C8A55", error: "#D93A3E", warning: "#9A7400" },
  dark: { ground: "#0E1724", vividPaper: "#101B2A", text: "#F7F3D9", brand: "#FF7376", brandText: "#2A090A", signature: "#FFD84F", deepAccent: "#79B8F2", success: "#8CCD83", error: "#FF7376", warning: "#FFD84F" },
});
