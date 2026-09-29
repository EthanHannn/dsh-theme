import { createVividFamily } from "./create-vivid-family.js";

// Team Guy: jumpsuit green on pale training-field paper, Tenten cheongsam
// pink signature, leg-warmer orange as the deep accent.
const family = createVividFamily({
  id: "team-guy",
  signaturePrefix: "tgy",
  names: { zh: "火影忍者·凯班", en: "Naruto · Team Guy" },
  phrases: {
    zh: [
      ["小李：负重绑好了，开始修行！", "小李：青春就是永不言弃！", "小李：今天也要稳稳地前进一步！"],
      ["天天：装备都准备好了。", "天天：卷轴可别落下。", "天天：出发前，再检查一遍。"],
      ["宁次：先看清对手的动作。", "宁次：柔拳，准备完毕。", "宁次：稳住呼吸，集中精神。"],
      ["凯老师：燃烧吧，青春！", "凯老师：今天的努力，我看到了！", "凯老师：一起完成下一轮训练！"],
    ],
    en: [
      ["Lee: Weights secured. Time to train!", "Lee: Youth never gives up!", "Lee: One steady step forward today!"],
      ["Tenten: Gear is ready.", "Tenten: Do not forget the scroll.", "Tenten: One more check before we leave."],
      ["Neji: Read your opponent's movements first.", "Neji: Gentle Fist, ready.", "Neji: Breathe steadily. Stay focused."],
      ["Guy: Burn bright, youth!", "Guy: I saw your hard work today!", "Guy: Let's finish the next round together!"],
    ],
  },
  light: { paper: "#F5F6EB", vividPaper: "#EFF3DF", ink: "#28302A", brand: "#3E7C4F", brandText: "#FFFFFF", signature: "#B04A5E", deepAccent: "#C25E2E", success: "#55854A", error: "#B43A34", warning: "#A07A1E" },
  dark: { ground: "#121714", vividPaper: "#151D17", text: "#F0F1E4", brand: "#82C78F", brandText: "#122015", signature: "#E092A6", deepAccent: "#F2B35C", success: "#7CC4A4", error: "#F0816D", warning: "#E3B85C" },
});

// Keep the two Konoha families adjacent in the picker.
family.sortKey = "naruto-team-guy";

export default family;
