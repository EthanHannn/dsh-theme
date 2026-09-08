import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "slam-dunk",
  signaturePrefix: "sdk",
  names: { zh: "灌篮高手", en: "Slam Dunk" },
  phrases: { zh: [["白痴。", "我要成为日本第一的高中生。"]], en: [["Idiot.", "I'll become Japan's best high-school player."]] },
  light: { paper: "#FFF7E8", vividPaper: "#F8EEDF", ink: "#25272A", brand: "#B72D2B", brandText: "#FFFFFF", signature: "#D98B25", deepAccent: "#982321", success: "#39735A", error: "#B72D2B", warning: "#A46B1C" },
  dark: { ground: "#111315", vividPaper: "#151719", text: "#F5EEE3", brand: "#F36F68", brandText: "#2A0B0A", signature: "#F0B85E", deepAccent: "#F0B85E", success: "#73B793", error: "#F36F68", warning: "#F0B85E" },
});
