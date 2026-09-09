import { createVividFamily } from "./create-vivid-family.js";

export default createVividFamily({
  id: "one-piece",
  signaturePrefix: "opc",
  names: { zh: "海贼王", en: "One Piece" },
  phrases: {
    zh: [
      ["我是要成为海贼王的男人！", "出航啦！"],
      ["索隆：这次走哪边？", "索隆：别把我落下了。"],
      ["娜美：航线我来定。", "娜美：天气也要看仔细。"],
    ],
    en: [
      ["I'm going to be King of the Pirates!", "Set sail!"],
      ["Zoro: Which way this time?", "Zoro: Do not leave me behind."],
      ["Nami: Leave the course to me.", "Nami: Keep an eye on the weather."],
    ],
  },
  light: { paper: "#FFF6DF", vividPaper: "#FFF1D0", ink: "#263449", brand: "#176B9D", brandText: "#FFFFFF", signature: "#C9342F", deepAccent: "#D99A28", success: "#2E8B65", error: "#C9342F", warning: "#B97918" },
  dark: { ground: "#091521", vividPaper: "#0B1824", text: "#F6F0DE", brand: "#70C9F2", brandText: "#09202D", signature: "#FF746B", deepAccent: "#F5C45B", success: "#69C997", error: "#FF746B", warning: "#F5C45B" },
});
