# Crop the generated header-scroll artwork (raw/*-banner-*-src.png) into the
# wide banner strips shipped as families/assets/<family>-banner-<mode>.webp.
#
# Raw sources live in the OneDrive-synced scratch dir (see AGENTS.md):
# $DSH_THEME_DEV/raw, else <OneDrive>/文档/development/dsh-theme/raw, with a
# legacy in-repo families/assets/raw/ fallback so a fresh clone still runs.
#
# The header renders the banner with `background-size: cover` anchored
# right-center inside a very wide, short strip, so the source is pre-cropped
# to a thin ~6:1 band whose vertical middle carries the motif — whatever
# vertical crop cover then applies stays on subject. Character-free scenes
# only: the family's character lives in the bottom-right wallpaper.
import os
from pathlib import Path

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
    # gundam — orbital shipyard by day; Earth and a colony at night.
    ("gundam-banner-light-v2", "gundam-banner-light", 6.0, 0.51),
    ("gundam-banner-dark-v2", "gundam-banner-dark", 6.0, 0.50),
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
    # daxia — a character-free double-hero still life: two conical hats
    # and two sheathed swords on a bamboo mountain pass, by day / night.
    ("daxia-banner-light-src2-provider", "daxia-banner-light", 6.0, 0.57),
    ("daxia-banner-dark-src2-provider", "daxia-banner-dark", 6.0, 0.44),
    # New vivid families — character-free environmental motifs generated with
    # important details held close to the vertical center for this crop.
    ("one-piece-banner-light-src-provider", "one-piece-banner-light", 6.0, 0.50),
    ("one-piece-banner-dark-src-provider", "one-piece-banner-dark", 6.0, 0.50),
    ("naruto-banner-light-src-provider", "naruto-banner-light", 6.0, 0.50),
    ("naruto-banner-dark-src-provider", "naruto-banner-dark", 6.0, 0.50),
    ("slam-dunk-banner-light-src-provider", "slam-dunk-banner-light", 6.0, 0.50),
    ("slam-dunk-banner-dark-src-provider", "slam-dunk-banner-dark", 6.0, 0.50),
    ("pokemon-banner-light-src-provider", "pokemon-banner-light", 6.0, 0.50),
    ("pokemon-banner-dark-src-provider", "pokemon-banner-dark", 6.0, 0.50),
    ("minecraft-banner-light-src-provider", "minecraft-banner-light", 6.0, 0.50),
    ("minecraft-banner-dark-src-provider", "minecraft-banner-dark", 6.0, 0.50),
    ("wow-blood-elf-banner-light-src-provider", "wow-blood-elf-banner-light", 6.0, 0.50),
    ("wow-blood-elf-banner-dark-src-provider", "wow-blood-elf-banner-dark", 6.0, 0.50),
    ("wow-tauren-banner-light-src-provider", "wow-tauren-banner-light", 6.0, 0.50),
    ("wow-tauren-banner-dark-src-provider", "wow-tauren-banner-dark", 6.0, 0.50),
    ("wow-orc-banner-light-src-provider", "wow-orc-banner-light", 6.0, 0.50),
    ("wow-orc-banner-dark-src-provider", "wow-orc-banner-dark", 6.0, 0.50),
    ("wow-dwarf-banner-light-src-provider", "wow-dwarf-banner-light", 6.0, 0.50),
    ("wow-dwarf-banner-dark-src-provider", "wow-dwarf-banner-dark", 6.0, 0.50),
    ("i-am-mt-banner-light-src-provider", "i-am-mt-banner-light", 6.0, 0.50),
    ("i-am-mt-banner-dark-src-provider", "i-am-mt-banner-dark", 6.0, 0.50),
    ("dragon-maid-banner-light-src-provider", "dragon-maid-banner-light", 6.0, 0.50),
    ("dragon-maid-banner-dark-src-provider", "dragon-maid-banner-dark", 6.0, 0.50),
]

