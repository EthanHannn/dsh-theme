/** Validate this theme pack against one DeepSeek Harness source checkout. */

import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parseArgs } from "node:util";

const themeRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function harnessManifestPath(root) {
  return join(root, "apps", "cli", "package.json");
}

/** Resolve an explicit, environment-provided, or sibling Harness checkout. */
export function resolveHarnessRoot(explicit) {
  const candidates = [
    explicit,
    process.env.DSH_HARNESS_ROOT,
    resolve(themeRoot, "..", "deepseek-harness"),
  ].filter(Boolean).map((path) => resolve(path));
  const root = candidates.find((candidate) => existsSync(harnessManifestPath(candidate)));
  if (root) return root;
  throw new Error([
    "Cannot find a DeepSeek Harness source checkout.",
    "Pass --harness <path>, set DSH_HARNESS_ROOT, or place it beside dsh-theme as ../deepseek-harness.",
    `Checked: ${candidates.join(", ")}`,
  ].join("\n"));
}

function hasExport(manifest, name) {
  return manifest.exports && typeof manifest.exports === "object" && Object.hasOwn(manifest.exports, name);
}

/** Check the supported Harness release, required client packages, and theme manifest declarations. */
export function checkDshCompatibility(harnessRoot) {
  const compatibility = readJson(join(themeRoot, "compatibility.json"));
  const themeManifest = readJson(join(themeRoot, "package.json"));
  const harnessManifest = readJson(harnessManifestPath(harnessRoot));
  const failures = [];

  if (compatibility.formatVersion !== 1) {
    failures.push(`compatibility.json formatVersion must be 1, got ${String(compatibility.formatVersion)}`);
  }
  const supportedVersion = compatibility.harness?.version;
  const supportedTag = compatibility.harness?.tag;
  if (typeof supportedVersion !== "string" || supportedVersion.length === 0) {
    failures.push("compatibility.json must declare harness.version");
  } else if (harnessManifest.version !== supportedVersion) {
    failures.push(`Harness ${harnessManifest.version ?? "<unknown>"} is not the tested ${supportedVersion}`);
  }
  if (typeof supportedTag !== "string" || supportedTag.length === 0) {
    failures.push("compatibility.json must declare harness.tag");
  }
  if (harnessManifest.name !== "@deepseek-ai/dsh") {
    failures.push(`${harnessManifestPath(harnessRoot)} is not the @deepseek-ai/dsh CLI package`);
  }

  const clientPackages = compatibility.clientPackages;
  if (!Array.isArray(clientPackages) || clientPackages.length === 0) {
    failures.push("compatibility.json must declare clientPackages");
  } else {
    const inject = themeManifest.dsh?.client?.inject ?? [];
    const requiredNames = new Set(clientPackages.map((required) => required.name));
    for (const injected of inject) {
      if (!requiredNames.has(injected)) {
        failures.push(`package.json dsh.client.inject contains ${injected}, which is absent from compatibility.json`);
      }
    }
    for (const peer of Object.keys(themeManifest.peerDependencies ?? {})) {
      if (peer.startsWith("@deepseek-ai/dsh-client-") && !requiredNames.has(peer)) {
        failures.push(`package.json peerDependencies contains ${peer}, which is absent from compatibility.json`);
      }
    }
    for (const required of clientPackages) {
      const manifestPath = join(harnessRoot, required.manifest ?? "");
      if (!existsSync(manifestPath)) {
        failures.push(`${required.name}: missing Harness manifest ${required.manifest}`);
        continue;
      }
      const manifest = readJson(manifestPath);
      if (manifest.name !== required.name) {
        failures.push(`${required.manifest}: expected package ${required.name}, got ${manifest.name ?? "<unknown>"}`);
      }
      if (manifest.version !== supportedVersion) {
        failures.push(`${required.name}: expected version ${supportedVersion}, got ${manifest.version ?? "<unknown>"}`);
      }
      if (!hasExport(manifest, required.export)) {
        failures.push(`${required.name}: missing required export ${required.export}`);
      }
      if (!inject.includes(required.name)) {
        failures.push(`package.json dsh.client.inject is missing ${required.name}`);
      }
      if (themeManifest.peerDependencies?.[required.name] !== supportedVersion) {
        failures.push(`package.json peerDependencies must pin ${required.name} to ${supportedVersion}`);
      }
    }
  }

  if (!existsSync(join(themeRoot, "lib", "client.js"))) {
    failures.push("lib/client.js is missing; run npm run build");
  }
  if (failures.length > 0) {
    throw new Error([
      `dsh-themes is not compatible with the Harness checkout at ${harnessRoot}:`,
      ...failures.map((failure) => `- ${failure}`),
      "Update compatibility.json, package.json, the client adapter, and the compatibility matrix together.",
    ].join("\n"));
  }
  return { harnessRoot, version: supportedVersion, tag: supportedTag };
}

function main() {
  const { values } = parseArgs({
    options: { harness: { type: "string" } },
    allowPositionals: false,
  });
  const harnessRoot = resolveHarnessRoot(values.harness);
  const result = checkDshCompatibility(harnessRoot);
  console.log(`dsh-themes: compatible with Harness ${result.version} at ${result.harnessRoot}`);
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try {
    main();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
