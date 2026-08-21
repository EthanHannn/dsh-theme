#!/usr/bin/env python3
"""Post-process the keyed wallpaper originals (raw/*-alpha*.png in the
OneDrive-synced scratch dir — see AGENTS.md) to fix visibility problems,
then re-emit the webp assets.

Why: the vivid wallpapers sit behind paper at 72% opacity (28% bleed-through),
and three of the four read as near-invisible:

  - gundam-light  white armor on light paper -> white-on-white
  - gundam-dark   neon line art too thin/faint to survive the bleed
  - chainsaw-dark black silhouette body merges into the near-black paper

Fixes are applied to the keyed originals so the artwork itself is unchanged:

  - gundam-light:  brightness+desaturation-weighted steel-blue multiply so
                   the white armor reads as mid blue-gray against the paper
                   while the tricolor (red shield, blue chest, yellow
                   vents) keeps its hue
  - gundam-dark:   boost alpha x2.0 and brightness x1.45 so the neon lines
                   thicken and brighten
  - chainsaw-dark: boost orange pixels (the glow rim) alpha x2.2 /
                   brightness x1.5; remap near-black silhouette pixels to a
                   warm brown (#604230) so the body outlines against the
                   dark paper

Usage: python3 scripts/enhance-wallpapers.py
Then run: node scripts/gen-themes.mjs
"""

import os
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "families" / "assets"


def dev_dir():
    candidates = [os.environ.get("DSH_THEME_DEV")]
    for var in ("OneDrive", "OneDriveCommercial"):
        root = os.environ.get(var)
        if root:
            candidates.append(os.path.join(root, "文档", "development", "dsh-theme"))
    candidates.append(str(Path.home() / "OneDrive" / "文档" / "development" / "dsh-theme"))
    for c in candidates:
        if c and Path(c).is_dir():
            return Path(c)
    return None


# Raw source dir: OneDrive scratch dir first, legacy in-repo dir as fallback.
_dev = dev_dir()
if _dev and (_dev / "raw").is_dir():
    RAW = _dev / "raw"
else:
    RAW = ROOT / "families" / "assets" / "raw"


def load(path):
    img = Image.open(path).convert("RGBA")
    return np.asarray(img).astype(np.float32), img.size


def save(arr, name, quality):
    arr = np.clip(arr, 0, 255).astype(np.uint8)
    img = Image.fromarray(arr, "RGBA")
    img.thumbnail((900, 900), Image.LANCZOS)
    dest = OUT / name
    img.save(dest, "WEBP", quality=quality, method=6)
    print(f"  -> {dest.name}  {img.size[0]}x{img.size[1]}  {dest.stat().st_size // 1024} KB")


def gundam_light():
    arr, _ = load(RAW / "gundam-light-alpha.png")
    rgb, alpha = arr[..., :3], arr[..., 3:4]
    tint = np.array([120, 160, 210], dtype=np.float32) / 255.0
    # Deep steel-blue multiply on the white armor ONLY: the weight combines
    # brightness with LOW saturation, so the classic tricolor (red shield,
    # blue chest, yellow vents — all bright but saturated) keeps its hue
    # while the near-white armor darkens enough to read through the 72%
    # paper. A brightness-only weight would mud the red shield toward brown.
    mx = rgb.max(axis=-1, keepdims=True)
    mn = rgb.min(axis=-1, keepdims=True)
    sat = (mx - mn) / np.maximum(mx, 1.0)
    bright = np.clip((mx - 130.0) / 125.0, 0.0, 1.0)
    w = bright * np.clip(1.0 - sat * 1.6, 0.0, 1.0) * (alpha / 255.0)
    arr[..., :3] = rgb * (1 - w) + (rgb * tint) * w
    save(arr, "gundam-light.webp", 66)


def gundam_dark():
    arr, _ = load(RAW / "gundam-dark-alpha-2.png")
    arr[..., :3] = arr[..., :3] * 1.45
    arr[..., 3] = arr[..., 3] * 2.0
    save(arr, "gundam-dark.webp", 72)


def chainsaw_dark():
    arr, _ = load(RAW / "chainsaw-dark-alpha.png")
    rgb, alpha = arr[..., :3], arr[..., 3]
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]

    orange = (r > 120) & (r - g > 40) & (r - b > 60)
    rgb[orange] = rgb[orange] * 1.5
    alpha[orange] = alpha[orange] * 2.2

    blackish = (rgb.max(axis=-1) < 60)
    rgb[blackish] = np.array([96, 66, 48], dtype=np.float32)  # #604230

    arr[..., :3], arr[..., 3] = rgb, alpha
    save(arr, "chainsaw-dark.webp", 72)


def shinchan_light():
    # full-color classic Shin-chan: red shirt / yellow shorts on cream
    # paper already carry enough contrast — straight conversion
    arr, _ = load(RAW / "shinchan-light-alpha.png")
    save(arr, "shinchan-light.webp", 72)


def shinchan_dark():
    # neon line art: modest alpha boost so the tubes thicken a little
    arr, _ = load(RAW / "shinchan-dark-alpha.png")
    arr[..., 3] = arr[..., 3] * 1.3
    save(arr, "shinchan-dark.webp", 72)


if __name__ == "__main__":
    gundam_light()
    gundam_dark()
    chainsaw_dark()
    shinchan_light()
    shinchan_dark()
