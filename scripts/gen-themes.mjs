// dsh-themes — theme pack generator.
//
// Single source of truth for every theme family in the pack. Each file in
// families/ exports one family: `{ id, names: { zh, en }, light: {…params},
// dark: {…params} }` plus optional `styles: ["minimal", "vivid"]` (default
// both), optional `vivid: { light, dark }` param overrides, and optional
// `kin: "<family-id>"` when the family re-exports another family's palette
// (the settings row then renders the two as one palette group). This script expands each family's parameters into the
// full --dsw-* token vocabulary that the harness ThemeRuntime consumes
// (neutral ramp + static accent ramps + alias layer + specific surfaces +
// shiki syntax slots), writes per-skin token tables to themes/*.json, and
// embeds the whole catalog into lib/client.js from lib/client.tpl.js.
//
// Adding a new theme = dropping one file into families/ and re-running
// this script. No dependencies, Node 20+.
//
// Usage: node scripts/gen-themes.mjs

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Literal CSS color-mix string: `pct`% of `color` over `base`. */
const mix = (color, pct, base) => `color-mix(in srgb, ${color} ${pct}%, ${base})`;

/**
 * Expand the 11 anchor stops of a neutral ramp into the full 21-stop
 * vocabulary (midpoints are 50% mixes of the adjacent anchors), keyed by
 * stop name.
 */
function expandRamp(a) {
  return {
    "00": a["00"],
    "50": mix(a["00"], 50, a["60"]),
    "60": a["60"],
    "75": mix(a["60"], 50, a["100"]),
    "100": a["100"],
    "150": mix(a["100"], 50, a["200"]),
    "200": a["200"],
    "250": mix(a["200"], 50, a["300"]),
    "300": a["300"],
    "400": mix(a["300"], 50, a["500"]),
    "500": a["500"],
    "550": mix(a["500"], 50, a["600"]),
    "600": a["600"],
    "700": mix(a["600"], 50, a["750"]),
    "750": a["750"],
    "800": mix(a["750"], 50, a["850"]),
    "850": a["850"],
    "875": mix(a["850"], 50, a["900"]),
    "900": a["900"],
    "950": mix(a["900"], 50, a["1000"]),
    "1000": a["1000"],
  };
}

