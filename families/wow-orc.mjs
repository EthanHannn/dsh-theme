import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "wow-orc",
  signaturePrefix: "wor",
  names: { zh: "魔兽世界·兽人战士", en: "WoW Orc Warrior" },
  phrases: {
    zh: [
      ["力量与荣耀！", "为了部落！"],
      ["为了部落，整装出发。", "双斧在手，勇往直前。"],
      ["磨好斧头，再上路。", "火堆边歇一会儿。"],
    ],
    en: [
      ["Strength and honor!", "For the Horde!"],
      ["For the Horde. Gear up.", "Axes ready. Onward."],
      ["Sharpen the axe, then march.", "Rest by the campfire."],
    ],
  },
  light: { paper: "#EEE9D6", vividPaper: "#E7DFC8", ink: "#2D3029", brand: "#7A352F", brandText: "#FFFFFF", signature: "#557A38", deepAccent: "#8D5229", success: "#557A38", error: "#A13931", warning: "#94611F" },
  dark: { ground: "#10130F", vividPaper: "#141812", text: "#EAEBD9", brand: "#DF746B", brandText: "#2B0C09", signature: "#8BC867", deepAccent: "#E1A45C", success: "#8BC867", error: "#EF776D", warning: "#E1A45C" },
});
