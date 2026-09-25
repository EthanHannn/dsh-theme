# Repository Guidelines

## Project Structure & Module Organization

This repository is a dependency-free, ESM-based theme pack for DeepSeek Harness. Theme definitions live in `families/*.mjs`; each module exports a family ID, localized names, and light/dark parameters. Committed WebP assets belong in `families/assets/`.

Unprocessed image sources and process scripts do NOT live in the repo — they live in a local, non-synced scratch dir with `raw/` (green-screen sources, keyed alpha intermediates) and `outputs/` (per-family asset-build scripts `build-<family>-assets.py`, composite/visibility checks, preview screenshots). On CASTLE the directory is `D:/Documents/development/dsh-theme/`, also registered as the user environment variable `DSH_THEME_DEV`. Resolution order for scripts: `$DSH_THEME_DEV`, then `D:/Documents/development/dsh-theme` on Windows, then `~/Documents/development/dsh-theme`. OneDrive is no longer used for these files; do not recreate the old synced directory or add a junction back to it. On another machine, provision a local copy and set `DSH_THEME_DEV` explicitly. Run scratch-dir scripts from the repo root (they write webp into `families/assets/` relative to the cwd).

Harness runtime homes must stay outside OneDrive and all other synced directories. Leave `DSH_HOME` unset for normal use: Harness defaults to `~/.dsh` (`C:/Users/Ethan/.dsh` on CASTLE). Never use the asset scratch dir for runtime homes or profile dependencies. Only when isolated checks are necessary, use `D:/Documents/dsh-theme-runtime/<purpose>-home` on CASTLE (a local, non-synced directory on other machines), setting `DSH_HOME` only for that process/session. Historical test homes are archived at `D:/Documents/dsh-theme-runtime/archived-homes-20260917/`; they are not the active home.

Preserve the user's running Harness instance during theme development. Reuse it for visual checks when browser access is available; never stop or restart it to load theme changes. If a separate test server is needed, use an isolated runtime home and the source checkout's `pnpm dsh --profile web --port 0 --no-open` to allocate a free port. Do not start a test server on the normal 3080 port. Record the test process/session and stop only that instance after verification.

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

Harness plugin APIs are pre-stable. `compatibility.json` records the last fully verified Harness release plus the client packages and exports this plugin consumes; `scripts/check-dsh-compat.mjs` requires the current checkout to match it, so an upstream version bump fails the check and prompts re-verification. The four `@deepseek-ai/dsh-client-*` peer declarations in `package.json` are release-line ranges (`^0.1.6-alpha.2`), never exact pins — the runtime compatibility gate reads exactly these, so the range is what lets the bundle load on the current release line. An adaptation is complete only after the client adapter is re-checked and the supported-tag CI path builds Harness, links the profile, and boots the real Web application.

The scheduled CI job checks Harness `master` every Monday. Treat its failure as an upstream compatibility alert: inspect upstream changes, re-check the client adapter, then advance the verified baseline and the compatibility table together. Keep the peer ranges on the verified release line and never widen them across major/minor lines to make an unverified runtime load.

## Coding Style & Naming Conventions

Follow existing JavaScript style: two-space indentation, double quotes, semicolons, trailing commas, ESM imports, `camelCase` identifiers, and short explanatory comments for non-obvious token decisions. Family filenames and IDs use lowercase kebab case, for example `chainsaw.mjs` and `chainsaw-dark-vivid`. Name assets `<family>-<mode>.webp`, `<family>-pal-N.webp`, `<family>-panel.webp`, `<family>-banner[-<mode>].webp` (wide header scroll; supersedes the panel as header artwork when present), or `<family>-folder[-open]-<mode>.webp`.

Header artwork requirement: every vivid family ships `<family>-banner-light.webp` and `<family>-banner-dark.webp`. The banner is a character-free atmospheric scene (the family's character lives in the bottom-right wallpaper — never duplicate it in the header), composed right-weighted: the motif sits in the right third and near the vertical middle of a ~6:1 strip, with supporting scenery extending through the middle. Bake the left 0–25% and right 90–100% fades into the skin's vivid `paper` color; do not leave the left two-thirds blank. Declare `decor.headerArt.bakedHorizontalFade: true`. Above 1200px, Full mode uses only the bottom fade; Soft mode and widths 901–1200px retain the horizontal and vertical masks, and widths ≤900px hide the artwork. Produce strips by cropping the raw sources with `scripts/build-banners.py` (one entry per mode, band center tuned per artwork). Manga panels (`<family>-panel.webp`) are kept as legacy artwork for families without banners; do not add panels to new families.

## Commit & Pull Request Guidelines

Recent history favors concise, imperative subjects with optional Conventional Commit prefixes such as `fix:` and `docs:`. Keep each commit focused and include regenerated artifacts with source changes. Pull requests should explain the user-visible result, identify affected families and modes, note manual checks, and include screenshots for palette, asset, layout, or interaction changes. Link relevant issues and call out any intentional compatibility tradeoffs.
