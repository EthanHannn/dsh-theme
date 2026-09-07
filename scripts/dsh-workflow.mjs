/** One-command local linking, verification, repair, and startup for dsh-themes. */

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { checkDshCompatibility, resolveHarnessRoot } from "./check-dsh-compat.mjs";

const themeRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function run(command, args, options = {}) {
  const capture = options.capture === true;
  const result = spawnSync(command, args, {
    cwd: options.cwd,
    encoding: capture ? "utf8" : undefined,
    shell: options.shell === true,
    stdio: capture ? "pipe" : "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    if (capture) {
      if (result.stdout) process.stdout.write(result.stdout);
      if (result.stderr) process.stderr.write(result.stderr);
    }
    throw new Error(`${command} ${args.join(" ")} exited with ${String(result.status ?? result.signal)}`);
  }
  return capture ? result.stdout : "";
}

function pnpmInvocation(args) {
  if (process.platform !== "win32") return { command: "pnpm", args };
  const located = spawnSync("where.exe", ["pnpm.cmd"], { encoding: "utf8" });
  if (located.status !== 0) throw new Error("pnpm.cmd is not available on PATH");
  for (const shim of located.stdout.split(/\r?\n/).filter(Boolean)) {
    for (const entry of [
      join(dirname(shim), "node_modules", "pnpm", "bin", "pnpm.mjs"),
      join(dirname(shim), "node_modules", "pnpm", "bin", "pnpm.cjs"),
    ]) {
      if (existsSync(entry)) return { command: process.execPath, args: [entry, ...args] };
    }
  }
  throw new Error("Cannot resolve pnpm's JavaScript entry from the pnpm.cmd shim on PATH");
}

function runPnpm(harnessRoot, args, capture = false) {
  const invocation = pnpmInvocation(args);
  return run(invocation.command, invocation.args, { cwd: harnessRoot, capture });
}

function buildTheme() {
  run(process.execPath, [join(themeRoot, "scripts", "gen-themes.mjs")], { cwd: themeRoot });
}

function verifyProfile(harnessRoot, profile) {
  const dump = runPnpm(harnessRoot, ["dsh", "--profile", profile, "--dump-config"], true);
  if (!dump.includes("# == dsh-themes") || !/\bname:\s*['\"]?dsh-themes['\"]?/.test(dump)) {
    throw new Error(`Profile ${profile} does not contain the dsh-themes bundle; run npm run dsh:link`);
  }
  console.log(`dsh-themes: profile ${profile} contains the dsh-themes bundle`);
}

function usage() {
  return [
    "Usage: node scripts/dsh-workflow.mjs <check|link|repair|start> [options]",
    "  --harness <path>  Harness source checkout (default: DSH_HARNESS_ROOT or ../deepseek-harness)",
    "  --profile <name>  Target profile (default: web)",
    "  --no-open         Pass --no-open when starting the Web profile",
  ].join("\n");
}

function main() {
  const { values, positionals } = parseArgs({
    options: {
      harness: { type: "string" },
      profile: { type: "string", default: "web" },
      "no-open": { type: "boolean", default: false },
    },
    allowPositionals: true,
  });
  if (positionals.length !== 1 || !["check", "link", "repair", "start"].includes(positionals[0])) {
    throw new Error(usage());
  }
  const action = positionals[0];
  const harnessRoot = resolveHarnessRoot(values.harness);
  const profile = values.profile;
  const compatibility = checkDshCompatibility(harnessRoot);
  console.log(`dsh-themes: Harness ${compatibility.version} compatibility check passed`);

  if (action === "link") {
    buildTheme();
    runPnpm(harnessRoot, ["dsh", "plugin", "--profile", profile, "add", themeRoot]);
    verifyProfile(harnessRoot, profile);
    console.log("dsh-themes: linked successfully; restart the profile to apply bundle membership changes");
    return;
  }
  if (action === "repair") {
    runPnpm(harnessRoot, ["dsh", "plugin", "--profile", profile, "install"]);
    verifyProfile(harnessRoot, profile);
    console.log("dsh-themes: profile dependencies repaired; restart the profile");
    return;
  }

  verifyProfile(harnessRoot, profile);
  if (action === "start") {
    const args = ["dsh", "--profile", profile];
    if (values["no-open"]) args.push("--no-open");
    runPnpm(harnessRoot, args);
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
