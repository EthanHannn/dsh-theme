import { createVividFamily } from "./create-vivid-family.js";

// The floating sword connects gentle balance practice with evening snack delivery.
const family = createVividFamily({
  id: "doro-sword-cloud-retreat",
  signaturePrefix: "doro-sword-cloud-retreat",
  names: {
    zh: "咕嘎和 Doro · 剑仙 · 云岫剑庐",
    en: "Guga & Doro · Sword Immortal · Cloudpeak Retreat",
  },
  phrases: {
    zh: [
      [
        "doro～轻一点，花瓣还在剑上呢。",
        "doro？今天先练稳稳地飞。",
      ],
      [
        "doro！小飞剑，绕个小圈圈回来。",
        "doro～不用飞很远，陪着我就好。",
      ],
      [
        "doro！御剑送点心，也算修行呀。",
        "doro～慢慢飞，别把小糕点晃掉啦。",
      ],
      [
        "doro～剑擦亮了，今天也修行圆满。",
        "doro！明天再一起追云朵吧。",
      ],
    ],
    en: [
      [
        "Doro~ Gently. The petal is still on the blade.",
        "Doro? A steady hover comes first.",
      ],
      [
        "Doro! Little sword, one tiny circle and back.",
        "Doro~ Stay close. That is far enough.",
      ],
      [
        "Doro! Flying snacks count as training too.",
        "Doro~ Easy now. Keep the little cakes steady.",
      ],
      [
        "Doro~ Sword polished. A good day of practice.",
        "Doro! We can chase the clouds tomorrow.",
      ],
    ],
  },
  light: {
    paper: "#F3F8F1",
    vividPaper: "#E1EDE2",
    ink: "#314842",
    brand: "#3D6C68",
    brandText: "#FFFFFF",
    signature: "#78445E",
    deepAccent: "#3D6C68",
    success: "#356E53",
    error: "#A34C59",
    warning: "#795222",
  },
  dark: {
    ground: "#202D33",
    vividPaper: "#32464C",
    text: "#F4F4ED",
    brand: "#B8D9CE",
    brandText: "#202D33",
    signature: "#F6DBE9",
    deepAccent: "#B8D9CE",
    success: "#B0D9BE",
    error: "#F0ADB8",
    warning: "#EBD09F",
  },
});

family.sortKey = "guga-doro-08-sword-01-cloud-retreat";
family.light.textSecondary = "#4C6560";
family.dark.textSecondary = "#CBDED7";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