/** Build the complete token table for one skin from its parameters. */
function buildTokens(mode, p) {
  const light = mode === "light";
  const r = expandRamp(p.ramp);
  // Tint bases, following the reference token sheets: tints aimed at the
  // paper mix toward the light end of the ramp, tints aimed at depth mix
  // toward the dark end (900 on light skins, 850 on dark skins).
  const lo = r["00"];
  const hi = light ? r["900"] : r["850"];
  const t = {};

  // -- neutral ramp (plain + bluish twins) -------------------------------
  for (const [stop, value] of Object.entries(r)) {
    t[`--dsw-static-neutral-bluish-${stop}`] = value;
    t[`--dsw-static-neutral-${stop}`] = value;
  }

  // -- static accent ramps ------------------------------------------------
  // brand ramp (the harness's own "deepseek" slots, reclaimed for the family brand)
  t["--dsw-static-deepseek-50"] = mix(p.brand, light ? 60 : 55, lo);
  t["--dsw-static-deepseek-100"] = mix(p.brand, light ? 40 : 35, lo);
  t["--dsw-static-deepseek-200"] = p.brandSoft;
  t["--dsw-static-deepseek-300"] = mix(p.brand, light ? 75 : 70, light ? lo : hi);
  t["--dsw-static-deepseek-400"] = p.brand;
  t["--dsw-static-deepseek-450"] = p.brand;
  t["--dsw-static-deepseek-500"] = p.brand;
  t["--dsw-static-deepseek-600"] = mix(p.brand, light ? 65 : 60, hi);
  t["--dsw-static-deepseek-800"] = mix(p.brand, 30, hi);
  t["--dsw-static-deepseek-900"] = mix(p.brand, light ? 18 : 20, hi);
  t["--dsw-static-deepseek-700-delete"] = mix(p.brand, 45, hi);

  // blue ramp (links / info). The 450/500 core follows the brand by
  // default; families whose brand is too light for link text on the paper
  // (e.g. chainsaw's Pochita orange) set `blueCore` to a text-safe variant.
  t["--dsw-static-blue-50"] = mix(p.blue, 55, lo);
  t["--dsw-static-blue-75"] = mix(p.blue, 35, lo);
  t["--dsw-static-blue-100"] = mix(p.blue, light ? 28 : 25, lo);
  t["--dsw-static-blue-300"] = mix(p.blue, light ? 78 : 75, light ? lo : hi);
  t["--dsw-static-blue-400"] = mix(p.blue, light ? 88 : 85, light ? lo : hi);
  t["--dsw-static-blue-450"] = p.blueCore ?? p.brand;
  t["--dsw-static-blue-500"] = p.blueCore ?? p.brand;
  t["--dsw-static-blue-600"] = mix(p.blue, 70, hi);
  t["--dsw-static-blue-800"] = mix(p.blue, 50, hi);
  t["--dsw-static-blue-900"] = mix(p.blue, 35, hi);
  t["--dsw-static-blue-950"] = mix(p.blue, 25, hi);
  t["--dsw-static-blue-50p"] = mix(p.blue, light ? 48 : 45, lo);

  // green ramp (success)
  t["--dsw-static-green-100"] = mix(p.success, light ? 35 : 30, lo);
  t["--dsw-static-green-400"] = mix(p.success, light ? 80 : 75, light ? lo : hi);
  t["--dsw-static-green-500"] = p.success;
  t["--dsw-static-green-900"] = mix(p.success, 35, hi);

  // red ramp (error)
  t["--dsw-static-red-50"] = mix(p.error, light ? 45 : 40, lo);
  t["--dsw-static-red-100"] = mix(p.error, light ? 28 : 25, lo);
  t["--dsw-static-red-400"] = mix(p.error, light ? 78 : 75, light ? lo : hi);
  t["--dsw-static-red-500"] = p.error;
  t["--dsw-static-red-600"] = mix(p.error, light ? 68 : 65, hi);
  t["--dsw-static-red-900"] = mix(p.error, 35, hi);

  // amber ramp (warning)
  t["--dsw-static-amber-100"] = mix(p.amberSoft, light ? 35 : 30, lo);
  t["--dsw-static-amber-400"] = mix(p.amberSoft, light ? 88 : 85, light ? lo : hi);
  t["--dsw-static-amber-500"] = p.amber;
  t["--dsw-static-amber-600"] = p.amber;
  t["--dsw-static-amber-900"] = mix(p.amber, 40, hi);

  // -- signature accents ---------------------------------------------------
  // Family-specific signature variables (--dsw-gnd-*, --dsw-csm-*, …),
  // emitted verbatim so per-family token tables stay stable.
  for (const [key, value] of Object.entries(p.signature)) {
    t[key] = value;
  }
  // Pack-wide generic accents: the surface-tint rules in lib/client.tpl.js
  // reference these so the rules work unchanged for every family.
  // - accent:        the family brand (focus color)
  // - accent-soft:   a lighter brand variant
  // - signature:     the family's second signature color (gundam red,
  //                  chainsaw blood red, …) — decorative accents, not
  //                  state semantics
  t["--dsw-pack-accent"] = p.brand;
  t["--dsw-pack-accent-soft"] = p.brandSoft;
  t["--dsw-pack-signature"] = p.signatureAccent;
  // accent reserved for deep colored surfaces (the vivid sidebar): the
  // one color guaranteed to pop on the family's dark fill
  t["--dsw-pack-deep-accent"] = p.deepAccent;
  // solid ground color painted on <body> by the vivid rules, underneath
  // the (possibly translucent) bg-base surfaces and the wallpaper veil
  t["--dsw-pack-paper"] = p.paper ?? p.bgBase;

  // -- alias layer ---------------------------------------------------------
  t["--dsw-alias-bg-base"] = p.bgBase;
  t["--dsw-alias-bg-layer-1"] = p.layer1;
  t["--dsw-alias-bg-layer-2"] = p.layer2;
  t["--dsw-alias-bg-layer-3"] = p.layer3;
  t["--dsw-alias-bg-overlay"] = p.overlay;
  t["--dsw-alias-bg-mask-1"] = p.masks[0];
  t["--dsw-alias-bg-mask-2"] = p.masks[1];
  t["--dsw-alias-bg-mask-3"] = p.masks[2];
  t["--dsw-alias-bg-module-platform"] = p.layer2;
  t["--dsw-alias-bg-multi-select"] = p.layer2;
  t["--dsw-alias-bg-skeleton"] = p.skeleton;
  t["--dsw-alias-border-l1"] = p.borders[0];
  t["--dsw-alias-border-l2"] = p.borders[1];
  t["--dsw-alias-border-l3"] = p.borders[2];
  t["--dsw-alias-border-l4"] = p.borders[3];
  t["--dsw-alias-label-primary"] = p.textPrimary;
  t["--dsw-alias-label-secondary"] = p.textSecondary;
  t["--dsw-alias-label-tertiary"] = p.textTertiary;
  t["--dsw-alias-label-caption"] = p.textTertiary;
  t["--dsw-alias-label-dimmed"] = p.textTertiary;
  t["--dsw-alias-brand-primary"] = p.brand;
  t["--dsw-alias-brand-text"] = p.brandText;
  t["--dsw-alias-button-primary-hover"] = p.brandHover;
  t["--dsw-alias-button-primary-dimmed"] = p.layer2;
  t["--dsw-alias-button-elevated-fill"] = p.elevatedFill;
  t["--dsw-alias-button-floating-fill"] = p.floatingFill;
  t["--dsw-alias-button-floating-hover"] = p.floatingHover;
  t["--dsw-alias-button-ghost-active-border"] = p.ghostBorder;
  t["--dsw-alias-button-ghost-active-fill"] = p.ghostFill;
  t["--dsw-alias-button-ghost-active-hover"] = p.ghostHover;
  t["--dsw-alias-state-business-primary"] = p.brand;
  t["--dsw-alias-state-business-tertiary"] = p.layer2;
  t["--dsw-alias-state-error-primary"] = p.error;
  t["--dsw-alias-state-error-secondary"] = p.error;
  t["--dsw-alias-state-success-primary"] = p.success;
  t["--dsw-alias-state-success-secondary"] = p.success;
  t["--dsw-alias-state-success-tertiary"] = p.layer2;
  t["--dsw-alias-state-warn-label"] = p.warnLabel;
  t["--dsw-alias-state-warn-primary"] = p.warn;
  t["--dsw-alias-state-warn-secondary"] = p.warn;
  t["--dsw-alias-state-warn-tertiary"] = p.layer2;
  t["--dsw-alias-interactive-bg-hover"] = p.interactive.hover;
  t["--dsw-alias-interactive-bg-active"] = p.interactive.active;
  t["--dsw-alias-interactive-bg-hover-accent"] = p.interactive.hoverAccent;
  t["--dsw-alias-interactive-bg-hover-danger"] = p.interactive.hoverDanger;
  t["--dsw-alias-interactive-bg-hover-solid"] = p.interactive.hoverSolid;
  t["--dsw-alias-markdown-code-block"] = p.md.codeBlock;
  t["--dsw-alias-markdown-code-block-banner"] = p.md.banner;
  t["--dsw-alias-markdown-code-segment-selected"] = p.md.segSelected;
  t["--dsw-alias-markdown-code-segment-unselected"] = p.md.segUnselected;
  t["--dsw-alias-markdown-citation"] = p.layer2;
  t["--dsw-alias-markdown-inline-code"] = p.layer2;
  t["--dsw-alias-markdown-placeholder"] = p.layer2;
  t["--dsw-alias-markdown-tag"] = p.layer2;
  t["--dsw-alias-toast-bg"] = p.toastBg;
  t["--dsw-alias-tooltip-bg"] = p.tooltipBg;
  t["--dsw-alias-separator-primary"] = p.separator;
  t["--dsw-alias-scrollbar-bg-l1"] = p.scrollbar[0];
  t["--dsw-alias-scrollbar-bg-l2"] = p.scrollbar[1];
  t["--dsw-alias-scrollbar-hover-l1"] = p.scrollbar[2];
  t["--dsw-alias-scrollbar-hover-l2"] = p.scrollbar[2];
  t["--dsw-alias-bg-mask-photo"] = "rgba(0, 0, 0, 0.88)";
  t["--dsw-alias-bg-mask-drop"] = p.maskDrop;
  t["--dsw-alias-border-inverted"] = p.borderInverted[0];
  t["--dsw-alias-border-inverted2"] = p.borderInverted[1];
  t["--dsw-alias-border-l2-darkmode-thin"] = p.borderThin;
  t["--dsw-alias-brand-primary-invert"] = p.brandInvert;
  t["--dsw-alias-brand-primary-new-colorprimary-new-color"] = p.brand;
  t["--dsw-alias-button-contrast-fill"] = p.brandInvert;
  t["--dsw-alias-button-info-fill"] = p.brand;
  t["--dsw-alias-button-info-hover"] = p.infoHover;
  t["--dsw-alias-button-primary-fill"] = p.brand;
  t["--dsw-alias-button-tool-bar-fill"] = p.toolbar[0];
  t["--dsw-alias-button-tool-bar-fill-invisible"] = p.toolbar[1];
  t["--dsw-alias-button-tool-bar-hover"] = p.toolbar[2];
  t["--dsw-alias-label-primary-bluish"] = p.textPrimary;
  t["--dsw-alias-label-primary-dimmed"] = p.textSecondary;
  t["--dsw-alias-label-primary-foreground"] = p.labelForeground;
  t["--dsw-alias-label-primary-inverted"] = p.labelInverted;

  // -- specific surfaces ---------------------------------------------------
  t["--dsw-specific-sidebar-fill"] = p.sidebar.fill;
  t["--dsw-specific-sidebar-nav-item-active"] = p.sidebar.active;
  t["--dsw-specific-sidebar-nav-item-active-accent"] = p.sidebar.activeAccent;
  t["--dsw-specific-sidebar-nav-item-hover"] = p.sidebar.hover;
  t["--dsw-specific-bubble"] = p.layer2;
  t["--dsw-specific-bubble-highlight"] = p.bubbleHighlight;
  t["--dsw-specific-input-major"] = p.inputMajor;
  t["--dsw-specific-login-input"] = p.loginInput;
  t["--dsw-specific-menu"] = p.layer2;
  t["--dsw-specific-selector"] = p.selector;
  t["--dsw-specific-tip"] = p.layer2;

  // -- shiki syntax slots ----------------------------------------------------
  t["--shiki-foreground"] = p.shiki.foreground;
  t["--shiki-background"] = p.shiki.background;
  t["--shiki-token-constant"] = p.shiki.constant;
  t["--shiki-token-string"] = p.shiki.string;
  t["--shiki-token-comment"] = p.shiki.comment;
  t["--shiki-token-keyword"] = p.shiki.keyword;
  t["--shiki-token-parameter"] = p.shiki.parameter;
  t["--shiki-token-function"] = p.shiki.function;
  t["--shiki-token-string-expression"] = p.shiki.string;
  t["--shiki-token-punctuation"] = p.shiki.punctuation;
  t["--shiki-token-link"] = p.shiki.link;

  return t;
}

