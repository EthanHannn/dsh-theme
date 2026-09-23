import { createVividFamily } from "./create-vivid-family.js";

// Detective blue, bow-tie red and silver paper; midnight streets after rain.
const family = createVividFamily({
  id: "conan",
  signaturePrefix: "conan",
  names: { zh: "名侦探柯南·月下追踪", en: "Detective Conan · Moonlit Trail" },
  phrases: {
    // Original detective-themed lines, not quotations from the series.
    zh: [["柯南：先从眼前的线索开始吧。", "柯南：别急，再检查一遍细节。", "柯南：把思路连起来，答案就近了。"]],
    en: [["Conan: Start with the clue in front of you.", "Conan: Take another look at the details.", "Conan: Connect the clues. The answer is close."]],
  },
  light: {
    paper: "#F5F7FA", vividPaper: "#EDF2F7", ink: "#202D42",
    brand: "#285BA3", brandText: "#FFFFFF", signature: "#AC354B",
    deepAccent: "#943447", success: "#347064", error: "#B63545", warning: "#88621F",
  },
  dark: {
    ground: "#0E1726", vividPaper: "#101C30", text: "#E6EDF7",
    brand: "#8EB9F2", brandText: "#10223C", signature: "#F08B9C",
    deepAccent: "#C2D8F6", success: "#83C8B5", error: "#FA919B", warning: "#DDBD7B",
  },
});

family.decor.wallpaperSize = "min(36vw, 460px, 48vh)";

export default family;
