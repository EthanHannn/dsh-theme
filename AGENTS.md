# Repository Guidelines

## Project Structure & Module Organization

This repository is a dependency-free, ESM-based theme pack for DeepSeek Harness. Theme definitions live in `families/*.mjs`; each module exports a family ID, localized names, and light/dark parameters. Committed WebP assets belong in `families/assets/`.

Unprocessed image sources and process scripts do NOT live in the repo — they live in a OneDrive-synced scratch dir so work continues across machines: `<OneDrive>/文档/development/dsh-theme/` with `raw/` (green-screen sources, keyed alpha intermediates) and `outputs/` (per-family asset-build scripts `build-<family>-assets.py`, composite/visibility checks, preview screenshots). Resolution order for scripts: `$DSH_THEME_DEV`, then `$OneDrive` / `$OneDriveCommercial` / `~/OneDrive` + `文档/development/dsh-theme`. Run scratch-dir scripts from the repo root (they write webp into `families/assets/` relative to the cwd).

`scripts/gen-themes.mjs` expands family parameters into `themes/*.json` and embeds the catalog into `lib/client.js`. Treat both as generated outputs. Edit `lib/client.tpl.js` for runtime/UI behavior and regenerate. `scripts/build-banners.py` crops header-scroll sources from the scratch dir's `raw/` into the shipped banner strips (falls back to a legacy in-repo `families/assets/raw/` if the scratch dir is absent). `lib/index.js` is the plugin entry point and `cordis.patch.yml` defines bundle integration. Design rationale lives outside the repo (author's local notes); `docs/DESIGN.md` is gitignored — never commit it.

## Build, Test, and Development Commands

- `npm run build` — generate all theme JSON files, `lib/client.js`, and the ignored `docs/preview.html`.
- `npm run generate` — alias of the build command.
- `npm run check` — regenerate and reject stale outputs, then validate the supported Harness checkout.
- `npm run dsh:link` — build, link the repository into the `web` profile, and verify the effective configuration.
- `npm run dsh:check` — validate Harness compatibility and confirm that the profile still contains the bundle.
- `npm run dsh:repair` — reinstall profile dependencies when an existing `link:` target is broken, without adding a duplicate entry.
- `npm run dsh:start` — run the validated profile through the same Harness source checkout used for linking.
- `node scripts/gen-themes.mjs` — direct generator invocation; requires Node.js 20 or newer.

The workflow commands resolve Harness from `--harness <path>`, then `DSH_HARNESS_ROOT`, then the sibling `../deepseek-harness` checkout. When working against source, use these commands or the source checkout's `pnpm dsh` consistently. Use the global `dsh` command only when both installation and startup use that installed CLI.

There is no unit-test suite or coverage threshold. `npm run check` is the baseline automated check. Review `docs/preview.html` in a browser, verify light/dark/system modes in Harness, and inspect generated diffs before committing. Visual changes should also be checked at narrow widths.

## Harness Compatibility Maintenance

Harness plugin APIs are pre-stable. `compatibility.json` is the source of truth for the one Harness release currently supported and the client packages and exports consumed by this plugin. Keep its Harness version synchronized with the exact Harness client-package peer versions in `package.json` and the compatibility table in `README.md`; CI reads the tag directly from the compatibility file. An adaptation is complete only after the client code is updated and the supported-tag CI path builds Harness, links the profile, and boots the real Web application.

The scheduled CI job checks Harness `master` every Monday. Treat its failure as an upstream compatibility alert: inspect upstream changes, adapt this repository, verify the new release or commit locally, and then advance all four declarations together. Do not loosen peer ranges or bypass `scripts/check-dsh-compat.mjs` to make an unverified Harness version appear supported.

## Coding Style & Naming Conventions

Follow existing JavaScript style: two-space indentation, double quotes, semicolons, trailing commas, ESM imports, `camelCase` identifiers, and short explanatory comments for non-obvious token decisions. Family filenames and IDs use lowercase kebab case, for example `chainsaw.mjs` and `chainsaw-dark-vivid`. Name assets `<family>-<mode>.webp`, `<family>-pal-N.webp`, `<family>-panel.webp`, `<family>-banner[-<mode>].webp` (wide header scroll; supersedes the panel as header artwork when present), or `<family>-folder[-open]-<mode>.webp`.

Header artwork requirement: every vivid family ships `<family>-banner-light.webp` and `<family>-banner-dark.webp`. The banner is a character-free atmospheric scene (the family's character lives in the bottom-right wallpaper — never duplicate it in the header), composed right-weighted: the motif sits in the right third and near the vertical middle of a ~6:1 strip, while the left two-thirds and the bottom edge dissolve seamlessly into the skin's vivid `paper` color. The runtime fades the strip out over the left text zone and the right button row via the skin's header-art mask tokens, and hides it under 900px. Produce strips by cropping the raw sources with `scripts/build-banners.py` (one entry per mode, band center tuned per artwork). Manga panels (`<family>-panel.webp`) are kept as legacy artwork for families without banners; do not add panels to new families.

## Commit & Pull Request Guidelines

Recent history favors concise, imperative subjects with optional Conventional Commit prefixes such as `fix:` and `docs:`. Keep each commit focused and include regenerated artifacts with source changes. Pull requests should explain the user-visible result, identify affected families and modes, note manual checks, and include screenshots for palette, asset, layout, or interaction changes. Link relevant issues and call out any intentional compatibility tradeoffs.