// ---------------------------------------------------------------------------

// Discover families (sorted filenames → deterministic output).
const familyDir = join(root, "families");
const familyFiles = readdirSync(familyDir).filter((f) => f.endsWith(".mjs")).sort();
if (familyFiles.length === 0) throw new Error("families/ holds no .mjs files");

// Every skin must expose the identical shared token vocabulary. Family
// signature variables (--dsw-gnd-*, --dsw-csm-*, …) differ per family by
// design, so they are excluded from the comparison.
const built = [];
const catalog = [];

/**
 * Optional asset for a skin, embedded as a data URI:
 * families/assets/<name>.webp. Returns the CSS url(...) value, or null
 * when the asset does not exist. Wallpapers/panels/pals are transparent-
 * background cutouts, so they composite cleanly on any surface tint.
 */
function assetDataUri(name) {
  const file = join(familyDir, "assets", `${name}.webp`);
  if (!existsSync(file)) return null;
  return `data:image/webp;base64,${readFileSync(file).toString("base64")}`;
}

function assetValue(name) {
  const uri = assetDataUri(name);
  return uri ? `url("${uri}")` : null;
}

/**
 * Header artwork geometry tokens. Both presentations paint through the same
 * ::after layer on the title cluster:
 * - "panel": the classic right-end manga panel (auto height, melts at the
 *   bottom edge), plus the small accent chip behind its top corner;
 * - "banner": a wide atmospheric scroll spanning the whole header strip
 *   (cover, anchored right-center, fading in from the left over the text
 *   zone, melting into the chat below). The accent chip steps aside — the
 *   scroll carries the decoration on its own.
 * Every skin emits the full set so the shared vocabulary check holds.
 */
