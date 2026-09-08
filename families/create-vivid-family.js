// Compact builder for vivid-only families. It keeps the full Harness token
// parameter shape while letting each theme declare its own small, reviewable
// semantic palette. Existing hand-tuned families remain unchanged.

function rgb(hex) {
  const value = hex.replace("#", "");
  return [0, 2, 4].map((offset) => Number.parseInt(value.slice(offset, offset + 2), 16));
}

function hex(values) {
  return `#${values.map((value) => Math.round(value).toString(16).padStart(2, "0")).join("")}`.toUpperCase();
}

function mix(a, b, weight = 0.5) {
  const left = rgb(a);
  const right = rgb(b);
  return hex(left.map((value, index) => value * (1 - weight) + right[index] * weight));
}

function rgba(color, alpha) {
  return `rgba(${rgb(color).join(", ")}, ${alpha})`;
}

function ramp(start, end, weights) {
  return Object.fromEntries(Object.entries(weights).map(([key, weight]) => [key, mix(start, end, weight)]));
}

const lightWeights = { "00": 0, "60": 0.05, "100": 0.1, "200": 0.2, "300": 0.32, "500": 0.5, "600": 0.62, "750": 0.74, "850": 0.84, "900": 0.9, "1000": 1 };
const darkWeights = { "00": 0, "60": 0.12, "100": 0.24, "200": 0.36, "300": 0.48, "500": 0.62, "600": 0.72, "750": 0.82, "850": 0.9, "900": 0.95, "1000": 1 };

function modeParams(mode, palette, signatureKeys) {
  const isDark = mode === "dark";
  const neutral = isDark
    ? ramp(palette.text, palette.ground, darkWeights)
    : ramp(palette.paper, palette.ink, lightWeights);
  const primary = isDark ? palette.text : palette.ink;
  const secondary = neutral[isDark ? "200" : "750"];
  const tertiary = neutral[isDark ? "60" : "850"];
  const layer1 = isDark ? mix(palette.ground, palette.text, 0.035) : palette.paper;
  const layer2 = isDark ? mix(palette.ground, palette.text, 0.09) : neutral["60"];
  const layer3 = isDark ? mix(palette.ground, palette.text, 0.15) : neutral["100"];
  const border = isDark ? neutral["300"] : neutral["750"];
  const brandText = palette.brandText ?? (isDark ? palette.ground : palette.paper);
  const warning = palette.warning ?? palette.signature;

  return {
    signatureAccent: palette.signature,
    deepAccent: palette.deepAccent ?? palette.signature,
    ramp: neutral,
    brand: palette.brand,
    brandSoft: palette.brandSoft ?? mix(palette.brand, palette.paper ?? palette.text, 0.45),
    brandHover: palette.brandHover ?? mix(palette.brand, isDark ? palette.text : palette.ink, isDark ? 0.16 : 0.12),
    brandText,
    blue: palette.brand,
    error: palette.error,
    success: palette.success,
    amberSoft: mix(warning, palette.paper ?? palette.text, 0.28),
    amber: warning,
    warn: warning,
    warnLabel: isDark ? mix(warning, palette.text, 0.25) : mix(warning, palette.ink, 0.25),
    bgBase: isDark ? mix(palette.ground, palette.text, 0.025) : palette.paper,
    layer1,
    layer2,
    layer3,
    overlay: layer2,
    masks: [rgba(isDark ? palette.ground : neutral["100"], isDark ? 0.5 : 0.24), rgba(isDark ? palette.ground : neutral["100"], isDark ? 0.2 : 0.12), rgba(isDark ? palette.ground : neutral["100"], 0.48)],
    skeleton: rgba(isDark ? layer3 : tertiary, isDark ? 0.16 : 0.08),
    borders: [0.28, 0.45, 0.58, 0.72].map((alpha) => rgba(border, isDark ? Math.max(0.25, alpha - 0.08) : alpha)),
    textPrimary: primary,
    textSecondary: secondary,
    textTertiary: tertiary,
    elevatedFill: isDark ? layer2 : palette.paper,
    floatingFill: isDark ? layer3 : palette.paper,
    floatingHover: isDark ? neutral["600"] : neutral["60"],
    ghostBorder: isDark ? neutral["600"] : neutral["200"],
    ghostFill: layer2,
    ghostHover: layer3,
    interactive: {
      hover: rgba(tertiary, isDark ? 0.34 : 0.1),
      active: rgba(tertiary, isDark ? 0.48 : 0.16),
      hoverAccent: rgba(palette.brand, isDark ? 0.16 : 0.12),
      hoverDanger: rgba(palette.error, isDark ? 0.16 : 0.07),
      hoverSolid: isDark ? layer3 : neutral["60"],
    },
    md: { codeBlock: layer1, banner: layer2, segSelected: isDark ? layer2 : palette.paper, segUnselected: layer1 },
    toastBg: layer1,
    tooltipBg: layer2,
    separator: rgba(palette.brand, isDark ? 0.8 : 0.7),
    scrollbar: [layer2, layer3, neutral[isDark ? "600" : "300"]],
    maskDrop: isDark ? rgba(palette.ground, 0.72) : "rgba(255, 255, 255, 0.7)",
    borderInverted: isDark ? ["rgba(255, 255, 255, 0.06)", "rgba(255, 255, 255, 0.08)"] : ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"],
    borderThin: rgba(border, isDark ? 0.3 : 0.35),
    brandInvert: isDark ? palette.text : palette.ink,
    infoHover: mix(palette.brand, isDark ? palette.ground : palette.paper, isDark ? 0.4 : 0.15),
    toolbar: [rgba(border, 0.5), rgba(border, 0.36), rgba(neutral[isDark ? "200" : "600"], 0.6)],
    labelForeground: brandText,
    labelInverted: isDark ? layer2 : palette.paper,
    sidebar: {
      fill: isDark ? layer1 : neutral["60"],
      active: isDark ? layer3 : neutral["200"],
      activeAccent: rgba(palette.brand, isDark ? 0.25 : 0.2),
      hover: layer2,
    },
    bubbleHighlight: layer3,
    inputMajor: layer1,
    loginInput: layer1,
    selector: layer3,
    signature: {
      [signatureKeys.brand]: palette.brand,
      [signatureKeys.signature]: palette.signature,
      [signatureKeys.success]: palette.success,
      [signatureKeys.paper]: palette.paper ?? palette.text,
    },
    shiki: {
      foreground: primary,
      background: layer1,
      keyword: palette.brand,
      string: palette.success,
      constant: palette.signature,
      parameter: palette.parameter ?? mix(palette.brand, palette.signature, 0.5),
      function: palette.function ?? mix(palette.signature, palette.error, 0.4),
      comment: neutral["500"],
      punctuation: secondary,
      link: warning,
    },
  };
}