# New banners bake their horizontal edge dissolves into the pixels instead of
# relying on a responsive CSS mask. Values are (paper color, left fade end,
# right fade start), expressed as fractions of the final strip width. Older
# families keep their current output until their source artwork is regenerated.
BAKED_HORIZONTAL_FADES = {
    "gundam-banner-light": ("#EBEEFA", 0.65, 0.94),
    "gundam-banner-dark": ("#0E1423", 0.65, 0.94),
    "daxia-banner-light": ("#F1EEE1", 0.25, 0.90),
    "daxia-banner-dark": ("#0E1418", 0.25, 0.90),
    "one-piece-banner-light": ("#FFF1D0", 0.25, 0.90),
    "one-piece-banner-dark": ("#0B1824", 0.25, 0.90),
    "naruto-banner-light": ("#FCEBD2", 0.25, 0.90),
    "naruto-banner-dark": ("#121820", 0.25, 0.90),
    "slam-dunk-banner-light": ("#F8EEDF", 0.25, 0.90),
    "slam-dunk-banner-dark": ("#151719", 0.25, 0.90),
    "pokemon-banner-light": ("#FFF4C8", 0.25, 0.90),
    "pokemon-banner-dark": ("#101B2A", 0.25, 0.90),
    "minecraft-banner-light": ("#EDE6CC", 0.25, 0.90),
    "minecraft-banner-dark": ("#121B18", 0.25, 0.90),
    "wow-blood-elf-banner-light": ("#F8E8CF", 0.25, 0.90),
    "wow-blood-elf-banner-dark": ("#1B101A", 0.25, 0.90),
    "wow-tauren-banner-light": ("#EEDFC5", 0.25, 0.90),
    "wow-tauren-banner-dark": ("#19140F", 0.25, 0.90),
    "wow-orc-banner-light": ("#E7DFC8", 0.25, 0.90),
    "wow-orc-banner-dark": ("#141812", 0.25, 0.90),
    "wow-dwarf-banner-light": ("#EEE2CF", 0.25, 0.90),
    "wow-dwarf-banner-dark": ("#16181C", 0.25, 0.90),
    "i-am-mt-banner-light": ("#F9E5C5", 0.25, 0.90),
    "i-am-mt-banner-dark": ("#191411", 0.25, 0.90),
    "dragon-maid-banner-light": ("#FCEEDD", 0.25, 0.90),
    "dragon-maid-banner-dark": ("#131820", 0.25, 0.90),
}

MAX_WIDTH = 1400


def smoothstep(value):
    value = max(0.0, min(1.0, value))
    return value * value * (3.0 - 2.0 * value)


def bake_horizontal_fades(image, paper, left_end, right_start):
    """Blend both horizontal edges into the theme paper color."""
    width, height = image.size
    weights = []
    for x in range(width):
        position = x / max(1, width - 1)
        left_weight = smoothstep(position / left_end)
        right_weight = smoothstep((1.0 - position) / (1.0 - right_start))
        weights.append(round(255 * min(left_weight, right_weight)))
    mask = Image.new("L", (width, 1))
    mask.putdata(weights)
    mask = mask.resize((width, height))
    solid = Image.new("RGB", image.size, paper)
    return Image.composite(image, solid, mask)

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
    if out_stem in BAKED_HORIZONTAL_FADES:
        band = bake_horizontal_fades(band, *BAKED_HORIZONTAL_FADES[out_stem])
    if out_stem.startswith("gundam-banner-"):
        # Dissolve the lower edge into vivid paper even in Full wallpaper mode.
        paper = BAKED_HORIZONTAL_FADES[out_stem][0]
        mask = Image.new("L", (1, band.height))
        mask.putdata([round(255 * smoothstep((1 - y / max(1, band.height - 1)) / 0.28)) for y in range(band.height)])
        band = Image.composite(band, Image.new("RGB", band.size, paper), mask.resize(band.size))
    if band.width > MAX_WIDTH:
        band = band.resize((MAX_WIDTH, round(band.height * MAX_WIDTH / band.width)), Image.LANCZOS)
    band.save(OUT / f"{out_stem}.webp", "WEBP", quality=88, method=6)
    print(f"{out_stem}.webp: {band.width}x{band.height} (from y={top}..{top + band_h} of {w}x{h})")
