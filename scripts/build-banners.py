# Crop the generated header-scroll artwork (families/assets/raw/*-banner-*-src.png)
# into the wide banner strips shipped as families/assets/<family>-banner-<mode>.webp.
#
# The header renders the banner with `background-size: cover` anchored
# right-center inside a very wide, short strip, so the source is pre-cropped
# to a thin ~6:1 band whose vertical middle carries the motif — whatever
# vertical crop cover then applies stays on subject. Character-free scenes
# only: the family's character lives in the bottom-right wallpaper.
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "families" / "assets" / "raw"
OUT = ROOT / "families" / "assets"

# (source stem, output stem, ratio W:H, vertical band center as a fraction
# of source height)
JOBS = [
    # frieren — light: meadow ridge with magic circles and flowers;
    # dark: full moon between stone markers.
    ("frieren-banner-light-src", "frieren-banner-light", 6.0, 0.62),
    ("frieren-banner-dark-src", "frieren-banner-dark", 6.0, 0.36),
    # chainsaw — light: golden-hour wires, rooftops and drifting leaves;
    # dark: amber moon with crows on the power lines.
    ("chainsaw-banner-light-src", "chainsaw-banner-light", 6.0, 0.58),
    ("chainsaw-banner-dark-src", "chainsaw-banner-dark", 6.0, 0.38),
    # gundam — light: launch gantry mid-section with the contrail;
    # dark: Earth's blue rim with the colony glint.
    ("gundam-banner-light-src", "gundam-banner-light", 6.0, 0.48),
    ("gundam-banner-dark-src", "gundam-banner-dark", 6.0, 0.33),
    # shinchan — light: crayon house and trees on the hill;
    # dark: smiling moon with the shooting star.
    ("shinchan-banner-light-src", "shinchan-banner-light", 6.0, 0.60),
    ("shinchan-banner-dark-src", "shinchan-banner-dark", 6.0, 0.31),
    # hinamatsuri — light: peach blossoms and lanterns over the bridge;
    # dark: lantern strings reflected on the night river.
    ("hinamatsuri-banner-light-src", "hinamatsuri-banner-light", 6.0, 0.36),
    ("hinamatsuri-banner-dark-src", "hinamatsuri-banner-dark", 6.0, 0.40),
    # natsume — light: torii gate under the green maple; dark: stone
    # lanterns and fireflies on the night shrine path.
    ("natsume-banner-light-src", "natsume-banner-light", 6.0, 0.40),
    ("natsume-banner-dark-src", "natsume-banner-dark", 6.0, 0.42),
]

MAX_WIDTH = 1400

for src_stem, out_stem, ratio, center_y in JOBS:
    src_path = RAW / f"{src_stem}.png"
    if not src_path.exists():
        print(f"skip {out_stem}: {src_path.name} missing")
        continue
    src = Image.open(src_path).convert("RGB")
    w, h = src.size
    band_h = round(w / ratio)
    top = round(h * center_y - band_h / 2)
    top = max(0, min(h - band_h, top))
    band = src.crop((0, top, w, top + band_h))
    if band.width > MAX_WIDTH:
        band = band.resize((MAX_WIDTH, round(band.height * MAX_WIDTH / band.width)), Image.LANCZOS)
    band.save(OUT / f"{out_stem}.webp", "WEBP", quality=88, method=6)
    print(f"{out_stem}.webp: {band.width}x{band.height} (from y={top}..{top + band_h} of {w}x{h})")
