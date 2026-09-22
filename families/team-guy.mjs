import { createVividFamily } from "./create-vivid-family.js";

// Team Guy: jumpsuit green on pale training-field paper, Tenten cheongsam
// pink signature, leg-warmer orange as the deep accent.
const family = createVividFamily({
  id: "team-guy",
  signaturePrefix: "tgy",
  names: { zh: "火影忍者·凯班", en: "Naruto · Team Guy" },
  phrases: {
    zh: [
      ["小李：今天也要努力修行！", "小李：青春就是永不言弃！", "小李：再来五百个俯卧撑！"],
      ["天天：装备都准备好了。", "天天：卷轴可别落下。", "天天：看我的暗器全开！"],
      ["宁次：命运由自己开创。", "宁次：八卦掌，准备完毕。", "凯老师：燃烧吧，青春！"],
    ],
    en: [
      ["Lee: Give it your all today!", "Lee: Youth never gives up!", "Lee: Five hundred more push-ups!"],
      ["Tenten: Gear is ready.", "Tenten: Do not forget the scroll.", "Tenten: Full weapon barrage!"],
      ["Neji: Fate is ours to shape.", "Neji: Eight Trigrams, ready.", "Guy: Burn bright, youth!"],
    ],
  },
  light: { paper: "#F5F6EB", vividPaper: "#EFF3DF", ink: "#28302A", brand: "#3E7C4F", brandText: "#FFFFFF", signature: "#B04A5E", deepAccent: "#C25E2E", success: "#55854A", error: "#B43A34", warning: "#A07A1E" },
  dark: { ground: "#121714", vividPaper: "#151D17", text: "#F0F1E4", brand: "#82C78F", brandText: "#122015", signature: "#E092A6", deepAccent: "#F2B35C", success: "#7CC4A4", error: "#F0816D", warning: "#E3B85C" },
});

// Keep the two Konoha families adjacent in the picker.
family.sortKey = "naruto-team-guy";

export default family;