export function createVividFamily(config) {
  const prefix = `--dsw-${config.signaturePrefix}`;
  const signatureKeys = {
    brand: `${prefix}-brand`,
    signature: `${prefix}-signature`,
    success: `${prefix}-success`,
    paper: `${prefix}-paper`,
  };
  const light = modeParams("light", config.light, signatureKeys);
  const dark = modeParams("dark", config.dark, signatureKeys);
  return {
    id: config.id,
    names: config.names,
    styles: ["vivid"],
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: config.phrases,
    },
    light,
    dark,
    vivid: {
      light: {
        paper: config.light.vividPaper,
        bgBase: rgba(config.light.vividPaper, 0.72),
        layer1: rgba(config.light.vividPaper, 0.72),
        layer2: mix(config.light.vividPaper, config.light.ink, 0.07),
        layer3: mix(config.light.vividPaper, config.light.ink, 0.13),
        overlay: config.light.vividPaper,
        inputMajor: config.light.vividPaper,
        loginInput: mix(config.light.vividPaper, config.light.ink, 0.07),
        sidebar: {
          fill: mix(config.light.vividPaper, config.light.brand, 0.1),
          active: rgba(config.light.brand, 0.16),
          activeAccent: config.light.brand,
          hover: rgba(config.light.brand, 0.08),
        },
      },
      dark: {
        paper: config.dark.vividPaper,
        bgBase: rgba(mix(config.dark.vividPaper, config.dark.text, 0.02), 0.72),
        layer1: rgba(config.dark.vividPaper, 0.72),
        layer2: mix(config.dark.vividPaper, config.dark.text, 0.08),
        layer3: mix(config.dark.vividPaper, config.dark.text, 0.14),
        overlay: mix(config.dark.vividPaper, config.dark.text, 0.08),
        sidebar: {
          fill: mix(config.dark.vividPaper, config.dark.text, 0.04),
          active: "rgba(255, 255, 255, 0.14)",
          activeAccent: config.dark.deepAccent ?? config.dark.signature,
          hover: "rgba(255, 255, 255, 0.07)",
        },
      },
    },
  };
}