function headerArtTokens(kind) {
  if (kind === "banner") {
    return {
      "--dsw-pack-header-art-left": "0px",
      "--dsw-pack-header-art-width": "auto",
      "--dsw-pack-header-art-position": "right center",
      "--dsw-pack-header-art-size": "cover",
      "--dsw-pack-header-art-mask":
        "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.55) 30%, #000 52%, #000 82%, transparent 98%), linear-gradient(#000 55%, transparent 92%)",
      "--dsw-pack-header-chip": "none",
    };
  }
  return {
    "--dsw-pack-header-art-left": "auto",
    "--dsw-pack-header-art-width": "min(480px, 62%)",
    "--dsw-pack-header-art-position": "right top",
    "--dsw-pack-header-art-size": "auto 100%",
    "--dsw-pack-header-art-mask": "linear-gradient(#000 62%, transparent 96%)",
    "--dsw-pack-header-chip": "block",
  };
}

/** All pal images of a family (assets/<id>-pal-N.webp), sorted, as data URIs. */
function palDataUris(familyId) {
  return readdirSync(join(familyDir, "assets"))
    .filter((f) => f.startsWith(`${familyId}-pal-`) && f.endsWith(".webp"))
    .sort()
    .map((f) => assetDataUri(f.slice(0, -".webp".length)))
    .filter(Boolean);
}

