import { createVividFamily } from "./create-vivid-family.js";

// Team Seven: Naruto's chakra orange on warm paper, Konoha blue signature.
export default createVividFamily({
  id: "naruto",
  signaturePrefix: "nrt",
  names: { zh: "火影忍者·第七班", en: "Naruto · Team Seven" },
  phrases: {
    zh: [
      ["鸣人：说到做到，这就是我的忍道！", "鸣人：影分身之术！", "鸣人：我要成为火影！"],
      ["佐助：别挡我的路。", "佐助：我走的是自己的路。", "佐助：写轮眼，开。"],
      ["小樱：这次我不会拖后腿！", "卡卡西：忍者要沉着冷静。", "卡卡西：团队合作就是第七班。"],
    ],
    en: [
      ["Naruto: I never go back on my word!", "Naruto: Shadow Clone Jutsu!", "Naruto: I will be Hokage!"],
      ["Sasuke: Out of my way.", "Sasuke: I walk my own path.", "Sasuke: Sharingan."],
      ["Sakura: I won't hold you back this time!", "Kakashi: A ninja stays calm.", "Kakashi: Teamwork is Team Seven."],
    ],
  },
  light: { paper: "#FFF3DE", vividPaper: "#FCEBD2", ink: "#282D3A", brand: "#D95F18", brandText: "#FFFFFF", signature: "#2F588C", deepAccent: "#B7412B", success: "#4D7C45", error: "#B93732", warning: "#A96818" },
  dark: { ground: "#10141C", vividPaper: "#121820", text: "#F4EBDD", brand: "#FF9A4A", brandText: "#241207", signature: "#79A9DF", deepAccent: "#FFB35F", success: "#8FC47C", error: "#F4776D", warning: "#F2B95F" },
});
