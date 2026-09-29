import { createVividFamily } from "./create-vivid-family.js";

// Team Seven: Naruto's chakra orange on warm paper, Konoha blue signature.
export default createVividFamily({
  id: "naruto",
  signaturePrefix: "nrt",
  names: { zh: "火影忍者·第七班", en: "Naruto · Team Seven" },
  phrases: {
    zh: [
      ["鸣人：说到做到，这就是我的忍道！", "鸣人：准备好了，一起上吧！", "鸣人：这次也一定能做到！"],
      ["佐助：忍具检查完毕。", "佐助：出发前，先做好准备。", "佐助：这边交给我。"],
      ["小樱：绷带备好了，别逞强。", "小樱：大家都要平安回来。", "小樱：需要帮忙就叫我。"],
      ["卡卡西：先确认这次的任务。", "卡卡西：忍者要沉着冷静。", "卡卡西：团队合作就是第七班。"],
    ],
    en: [
      ["Naruto: I never go back on my word!", "Naruto: Ready! Let's do this together!", "Naruto: We can do it this time too!"],
      ["Sasuke: Ninja tools checked.", "Sasuke: Prepare before setting out.", "Sasuke: Leave this side to me."],
      ["Sakura: Bandages ready. Don't push yourself.", "Sakura: Everyone comes home safely.", "Sakura: Call me if you need help."],
      ["Kakashi: Let's review the mission first.", "Kakashi: A ninja stays calm.", "Kakashi: Teamwork is Team Seven."],
    ],
  },
  light: { paper: "#FFF3DE", vividPaper: "#FCEBD2", ink: "#282D3A", brand: "#D95F18", brandText: "#FFFFFF", signature: "#2F588C", deepAccent: "#B7412B", success: "#4D7C45", error: "#B93732", warning: "#A96818" },
  dark: { ground: "#10141C", vividPaper: "#121820", text: "#F4EBDD", brand: "#FF9A4A", brandText: "#241207", signature: "#79A9DF", deepAccent: "#FFB35F", success: "#8FC47C", error: "#F4776D", warning: "#F2B95F" },
});