/** One-level merge: plain-object values merge, everything else replaces. */
function mergeParams(base, over) {
  if (!over) return base;
  const out = { ...base };
  for (const [key, value] of Object.entries(over)) {
    out[key] =
      value !== null && typeof value === "object" && !Array.isArray(value) && typeof base[key] === "object" && base[key] !== null
        ? { ...base[key], ...value }
        : value;
  }
  return out;
}

for (const file of familyFiles) {
  const family = (await import(pathToFileURL(join(familyDir, file)).href)).default;
  if (
    !family?.id ||
    !family.names?.zh ||
    !family.names?.en ||
    !family.light?.signatureAccent ||
    !family.dark?.signatureAccent ||
    !family.light?.deepAccent ||
    !family.dark?.deepAccent
  ) {
    throw new Error(`families/${file}: must export { id, names: { zh, en }, light, dark } with signatureAccent + deepAccent per mode`);
  }
  // A family may restrict which styles it ships via `styles` (default:
  // both). The IP families ship vivid only — their restrained palettes
  // live on as the standalone neutral families (slate/umber).
  const famStyles = family.styles ?? ["minimal", "vivid"];
  const skins = [];
  for (const mode of ["light", "dark"]) {
    const modeLabel = mode === "light" ? "Light" : "Dark";
    const wallpaper = assetValue(`${family.id}-${mode}`);
    const panel = assetValue(`${family.id}-panel`);
    // Header scroll: <id>-banner-<mode>.webp, falling back to a shared
    // <id>-banner.webp. When present it supersedes the manga panel as the
    // skin's header artwork (the panel file itself stays in assets).
    const banner = assetValue(`${family.id}-banner-${mode}`) ?? assetValue(`${family.id}-banner`);
    const folder = assetValue(`${family.id}-folder-${mode}`);
    const folderOpen = assetValue(`${family.id}-folder-open-${mode}`);
    // minimal skin: the restrained look, no imagery
    if (famStyles.includes("minimal")) {
      skins.push({
        id: `${family.id}-${mode}`,
        name: `${family.names.en} ${modeLabel}`,
        colorScheme: mode,
        tokens: {
          ...buildTokens(mode, family[mode]),
          "--dsw-pack-wallpaper": "none",
          "--dsw-pack-panel": "none",
          "--dsw-pack-folder": "none",
          "--dsw-pack-folder-open": "none",
          ...headerArtTokens("panel"),
        },
      });
    }
    // vivid skin: bolder params (tinted papers, brand sidebar) + imagery.
    // "Vivid" only goes into the name when the family also ships a minimal
    // skin — otherwise the vivid look is the family's only one.
    if (famStyles.includes("vivid")) {
      skins.push({
        id: `${family.id}-${mode}-vivid`,
        name: `${family.names.en} ${modeLabel}${famStyles.includes("minimal") ? " Vivid" : ""}`,
        colorScheme: mode,
        tokens: {
          ...buildTokens(mode, mergeParams(family[mode], family.vivid?.[mode])),
          "--dsw-pack-wallpaper": wallpaper ?? "none",
          "--dsw-pack-panel": (banner ?? panel) ?? "none",
          "--dsw-pack-folder": folder ?? "none",
          "--dsw-pack-folder-open": folderOpen ?? folder ?? "none",
          ...headerArtTokens(banner ? "banner" : "panel"),
        },
      });
      if (!wallpaper) {
        console.warn(`warning: families/assets/${family.id}-${mode}.webp missing — ${family.id} vivid skins ship without a wallpaper`);
      }
      if (!banner && !panel) {
        console.warn(`warning: families/assets/${family.id}-panel.webp missing — ${family.id} vivid skins ship without a header panel`);
      }
    }
  }
  for (const skin of skins) {
    built.push({ skin, signatureKeys: Object.keys(family[skin.colorScheme].signature) });
  }
  // Settings-entry character voice + pal images for the vivid style. The
  // pal entry (sidebar.footer.action) needs these as component data, not
  // CSS tokens, so they ride on the catalog entry, not on skins.
  const pals = palDataUris(family.id);
  const phrases = family.decor?.phrases;
  if (famStyles.includes("vivid")) {
    if (pals.length === 0) {
      console.warn(`warning: families/assets/${family.id}-pal-*.webp missing — ${family.id} vivid skins ship without a settings pal entry`);
    }
    if (!Array.isArray(phrases?.zh) || phrases.zh.length === 0 || !Array.isArray(phrases?.en) || phrases.en.length === 0) {
      console.warn(`warning: families/${file}: vivid family ships no decor.phrases { zh, en } — the pal entry stays silent`);
    }
  }
  catalog.push({ id: family.id, names: family.names, kin: family.kin ?? null, decor: { pals, phrases: phrases ?? null }, skins });
}

