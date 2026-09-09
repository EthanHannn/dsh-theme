import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const catalog = ["naruto", "gundam"].map((id) => ({ id, names:{ zh:id, en:id }, skins:["light", "dark"].map((mode) => ({ id:`${id}-${mode}-vivid`, colorScheme:mode })) }));
function load(saved, unavailable = false) {
  let raw = saved;
  let api;
  const nodes = new Set();
  const body = { dataset:{}, setAttribute(key, value) { this[key] = value; }, removeAttribute(key) { delete this[key]; }, appendChild(node) { node.isConnected = true; nodes.add(node); } };
  const document = { body, head:body, createElement:() => ({ isConnected:false, setAttribute() {}, remove() { this.isConnected = false; nodes.delete(this); } }) };
  const source = readFileSync(new URL("../lib/client.tpl.js", import.meta.url), "utf8")
    .replace("__CATALOG__", JSON.stringify(catalog))
    .replace("    exports.CATALOG = CATALOG;", "    Object.assign(exports, { readPref, writePref, readDocument, appearanceFor, settingsFor, writeSettings, normalizeDocument, parseSkin, resolveSkin });");
  const window = { matchMedia:() => ({ matches:false, addEventListener() {}, removeEventListener() {} }), localStorage:{ getItem:() => raw, setItem:(_, value) => { if (unavailable) throw Error("blocked"); raw = value; } }, __ModuleLoader__:{ load:({ factory }) => { api = factory(() => ({ defineStore:(value) => value })); } } };
  vm.runInNewContext(source, { window, document, setTimeout:() => 1, clearTimeout() {} });
  return { api, document, nodes, raw:() => raw };
}

test("legacy clarity migrates to its family and survives default selection", () => {
  const { api, raw } = load(JSON.stringify({ family:"naruto", mode:"system", style:"vivid", wallpaper:"full" }));
  assert.equal(api.readPref().wallpaper, "full");
  assert.equal(api.appearanceFor("gundam").wallpaper, "full");
  api.writePref(api.readPref());
  assert.equal(JSON.parse(raw()).version, 3);
  api.writePref(null);
  assert.equal(api.readPref(), null);
  assert.equal(api.appearanceFor("naruto").wallpaper, "full");
});

test("family settings remain independent and reset affects only current family", () => {
  const { api } = load(null);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid", props:false, pal:false, wallpaper:"full" });
  api.writePref({ family:"gundam", mode:"light", style:"vivid", character:false, wallpaper:"soft" });
  assert.equal(api.appearanceFor("naruto").props, false);
  assert.equal(api.appearanceFor("gundam").props, true);
  assert.equal(api.appearanceFor("gundam").wallpaper, "soft");
  api.writePref({ family:"gundam", mode:"system", style:"vivid", ...api.appearanceFor(null) });
  assert.equal(api.appearanceFor("gundam").character, true);
  assert.equal(api.appearanceFor("gundam").wallpaper, "full");
  assert.equal(api.appearanceFor("naruto").pal, false);
});

test("corrupt and obsolete fields normalize without admitting nonexistent skins", () => {
  for (const value of ["{", "null", "[]", "42"]) assert.equal(load(value).api.readPref(), null);
  const { api } = load(JSON.stringify({ family:"naruto", mode:"garbage", style:"minimal", wallpaper:"broken" }));
  assert.equal(api.readPref().mode, "system");
  assert.equal(api.readPref().style, "vivid");
  assert.equal(api.readPref().wallpaper, "full");
  assert.equal(api.parseSkin("naruto-light"), null);
  assert.equal(api.resolveSkin(api.readPref()), "naruto-light-vivid");
  assert.equal(api.normalizeDocument({ version:2, selected:{family:"removed"}, families:{ naruto:{ props:false, header:"false" } } }).families.naruto.props, false);
});

test("v2 migration preserves the active mode and defaults other families to system", () => {
  const { api } = load(JSON.stringify({ version:2, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ wallpaper:"soft" }, gundam:{ props:false } } }));
  assert.equal(api.settingsFor("naruto").mode, "dark");
  assert.equal(api.settingsFor("gundam").mode, "system");
  assert.equal(api.settingsFor("naruto").wallpaper, "soft");
});

