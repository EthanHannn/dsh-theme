import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "i-am-mt",
  signaturePrefix: "imt",
  names: { zh: "我叫MT", en: "I Am MT" },
  phrases: {
    zh: [
      ["呆贼：潜行到位，准备开溜！", "这回真没贪那把匕首。"],
      ["猎人：别急，我先放个陷阱。", "箭带够了，方向也找对了！"],
      ["猎人：这次陷阱放对了。", "猎人：别自己踩进去了。"],
      ["呆贼：我就看一眼。", "呆贼：开箱前先看四周。"],
    ],
    en: [
      ["Daizei: Sneak in, sprint out!", "I wasn't eyeing that dagger. Honest."],
      ["Lieren: Let me set a trap first.", "Arrows packed. Right way this time!"],
      ["Lieren: The trap is right this time.", "Lieren: Mind your own trap."],
      ["Daizei: Just taking a look.", "Daizei: Look around before opening it."],
    ],
  },
  light: { paper: "#FFF1D8", vividPaper: "#F9E5C5", ink: "#3A3028", brand: "#A85A26", brandText: "#FFFFFF", signature: "#3C78A5", deepAccent: "#8B4324", success: "#5A8346", error: "#B13C32", warning: "#A66B1D" },
  dark: { ground: "#15110F", vividPaper: "#191411", text: "#F3E4CE", brand: "#E99B5C", brandText: "#2C1608", signature: "#75B6E2", deepAccent: "#F2C467", success: "#91C875", error: "#EF776B", warning: "#F2C467" },
});