// A neutral family's `kin` declares the IP family whose palette it
// re-exports; the settings row renders the pair as one palette group.
// The reference must resolve to a family that actually ships.
for (const entry of catalog) {
  if (entry.kin !== null && !catalog.some((other) => other.id === entry.kin)) {
    throw new Error(`${entry.id}: kin "${entry.kin}" does not match any family id`);
  }
  if (entry.kin !== null && catalog.some((other) => other !== entry && other.kin === entry.kin)) {
    throw new Error(`${entry.id}: kin "${entry.kin}" is already claimed by another family — one kin per palette group`);
  }
}

const sharedKeys = ({ skin, signatureKeys }) =>
  Object.keys(skin.tokens).filter((k) => !signatureKeys.includes(k)).sort();
const reference = sharedKeys(built[0]);
for (const entry of built) {
  const keys = sharedKeys(entry);
  if (JSON.stringify(keys) !== JSON.stringify(reference)) {
    const missing = reference.filter((k) => !keys.includes(k));
    const extra = keys.filter((k) => !reference.includes(k));
    throw new Error(`${entry.skin.id}: token mismatch (missing: ${missing}; extra: ${extra})`);
  }
}

mkdirSync(join(root, "themes"), { recursive: true });
for (const { skins } of catalog) {
  for (const skin of skins) {
    const file = join(root, "themes", `${skin.id}.json`);
    writeFileSync(file, JSON.stringify(skin, null, 2) + "\n");
    console.log(`wrote themes/${skin.id}.json (${Object.keys(skin.tokens).length} tokens)`);
  }
}