test("family settings auto-save across reload without changing the current theme", () => {
  const { api, raw } = load(null);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid" });
  api.writeSettings({ family:"gundam", mode:"light", wallpaper:"soft", props:false });
  const reloaded = load(raw()).api;
  assert.equal(reloaded.readPref().family, "naruto");
  assert.equal(reloaded.readPref().mode, "dark");
  assert.equal(reloaded.settingsFor("gundam").mode, "light");
  assert.equal(reloaded.settingsFor("gundam").wallpaper, "soft");
  assert.equal(reloaded.settingsFor("gundam").props, false);
  reloaded.writeSettings({ family:"naruto", mode:"light", wallpaper:"soft" });
  assert.equal(reloaded.readPref().family, "naruto");
  assert.equal(reloaded.readPref().mode, "light");
});

test("blocked localStorage retains preferences for the session", () => {
  const { api } = load(null, true);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid", props:false });
  assert.equal(api.readPref().props, false);
});

test("section applies same-skin decorations, restores default, and tears down", () => {
  const { api, document, nodes, raw } = load(null);
  const cleanups = [];
  const listeners = [];
  const registrations = [];
  let snapshot = { preference:"system", revision:0 };
  const ctx = {
    theme:{ register:() => () => {}, getTheme:() => snapshot, setTheme(preference) { if (preference === snapshot.preference) return; snapshot = { preference, revision:snapshot.revision+1 }; for (const listener of listeners) listener(snapshot); } },
    on:(_, callback) => { listeners.push(callback); return () => {}; },
    effect:(fn) => cleanups.push(fn()),
    locale:{ register:() => () => {}, getLocale:() => ({ active:"zh" }) },
    slots:{ inject:(_, fn) => fn(), register:(meta, component) => { registrations.push({ meta, component }); } },
  };
  api.apply(ctx);
  const section = registrations.find(({ meta }) => meta.name === "settings.section");
  assert.ok(section);
  assert.equal(registrations.some(({ meta }) => meta.name === "settings.general.item"), false);
  const actions = section.meta.inject({ sync() {} });
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  const saved = raw();
  actions.previewTheme({ family:"gundam", mode:"light", ...api.appearanceFor(null), props:false });
  assert.equal(snapshot.preference, "gundam-light-vivid");
  assert.equal(raw(), saved);
  assert.equal(api.appearanceFor("gundam").props, true);
  actions.previewTheme({ family:null, mode:"dark" });
  assert.equal(snapshot.preference, "dsh-preview-dark");
  assert.equal(raw(), saved);
  actions.cancelPreview();
  assert.equal(snapshot.preference, "naruto-dark-vivid");
  assert.equal(raw(), saved);
  actions.previewTheme({ family:"gundam", mode:"light", ...api.appearanceFor(null) });
  actions.applyDraft({ family:"gundam", mode:"light", ...api.appearanceFor(null) });
  actions.cancelPreview();
  assert.equal(snapshot.preference, "gundam-light-vivid");
  assert.equal(api.readPref().family, "gundam");
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  actions.saveDraft({ family:"gundam", mode:"system", wallpaper:"soft", props:false });
  assert.equal(api.readPref().family, "naruto");
  assert.equal(api.settingsFor("gundam").mode, "system");
  assert.equal(api.settingsFor("gundam").wallpaper, "soft");
  actions.cancelPreview();
  assert.equal(snapshot.preference, "naruto-dark-vivid");
  assert.equal(api.settingsFor("gundam").props, false);
  actions.saveDraft({ family:"naruto", mode:"light", wallpaper:"soft" });
  const restored = actions.cancelPreview();
  assert.equal(snapshot.preference, "naruto-light-vivid");
  assert.equal(restored.mode, "light");
  assert.equal(restored.wallpaper, "soft");
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  const revision = snapshot.revision;
  actions.applyDraft({ family:"naruto", mode:"dark", props:false, character:false, header:false, pal:false, wallpaper:"full" });
  assert.equal(snapshot.revision, revision);
  const override = [...nodes].find((node) => node.id === "dsh-theme-decoration-overrides");
  assert.match(override.textContent, /--dsw-pack-scene-props-secondary:none!important/);
  assert.match(override.textContent, /--dsw-pack-wallpaper:none!important/);
  assert.match(override.textContent, /--dsw-pack-panel:none!important/);
  actions.applyDraft({ family:null, mode:"light" });
  assert.equal(snapshot.preference, "light");
  assert.equal(api.appearanceFor("naruto").props, false);
  for (const cleanup of cleanups.reverse()) cleanup?.();
  assert.equal(nodes.size, 0);
  assert.equal(document.body.dataset.dshThemesPal, undefined);
});