const template = readFileSync(join(root, "lib", "client.tpl.js"), "utf8");
if (!template.includes("__CATALOG__")) {
  throw new Error("lib/client.tpl.js is missing the __CATALOG__ placeholder");
}
const embedded = JSON.stringify(catalog, null, 2)
  .split("\n")
  .map((line, i) => (i === 0 ? line : "    " + line))
  .join("\n");
writeFileSync(join(root, "lib", "client.js"), template.replace("__CATALOG__", embedded));
console.log(`wrote lib/client.js (${catalog.length} families, ${catalog.reduce((n, f) => n + f.skins.length, 0)} skins)`);

// ---------------------------------------------------------------------------
// Local preview page (docs/ is gitignored — the file never leaves the
// working copy). One card per skin: paper, layers, text ramp, brand
// button, accent chips and a shiki sample, so palette taste can be judged
// without installing the plugin.

function previewCard(family, skin) {
  const t = skin.tokens;
  const chip = (label, color, text = "#fff") =>
    `<span style="display:inline-block;padding:4px 10px;border-radius:6px;background:${color};color:${text};font-size:12px">${label}</span>`;
  const line = (label, color) =>
    `<div style="color:${color};font-size:14px;line-height:1.6">${label}</div>`;
  // Asset tokens are url("data:...") — the double quotes would terminate
  // the style="" attribute, so strip them; a bare data URI is valid
  // unquoted url() (base64 carries no whitespace, quotes or parens).
  const bareUrl = (v) => v.replace(/^url\("(.+)"\)$/, "url($1)");
  const wallpaper = t["--dsw-pack-wallpaper"];
  const wallpaperDiv = wallpaper === "none"
    ? ""
    : `<div style="margin-top:12px;height:180px;border-radius:10px;border:1px solid ${t["--dsw-alias-border-l2"]};background:${t["--dsw-alias-bg-base"]} ${bareUrl(wallpaper)} no-repeat right bottom / auto 100%"></div>`;
  // Header artwork mock: a fake title bar (crumbs left, action pill right)
  // with the panel/banner painted behind it exactly as client.js does —
  // geometry and masks come from the skin's own header-art tokens, and the
  // art overflows below the bar to show the melt into the chat area.
  const headerArt = t["--dsw-pack-panel"];
  const headerDiv = headerArt === "none" ? "" : `
    <div style="margin-top:12px;border-radius:10px;border:1px solid ${t["--dsw-alias-border-l2"]};overflow:hidden">
      <div style="position:relative;height:54px;display:flex;align-items:center;gap:10px;padding:0 14px;background:${t["--dsw-alias-bg-base"]}">
        <div style="position:absolute;top:-2px;bottom:-34px;left:${t["--dsw-pack-header-art-left"]};right:4px;width:${t["--dsw-pack-header-art-width"]};background:${bareUrl(headerArt)} no-repeat ${t["--dsw-pack-header-art-position"]} / ${t["--dsw-pack-header-art-size"]};-webkit-mask-image:${t["--dsw-pack-header-art-mask"]};mask-image:${t["--dsw-pack-header-art-mask"]};-webkit-mask-composite:source-in;mask-composite:intersect;pointer-events:none"></div>
        <span style="position:relative;z-index:1;color:${t["--dsw-alias-label-primary"]};font-size:13px;font-weight:600">新的会话</span>
        <span style="position:relative;z-index:1;color:${t["--dsw-alias-label-secondary"]};font-size:12px">dsh-themes 演示会话</span>
        <span style="flex:1"></span>
        <span style="position:relative;z-index:1;padding:3px 10px;border-radius:999px;border:1px solid ${t["--dsw-alias-border-l2"]};color:${t["--dsw-alias-label-secondary"]};font-size:12px;background:${t["--dsw-alias-bg-layer-2"]}">会话日志</span>
      </div>
      <div style="height:44px;background:${t["--dsw-alias-bg-layer-2"]}"></div>
    </div>`;
  return `
  <section id="skin-${skin.id}" style="border-radius:12px;overflow:hidden;border:1px solid ${t["--dsw-alias-border-l2"]}">
    <div style="background:${t["--dsw-alias-bg-base"]};padding:20px 24px">
      <h2 style="margin:0 0 4px;color:${t["--dsw-alias-label-primary"]};font-size:18px">${family.names.zh} · ${skin.colorScheme === "light" ? "浅色" : "深色"}${skin.id.endsWith("-vivid") ? " · 氛围" : " · 简约"} <code style="font-size:12px;color:${t["--dsw-alias-label-secondary"]}">${skin.id}</code></h2>
      ${line("正文文字 label-primary — The quick brown fox.", t["--dsw-alias-label-primary"])}
      ${line("次要文字 label-secondary — jumped over the lazy dog.", t["--dsw-alias-label-secondary"])}
      <div style="margin:12px 0;padding:14px 16px;border-radius:10px;background:${t["--dsw-alias-bg-layer-2"]};color:${t["--dsw-alias-label-primary"]};font-size:13px">
        侧栏 / 气泡表面（layer-2），<a href="#" style="color:${t["--dsw-static-blue-500"]}">链接 link</a> 与
        <span style="color:${t["--dsw-pack-signature"]}">签名色标题</span>。
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
        ${chip("主按钮 brand", t["--dsw-alias-brand-primary"], t["--dsw-alias-brand-text"])}
        ${chip("悬停 hover", t["--dsw-alias-button-primary-hover"], t["--dsw-alias-brand-text"])}
        ${chip("签名 signature", t["--dsw-pack-signature"])}
        ${chip("错误 error", t["--dsw-alias-state-error-primary"])}
        ${chip("警告 warn", t["--dsw-alias-state-warn-primary"], skin.colorScheme === "dark" ? "#241108" : "#fff")}
        ${chip("成功 success", t["--dsw-alias-state-success-primary"])}
      </div>
      <pre style="margin:12px 0 0;padding:12px 16px;border-radius:10px;background:${t["--shiki-background"]};font-size:13px;line-height:1.7"><code><span style="color:${t["--shiki-token-keyword"]}">const</span> <span style="color:${t["--shiki-token-function"]}">sortie</span><span style="color:${t["--shiki-token-punctuation"]}"> =</span> <span style="color:${t["--shiki-token-parameter"]}">unit</span> <span style="color:${t["--shiki-token-punctuation"]}">=></span> <span style="color:${t["--shiki-token-string"]}">"RX-78-2"</span> <span style="color:${t["--shiki-token-comment"]}">// comment</span> <span style="color:${t["--shiki-token-constant"]}">42</span></code></pre>
      ${headerDiv}
      ${wallpaperDiv}
    </div>
  </section>`;
}

function renderPreview() {
  const cards = [];
  for (const family of catalog) {
    for (const skin of family.skins) cards.push(previewCard(family, skin));
  }
  return `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><title>dsh-themes preview</title></head>
<body style="margin:0;padding:24px;font-family:system-ui,sans-serif;background:#888;display:flex;flex-direction:column;gap:20px;max-width:860px">
${cards.join("\n")}
</body></html>
`;
}

mkdirSync(join(root, "docs"), { recursive: true });
writeFileSync(join(root, "docs", "preview.html"), renderPreview());
console.log("wrote docs/preview.html (local only, gitignored)");
