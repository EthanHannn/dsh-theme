import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const catalog = ["naruto", "gundam"].map((id) => ({ id, category:"anime", names:{ zh:id, en:id }, skins:["light", "dark"].map((mode) => ({ id:`${id}-${mode}-vivid`, colorScheme:mode, tokens:{ "--dsw-pack-wallpaper":"url(test.webp)", "--dsw-pack-panel":"url(banner.webp)" } })) }));
catalog.push({ id:"slate", kin:"gundam", category:"anime", names:{ zh:"青灰", en:"Slate" }, skins:["light", "dark"].map((mode) => ({ id:`slate-${mode}`, colorScheme:mode })) });
catalog[0].decor = { wallpaperPosition: "right 32px bottom 20px", wallpaperSize: "min(34vw, 420px, 40vh)", heroTranslate: "0 -80px", heroMaxWidth: "600px" };
function load(saved, unavailable = false, reactApi = {}, browser = {}) {
  let raw = saved;
  let api;
  const nodes = new Set();
  const properties = new Map();
  const style = {
    setProperty(key, value) { properties.set(key, value); },
    removeProperty(key) { properties.delete(key); },
    getPropertyValue(key) { return properties.get(key) ?? ""; },
  };
  const body = { dataset:{}, style, setAttribute(key, value) { this[key] = value; }, removeAttribute(key) { delete this[key]; }, appendChild(node) { node.isConnected = true; nodes.add(node); } };
  const document = { body, head:body, createElement:() => ({ isConnected:false, setAttribute() {}, remove() { this.isConnected = false; nodes.delete(this); } }) };
  const source = readFileSync(new URL("../lib/client.tpl.js", import.meta.url), "utf8")
    .replace("__CATALOG__", JSON.stringify(browser.catalog ?? catalog))
    .replace("    exports.CATALOG = CATALOG;", "    Object.assign(exports, { readPref, writePref, readDocument, appearanceFor, settingsFor, writeSettings, writeFamilyArtwork, normalizeDocument, parseSkin, resolveSkin, filterCatalog, writeLibrarySettings, writeFavorites, toggleFavorite, writeRotation, orderRotationSelection, nextInPool, rotationProgram, createRotationClock, artworkTokensFor, artworkDecorFor, artworkVariantsFor, ThemeSection, ThemeRotationPicker, ThemeCollections });");
  const window = { matchMedia:() => ({ matches:false, addEventListener() {}, removeEventListener() {} }), localStorage:{ getItem:() => raw, setItem:(_, value) => { if (unavailable) throw Error("blocked"); raw = value; } }, __ModuleLoader__:{ load:({ factory }) => { api = factory((id) => id === "react" ? reactApi : ({ defineStore:(value) => value })); } } };
  Object.assign(window, browser.window);
  Object.assign(document, browser.document);
  vm.runInNewContext(source, {
    window, document, MutationObserver:browser.MutationObserver, Date:browser.Date ?? Date,
    setTimeout:browser.setTimeout ?? (() => 1), clearTimeout:browser.clearTimeout ?? (() => {}),
  });
  return { api, document, nodes, raw:() => raw };
}

test("legacy clarity migrates to its family and survives default selection", () => {
  const { api, raw } = load(JSON.stringify({ family:"naruto", mode:"system", style:"vivid", wallpaper:"full" }));
  assert.equal(api.readPref().wallpaper, "full");
  assert.equal(api.appearanceFor("gundam").wallpaper, "full");
  api.writePref(api.readPref());
  assert.equal(JSON.parse(raw()).version, 7);
  api.writePref(null);
  assert.equal(api.readPref(), null);
  assert.equal(api.appearanceFor("naruto").wallpaper, "full");
});

function desktopTheme(systemDark, mode = systemDark ? "light" : "dark") {
  const tasks = [];
  const mediaListeners = new Set();
  const observers = new Set();
  let nativeSource = "system";
  let source = "system";
  let pendingMutation = false;
  const media = {
    get matches() { return nativeSource === "system" ? systemDark : nativeSource === "dark"; },
    addEventListener:(_, fn) => mediaListeners.add(fn),
    removeEventListener:(_, fn) => mediaListeners.delete(fn),
  };
  const notifyMedia = () => tasks.push(() => {
    for (const listener of mediaListeners) listener();
  });
  const root = {
    getAttribute:() => source,
    setAttribute(name, value) {
      assert.equal(name, "data-ds-theme-source");
      source = value;
      if (pendingMutation) return;
      pendingMutation = true;
      tasks.push(() => {
        pendingMutation = false;
        for (const observer of observers) observer();
      });
    },
  };
  // Electron receives the DOM preference before notifying media-query listeners.
  observers.add(() => {
    const before = media.matches;
    nativeSource = source;
    if (before !== media.matches) notifyMedia();
  });
  class MutationObserver {
    constructor(callback) { this.callback = callback; }
    observe(target) { assert.equal(target, root); observers.add(this.callback); }
    disconnect() { observers.delete(this.callback); }
  }
  const harness = load(JSON.stringify({ family:"naruto", mode, style:"vivid" }), false, {}, {
    window:{ dshDesktop:{}, matchMedia:() => media },
    document:{ documentElement:root },
    MutationObserver,
  });
  const cleanups = [];
  const listeners = new Set();
  const sections = [];
  const skins = new Map(["light", "dark"].map(colorScheme => [colorScheme, { colorScheme }]));
  let snapshot = { preference:"system", active:{ colorScheme:media.matches ? "dark" : "light" }, revision:0 };
  const ctx = {
    theme:{
      register(skin) { skins.set(skin.id, skin); return () => skins.delete(skin.id); },
      getTheme:() => snapshot,
      setTheme(preference) {
        if (preference === snapshot.preference) return;
        const active = skins.get(preference === "system" ? (media.matches ? "dark" : "light") : preference);
        assert.ok(active, "The chosen theme must be registered");
        snapshot = { preference, active, revision:snapshot.revision + 1 };
        for (const listener of listeners) listener(snapshot);
        root.setAttribute("data-ds-theme-source", preference === "system" ? "system" : active.colorScheme);
      },
    },
    on:(_, fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    effect:fn => cleanups.push(fn()),
    locale:{ register:() => () => {}, getLocale:() => ({ active:"zh" }) },
    slots:{
      inject:(_, fn) => fn(),
      entriesOfSlot:() => [{ store:{} }],
      register(meta) { if (meta.name === "settings.section") sections.push(meta); },
    },
  };
  const flush = () => {
    let count = 0;
    while (tasks.length) {
      assert.ok(++count < 100, "Native appearance and theme selection must settle");
      tasks.shift()();
    }
  };
  harness.api.apply(ctx);
  flush();
  return {
    ...harness,
    actions:sections[0].inject({ sync() {} }),
    snapshot:() => snapshot,
    source:() => source,
    flush,
    changeSystem(dark) {
      const before = media.matches;
      systemDark = dark;
      if (media.matches !== before) notifyMedia();
      flush();
    },
    presentAgain() {
      root.setAttribute("data-ds-theme-source", snapshot.active.colorScheme);
      flush();
    },
    dispose() {
      for (const cleanup of cleanups.reverse()) cleanup?.();
      flush();
      assert.equal(observers.size, 1, "Only Electron's own observer remains");
      assert.equal(mediaListeners.size, 0);
    },
  };
}

for (const systemDark of [true, false]) {
  test("Desktop system mode follows the OS after an opposite manual appearance: " + (systemDark ? "dark OS" : "light OS"), () => {
    const desktop = desktopTheme(systemDark);
    const expected = systemDark ? "dark" : "light";
    assert.notEqual(desktop.snapshot().active.colorScheme, expected);
    desktop.actions.saveDraft({ family:"naruto", mode:"system", ...desktop.api.appearanceFor("naruto") });
    desktop.flush();
    assert.equal(desktop.source(), "system");
    assert.equal(desktop.snapshot().active.colorScheme, expected);
    desktop.actions.applyDraft({ family:"naruto", mode:"system", ...desktop.api.appearanceFor("naruto") });
    desktop.flush();
    desktop.presentAgain();
    assert.equal(desktop.source(), "system");
    assert.equal(desktop.api.readPref().mode, "system");
    desktop.changeSystem(!systemDark);
    assert.equal(desktop.snapshot().active.colorScheme, systemDark ? "light" : "dark");
    assert.equal(desktop.api.readPref().mode, "system");
    desktop.actions.saveDraft({ family:"naruto", mode:desktop.snapshot().active.colorScheme, ...desktop.api.appearanceFor("naruto") });
    desktop.flush();
    const pinned = desktop.snapshot().active.colorScheme;
    assert.equal(desktop.source(), pinned);
    desktop.changeSystem(systemDark);
    assert.equal(desktop.snapshot().active.colorScheme, pinned);
    desktop.dispose();
  });
}

test("Desktop default-theme preview follows the OS and cancellation restores the selected family", () => {
  const desktop = desktopTheme(true, "dark");
  desktop.actions.previewTheme({ family:null, mode:"light" });
  desktop.flush();
  assert.equal(desktop.snapshot().active.colorScheme, "light");
  desktop.actions.previewTheme({ family:null, mode:"system" });
  desktop.flush();
  assert.equal(desktop.snapshot().preference, "dsh-preview-dark");
  assert.equal(desktop.source(), "system");
  desktop.actions.cancelPreview();
  desktop.flush();
  assert.equal(desktop.snapshot().preference, "naruto-dark-vivid");
  assert.equal(desktop.source(), "dark");
  assert.equal(desktop.api.readPref().mode, "dark");
  desktop.dispose();
});

test("fine controls follow every theme while mode, clarity, and artwork remain family preferences", () => {
  const { api, raw } = load(null, false, {}, { catalog:variantCatalog() });
  api.writePref({ family:"naruto", mode:"dark", style:"vivid", props:false, pal:false, headerRange:"title", wallpaper:"full", artwork:{ variant:"rain", enabled:false } });
  api.writePref({ family:"gundam", mode:"light", style:"vivid", character:false, wallpaper:"soft" });
  for (const family of ["naruto", "gundam", "slate", null]) {
    const appearance = api.appearanceFor(family);
    assert.equal(appearance.props, false);
    assert.equal(appearance.pal, false);
    assert.equal(appearance.character, false);
    assert.equal(appearance.headerRange, "title");
  }
  assert.equal(api.settingsFor("naruto").mode, "dark");
  assert.equal(api.settingsFor("gundam").mode, "light");
  assert.equal(api.appearanceFor("naruto").wallpaper, "full");
  assert.equal(api.appearanceFor("gundam").wallpaper, "soft");
  assert.equal(api.settingsFor("naruto").artwork.variant, "rain");
  assert.equal(api.settingsFor("gundam").artwork.variant, "original");
  api.writePref({ family:"naruto", mode:"dark", style:"vivid" });
  const restored = load(raw(), false, {}, { catalog:variantCatalog() }).api;
  assert.equal(restored.readPref().props, false);
  assert.equal(restored.readPref().headerRange, "title");
  assert.equal(restored.readPref().artwork.variant, "rain");
  for (const settings of Object.values(restored.readDocument().families)) {
    for (const key of ["header", "character", "props", "pal", "headerRange"]) assert.equal(Object.hasOwn(settings, key), false);
  }
});

test("legacy fine controls migrate from the selected family and remain stable after normalization and reload", () => {
  for (const version of [2, 3, 4, 5]) {
    const saved = { version, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ mode:"dark", header:false, character:false, props:false, pal:false }, gundam:{ header:true, character:true, props:true, pal:true } } };
    const { api, raw } = load(JSON.stringify(saved));
    const doc = api.readDocument();
    assert.equal(doc.version, 7);
    assert.deepEqual(JSON.parse(JSON.stringify(doc.appearance)), { header:false, character:false, props:false, pal:false, headerRange:"extend" });
    assert.deepEqual(JSON.parse(JSON.stringify(api.normalizeDocument(doc))), JSON.parse(JSON.stringify(doc)));
    assert.equal(JSON.parse(raw()).version, 7);
    const restored = load(raw()).api;
    restored.writePref({ family:"gundam", mode:"light", style:"vivid" });
    assert.equal(restored.readPref().character, false);
    assert.equal(restored.readPref().header, false);
  }
  const legacy = load(JSON.stringify({ family:"naruto", mode:"dark", style:"vivid", header:false, pal:false })).api;
  assert.equal(legacy.appearanceFor("gundam").header, false);
  assert.equal(legacy.appearanceFor(null).pal, false);
});

test("native-theme migration uses its own controls and explicit global controls override stale family fields", () => {
  const native = load(JSON.stringify({ version:5, selected:null, families:{ default:{ props:false, pal:false }, naruto:{ header:false } } })).api;
  assert.equal(native.appearanceFor("naruto").props, false);
  assert.equal(native.appearanceFor("naruto").pal, false);
  assert.equal(native.appearanceFor("naruto").header, true);
  const globals = load(JSON.stringify({ version:6, selected:{ family:"naruto", mode:"dark", style:"vivid" }, appearance:{ header:true, character:false, props:true, pal:false, headerRange:"title" }, families:{ naruto:{ header:false, character:true, props:false, pal:true } } })).api;
  assert.equal(globals.readPref().header, true);
  assert.equal(globals.readPref().character, false);
  assert.equal(globals.readPref().props, true);
  assert.equal(globals.readPref().pal, false);
  assert.equal(globals.readPref().headerRange, "title");
  const normalized = globals.normalizeDocument({ version:6, appearance:{ header:"false", character:null, headerRange:"broken" } });
  assert.equal(normalized.appearance.header, true);
  assert.equal(normalized.appearance.character, true);
  assert.equal(normalized.appearance.headerRange, "extend");
});

test("corrupt and obsolete fields normalize without admitting nonexistent skins", () => {
  for (const value of ["{", "null", "[]", "42"]) assert.equal(load(value).api.readPref(), null);
  const { api } = load(JSON.stringify({ family:"naruto", mode:"garbage", style:"minimal", wallpaper:"broken" }));
  assert.equal(api.readPref().mode, "system");
  assert.equal(api.readPref().style, "vivid");
  assert.equal(api.readPref().wallpaper, "full");
  assert.equal(api.parseSkin("naruto-light"), null);
  assert.equal(api.resolveSkin(api.readPref()), "naruto-light-vivid");
  const normalized = api.normalizeDocument({ version:2, selected:{family:"removed"}, families:{ naruto:{ props:false, header:"false" } } });
  assert.equal(Object.hasOwn(normalized.families.naruto, "props"), false);
  assert.equal(normalized.appearance.props, true);
});

test("v2 migration preserves the active mode and defaults other families to system", () => {
  const { api } = load(JSON.stringify({ version:2, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ wallpaper:"soft" }, gundam:{ props:false } } }));
  assert.equal(api.settingsFor("naruto").mode, "dark");
  assert.equal(api.settingsFor("gundam").mode, "system");
  assert.equal(api.settingsFor("naruto").wallpaper, "soft");
});

test("family and global settings auto-save across reload without changing the current theme", () => {
  const { api, raw } = load(null);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid" });
  api.writeSettings({ family:"gundam", mode:"light", wallpaper:"soft", props:false });
  const reloaded = load(raw()).api;
  assert.equal(reloaded.readPref().family, "naruto");
  assert.equal(reloaded.readPref().mode, "dark");
  assert.equal(reloaded.settingsFor("gundam").mode, "light");
  assert.equal(reloaded.settingsFor("gundam").wallpaper, "soft");
  assert.equal(reloaded.settingsFor("gundam").props, false);
  assert.equal(reloaded.readPref().props, false);
  reloaded.writeSettings({ family:"naruto", mode:"light", wallpaper:"soft" });
  assert.equal(reloaded.readPref().family, "naruto");
  assert.equal(reloaded.readPref().mode, "light");
  assert.equal(reloaded.readPref().props, false);
});

test("blocked localStorage retains preferences for the session", () => {
  const { api } = load(null, true);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid", props:false });
  assert.equal(api.readPref().props, false);
});

function variantCatalog() {
  const entries = structuredClone(catalog);
  entries[0].artworks = [{
    id:"rain", names:{ zh:"雨景", en:"Rain" },
    modes:{ light:{ "--dsw-pack-wallpaper":"url(rain-light.webp)", "--dsw-pack-scene-props":"url(rain-props-light.webp)", "--dsw-pack-paper":"red" }, dark:{ "--dsw-pack-wallpaper":"url(rain-dark.webp)", "--dsw-pack-wallpaper-ratio":"0.75", "--dsw-pack-scene-props":"url(rain-props-dark.webp)", "--dsw-pack-panel":"url(rain-banner-dark.webp)", "--dsw-pack-folder":"url(rain-folder-dark.webp)", "--dsw-pack-folder-open":"url(rain-folder-open-dark.webp)" } },
    decor:{ wallpaperPosition:"right bottom", wallpaperSize:"360px", pals:["rain-pal.webp"], phrases:{ zh:[["渡船靠岸啦。"]], en:[["Our ferry is home."]] } },
  }];
  return entries;
}

function mergedCatalog() {
  const entries = variantCatalog();
  entries[0].originalArtworkNames = { zh:"结伴赶路", en:"On the Road" };
  entries[0].legacyFamilies = [{ id:"old-rain", artwork:"rain" }];
  entries[2].legacyFamilies = [{ id:"old-rain-minimal" }];
  return entries;
}

test("merged families preserve the active scene, decoration choices, favorites and rotation order", () => {
  const saved = { version:5, selected:{ family:"old-rain", mode:"dark", style:"vivid" }, favorites:["old-rain", "gundam", "naruto"], rotation:{ enabled:true, pool:["old-rain", "naruto", "gundam"], interval:30, order:"random" }, families:{ "old-rain":{ props:false, header:false }, naruto:{ artwork:{ enabled:false, interval:15, order:"random", pool:["rain", "original"] } } } };
  const { api } = load(JSON.stringify(saved), false, {}, { catalog:mergedCatalog() });
  const doc = api.readDocument();
  assert.equal(api.readPref().family, "naruto");
  assert.equal(api.readPref().mode, "dark");
  assert.equal(api.readPref().props, false);
  assert.equal(api.readPref().header, false);
  assert.equal(api.readPref().artwork.variant, "rain");
  assert.equal(api.readPref().artwork.enabled, false);
  assert.equal(api.readPref().artwork.interval, 15);
  assert.deepEqual(Array.from(api.readPref().artwork.pool), ["rain", "original"]);
  assert.deepEqual(Array.from(doc.favorites), ["naruto", "gundam"]);
  assert.deepEqual(Array.from(doc.rotation.pool), ["naruto", "gundam"]);
  assert.equal(doc.rotation.order, "random");
  assert.equal(doc.rotation.interval, 30);
  assert.equal(Object.hasOwn(doc.families, "old-rain"), false);
  assert.deepEqual(JSON.parse(JSON.stringify(api.normalizeDocument(doc))), JSON.parse(JSON.stringify(doc)));
  assert.equal(api.artworkVariantsFor("naruto")[0].names.zh, "结伴赶路");
  assert.deepEqual(Array.from(api.filterCatalog("雨景", "all", false), (entry) => entry.id), ["naruto"]);
  assert.equal(api.filterCatalog("old-rain", "all", false).some((entry) => entry.id === "naruto"), true);
});

test("a former single-picture family starts the merged scene defaults and persists the migration", () => {
  const saved = { version:5, selected:{ family:"old-rain", mode:"system", style:"vivid" }, families:{ "old-rain":{ pal:false, artwork:{ enabled:false, interval:15, pool:["original"], variant:"original" } } } };
  const { api, raw } = load(JSON.stringify(saved), false, {}, { catalog:mergedCatalog() });
  assert.equal(api.readPref().artwork.variant, "rain");
  assert.equal(api.readPref().artwork.enabled, true);
  assert.equal(api.readPref().artwork.interval, 5);
  assert.equal(api.readPref().pal, false);
  assert.deepEqual(Array.from(api.readPref().artwork.pool), ["original", "rain"]);
  assert.equal(JSON.parse(raw()).selected.family, "naruto");
  assert.equal(Object.hasOwn(JSON.parse(raw()).families, "old-rain"), false);
  api.writePref(api.readPref());
  const restored = load(raw(), false, {}, { catalog:mergedCatalog() }).api;
  assert.equal(restored.readPref().artwork.variant, "rain");
  assert.equal(Object.hasOwn(restored.readDocument().families, "old-rain"), false);
});

test("legacy flat preferences and minimal families retain their appearance after a merge", () => {
  for (const saved of [
    { family:"old-rain", mode:"dark", style:"vivid", props:false, wallpaper:"soft" },
    { version:2, selected:{ family:"old-rain", mode:"dark", style:"vivid" }, families:{ "old-rain":{ props:false, wallpaper:"soft" } } },
  ]) {
    const { api } = load(JSON.stringify(saved), false, {}, { catalog:mergedCatalog() });
    assert.equal(api.readPref().family, "naruto");
    assert.equal(api.readPref().mode, "dark");
    assert.equal(api.readPref().props, false);
    assert.equal(api.readPref().wallpaper, "soft");
    assert.equal(api.readPref().artwork.variant, "rain");
  }
  const { api } = load(JSON.stringify({ version:5, selected:{ family:"old-rain-minimal", mode:"light", style:"minimal" }, favorites:["old-rain-minimal", "slate"] }), false, {}, { catalog:mergedCatalog() });
  assert.equal(api.readPref().family, "slate");
  assert.equal(api.resolveSkin(api.readPref()), "slate-light");
  assert.equal(api.readPref().artwork.enabled, false);
  assert.deepEqual(Array.from(api.readDocument().favorites), ["slate"]);
  const mixed = load(JSON.stringify({ version:2, selected:{ family:"gundam", mode:"dark", style:"vivid" }, favorites:["old-rain"], families:{ gundam:{ props:false } } }), false, {}, { catalog:mergedCatalog() }).api;
  assert.equal(mixed.readPref().mode, "dark");
  assert.equal(mixed.readPref().props, false);
});

test("inactive merged entries cannot replace current settings and a collapsed theme pool never crosses themes", () => {
  const saved = { version:5, selected:{ family:"naruto", mode:"light", style:"vivid" }, families:{ naruto:{ props:true, artwork:{ variant:"original", enabled:false } }, "old-rain":{ props:false } }, rotation:{ enabled:true, pool:["old-rain", "naruto"], interval:60 } };
  const { api } = load(JSON.stringify(saved), false, {}, { catalog:mergedCatalog() });
  assert.equal(api.readPref().props, true);
  assert.equal(api.readPref().artwork.variant, "original");
  assert.equal(api.readPref().artwork.enabled, false);
  // 名单归并后只剩一款：开关意图保留，但节目单不跨主题（插图也关了，整体停播）。
  assert.equal(api.readDocument().rotation.enabled, true);
  assert.equal(api.rotationProgram(api.readDocument()), null);
  assert.equal(api.readDocument().rotation.interval, 60);
  assert.deepEqual(Array.from(api.readDocument().rotation.pool), ["naruto"]);
  for (const malformed of [{ favorites:"old-rain" }, { rotation:{ pool:123 } }]) assert.doesNotThrow(() => api.normalizeDocument(malformed));
});

function fakeClock() {
  let time = 0;
  let serial = 0;
  const tasks = new Map();
  return {
    now:() => time,
    schedule:(fn, delay) => { const id = ++serial; tasks.set(id, { fn, due:time + delay }); return id; },
    cancel:(id) => tasks.delete(id),
    count:() => tasks.size,
    advance(milliseconds) {
      const until = time + milliseconds;
      let count = 0;
      while (true) {
        const next = [...tasks].filter(([, value]) => value.due <= until).sort((a, b) => a[1].due - b[1].due)[0];
        if (!next) break;
        assert.ok(++count < 500, "Timers must settle without a busy loop");
        tasks.delete(next[0]);
        time = next[1].due;
        next[1].fn();
      }
      time = until;
    },
  };
}

test("v3 migration defaults multi-artwork rotation on and scopes artwork to its own family", () => {
  const { api, raw } = load(JSON.stringify({ version:3, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ mode:"dark", props:false } } }), false, {}, { catalog:variantCatalog() });
  assert.equal(api.readPref().mode, "dark");
  assert.equal(api.readPref().props, false);
  assert.equal(api.readDocument().rotation.enabled, false);
  assert.equal(api.readPref().artwork.enabled, true);
  assert.equal(api.readPref().artwork.interval, 5);
  api.writeRotation({ enabled:true, pool:["naruto", "naruto", "missing", "gundam"], interval:1, order:"random" });
  assert.deepEqual(Array.from(api.readDocument().rotation.pool), ["naruto", "gundam"]);
  api.writeSettings({ ...api.readPref(), artwork:{ enabled:true, variant:"rain", pool:["original", "rain", "gundam"], interval:5 } });
  const restored = load(raw(), false, {}, { catalog:variantCatalog() }).api;
  assert.equal(restored.readPref().artwork.variant, "rain");
  assert.deepEqual(Array.from(restored.readPref().artwork.pool), ["original", "rain"]);
  assert.equal(restored.readPref().artwork.enabled, true);
  assert.equal(restored.artworkTokensFor("naruto", "light", restored.readPref())["--dsw-pack-paper"], undefined);
  restored.writeSettings({ family:"gundam", artwork:{ variant:"rain", enabled:true, pool:["original", "rain"] } });
  assert.equal(restored.settingsFor("gundam").artwork.variant, "original");
  // 单图主题保留开关意图；只有一个场景时节目单不会真的轮换。
  assert.equal(restored.settingsFor("gundam").artwork.enabled, true);
  assert.equal(restored.settingsFor("naruto").artwork.variant, "rain");
  restored.writeRotation({ enabled:true, pool:["naruto"], interval:0 });
  // 单款名单保留开关意图，间隔回退默认；跨主题由节目单按名单数把关。
  assert.equal(restored.readDocument().rotation.enabled, true);
  assert.equal(restored.readDocument().rotation.interval, 30);
  // 加密后的低档间隔：2、3 分钟等细粒度值原样保留。
  restored.writeRotation({ enabled:true, pool:["naruto", "gundam"], interval:3 });
  assert.equal(restored.readDocument().rotation.interval, 3);
});

test("new multi-artwork themes rotate all pictures by default and retain manual preferences", () => {
  const { api, raw } = load(null, false, {}, { catalog:variantCatalog() });
  api.writePref({ family:"naruto", mode:"dark", style:"vivid" });
  assert.equal(api.readPref().artwork.enabled, true);
  assert.equal(api.readPref().artwork.interval, 5);
  assert.equal(api.readPref().artwork.order, "sequence");
  assert.deepEqual(Array.from(api.readPref().artwork.pool), ["original", "rain"]);
  assert.equal(api.readDocument().rotation.enabled, false);
  assert.equal(api.settingsFor("gundam").artwork.enabled, false);
  api.writeSettings({ ...api.readPref(), artwork:{ enabled:false, interval:30, order:"random", pool:["rain", "original"], variant:"rain" } });
  api.writePref({ family:"gundam", mode:"light", style:"vivid" });
  const restored = load(raw(), false, {}, { catalog:variantCatalog() }).api;
  restored.writePref({ family:"naruto", mode:"dark", style:"vivid" });
  assert.equal(restored.readPref().artwork.enabled, false);
  assert.equal(restored.readPref().artwork.interval, 30);
  assert.equal(restored.readPref().artwork.order, "random");
  assert.equal(restored.readPref().artwork.variant, "rain");
  assert.deepEqual(Array.from(restored.readPref().artwork.pool), ["rain", "original"]);
});

test("saved artwork choices keep their switch, interval and pool when defaults change", () => {
  const saved = { version:5, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ artwork:{ enabled:false, interval:15, pool:["original", "rain"], variant:"rain" } } } };
  const { api } = load(JSON.stringify(saved), false, {}, { catalog:variantCatalog() });
  assert.equal(api.readPref().artwork.enabled, false);
  assert.equal(api.readPref().artwork.interval, 15);
  assert.equal(api.readPref().artwork.variant, "rain");
  assert.deepEqual(Array.from(api.readPref().artwork.pool), ["original", "rain"]);
});

test("expanding a saved single-picture theme selects every scene and starts the five-minute defaults", () => {
  const original = load(null);
  original.api.writePref({ family:"naruto", mode:"dark", style:"vivid", props:false });
  assert.deepEqual(Array.from(original.api.readPref().artwork.known), ["original"]);
  assert.equal(original.api.readPref().artwork.enabled, false);
  const expanded = load(original.raw(), false, {}, { catalog:variantCatalog() });
  assert.deepEqual(Array.from(expanded.api.readPref().artwork.pool), ["original", "rain"]);
  assert.deepEqual(Array.from(expanded.api.readPref().artwork.known), ["original", "rain"]);
  assert.equal(expanded.api.readPref().artwork.enabled, true);
  assert.equal(expanded.api.readPref().artwork.interval, 5);
  assert.equal(expanded.api.readPref().mode, "dark");
  assert.equal(expanded.api.readPref().props, false);
  assert.deepEqual(JSON.parse(expanded.raw()).families.naruto.artwork.known, ["original", "rain"]);
});

test("legacy original-only defaults are repaired once without resetting the current scene", () => {
  const saved = { version:5, selected:{ family:"naruto", mode:"system", style:"vivid" }, families:{ naruto:{ artwork:{ enabled:false, interval:5, order:"sequence", pool:["original"], variant:"rain" } } } };
  const migrated = load(JSON.stringify(saved), false, {}, { catalog:variantCatalog() });
  assert.deepEqual(Array.from(migrated.api.readPref().artwork.pool), ["original", "rain"]);
  assert.equal(migrated.api.readPref().artwork.enabled, true);
  assert.equal(migrated.api.readPref().artwork.variant, "rain");
  migrated.api.writeSettings({ ...migrated.api.readPref(), artwork:{ ...migrated.api.readPref().artwork, pool:["original"], enabled:false, interval:15 } });
  const restored = load(migrated.raw(), false, {}, { catalog:variantCatalog() });
  assert.deepEqual(Array.from(restored.api.readPref().artwork.pool), ["original"]);
  assert.equal(restored.api.readPref().artwork.enabled, false);
  assert.equal(restored.api.readPref().artwork.interval, 15);
});

test("new pictures join the pool while previous manual exclusions, order and settings survive", () => {
  const saved = { version:5, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ artwork:{ enabled:false, interval:30, order:"random", pool:["rain"], known:["original", "rain"], variant:"rain" } } } };
  const entries = variantCatalog();
  entries[0].artworks.push({ id:"sun", names:{ zh:"晴景", en:"Sun" }, modes:{ light:{ "--dsw-pack-wallpaper":"url(sun.webp)" } } });
  const expanded = load(JSON.stringify(saved), false, {}, { catalog:entries });
  assert.deepEqual(Array.from(expanded.api.readPref().artwork.pool), ["rain", "sun"]);
  assert.deepEqual(Array.from(expanded.api.readPref().artwork.known), ["original", "rain", "sun"]);
  assert.equal(expanded.api.readPref().artwork.enabled, false);
  assert.equal(expanded.api.readPref().artwork.interval, 30);
  assert.equal(expanded.api.readPref().artwork.order, "random");
  const restored = load(expanded.raw(), false, {}, { catalog:entries });
  assert.deepEqual(Array.from(restored.api.readPref().artwork.pool), ["rain", "sun"]);
  const empty = structuredClone(saved);
  empty.families.naruto.artwork.pool = [];
  assert.deepEqual(Array.from(load(JSON.stringify(empty), false, {}, { catalog:variantCatalog() }).api.readPref().artwork.pool), []);
});

test("rotation follows the pool order and random rotation never repeats the current item", () => {
  const { api } = load(null);
  assert.equal(api.nextInPool([], "a", "sequence"), null);
  assert.equal(api.nextInPool(["b", "a", "c"], "a", "sequence"), "c");
  assert.equal(api.nextInPool(["b", "a", "c"], "c", "sequence"), "b");
  assert.equal(api.nextInPool(["b", "a"], "outside", "sequence"), "b");
  for (const random of [0, 0.5, 0.999]) assert.notEqual(api.nextInPool(["b", "a", "c"], "a", "random", () => random), "a");
});

test("fixed rotation splits the theme window across scenes and never starves artwork", () => {
  const { api } = load(null);
  const time = fakeClock();
  // 插图间隔（30）大于主题窗口（5）：旧双钟结构下插图永远轮不到。
  const doc = { selected:{ family:"naruto" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:5, order:"sequence", mode:"fixed" }, families:{ naruto:{ artwork:{ enabled:true, pool:["original", "rain"], interval:30, order:"sequence" } } } };
  const events = [];
  let blocked = false;
  const clock = api.createRotationClock({ read:() => doc, onAdvance:(kind) => { events.push(kind); if (kind === "theme") doc.selected.family = doc.selected.family === "naruto" ? "gundam" : "naruto"; }, blocked:() => blocked, now:time.now, schedule:time.schedule, cancel:time.cancel });
  // 窗口均分：两张场景各播 2.5 分钟，第 5 分钟跨主题。
  time.advance(150000);
  assert.deepEqual(events, ["artwork"]);
  time.advance(150000);
  assert.deepEqual(events, ["artwork", "theme"]);
  // gundam 没有额外场景：一个窗口后切回 naruto，继续均分播出。
  time.advance(300000);
  assert.deepEqual(events, ["artwork", "theme", "theme"]);
  time.advance(150000);
  assert.deepEqual(events, ["artwork", "theme", "theme", "artwork"]);
  blocked = true;
  time.advance(300000);
  assert.equal(events.length, 4);
  blocked = false;
  time.advance(5000);
  assert.equal(events.length, 5);
  clock.destroy();
  assert.equal(time.count(), 0);
});

test("on-schedule rotation lets quick themes finish early instead of filling the window", () => {
  const { api } = load(null);
  const time = fakeClock();
  // 两张场景各 1 分钟，窗口 30 分钟：播完一轮（2 分钟）就提前跨主题。
  const doc = { selected:{ family:"naruto" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:30, order:"sequence", mode:"fixed" }, families:{ naruto:{ artwork:{ enabled:true, pool:["original", "rain"], interval:1, order:"sequence" } } } };
  const events = [];
  const clock = api.createRotationClock({ read:() => doc, onAdvance:(kind) => { events.push(kind); if (kind === "theme") doc.selected.family = doc.selected.family === "naruto" ? "gundam" : "naruto"; }, blocked:() => false, now:time.now, schedule:time.schedule, cancel:time.cancel });
  time.advance(60000);
  assert.deepEqual(events, ["artwork"]);
  time.advance(60000);
  assert.deepEqual(events, ["artwork", "theme"]);
  // gundam 只有原配图：播完自己的插图间隔（默认 5 分钟）即切回，不待满窗口。
  time.advance(300000);
  assert.deepEqual(events, ["artwork", "theme", "theme"]);
  clock.destroy();
  assert.equal(time.count(), 0);
});

test("full-cycle rotation plays every checked scene before switching themes", () => {
  const { api } = load(null);
  const time = fakeClock();
  const doc = { selected:{ family:"naruto" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:5, order:"sequence", mode:"cycle" }, families:{ naruto:{ artwork:{ enabled:true, pool:["original", "rain"], interval:5, order:"sequence" } } } };
  const events = [];
  const clock = api.createRotationClock({ read:() => doc, onAdvance:(kind) => { events.push(kind); if (kind === "theme") doc.selected.family = "gundam"; }, blocked:() => false, now:time.now, schedule:time.schedule, cancel:time.cancel });
  // 播完再换：每图 5 分钟，两张场景播完（第二次触发）才跨主题。
  time.advance(300000);
  assert.deepEqual(events, ["artwork"]);
  time.advance(300000);
  assert.deepEqual(events, ["artwork", "theme"]);
  clock.destroy();
  assert.equal(time.count(), 0);
});

test("artwork-only rotation keeps the per-family interval without theme boundaries", () => {
  const { api } = load(null);
  const time = fakeClock();
  const doc = { selected:{ family:"naruto" }, rotation:{ enabled:false, pool:[], interval:30, order:"sequence", mode:"cycle" }, families:{ naruto:{ artwork:{ enabled:true, pool:["original", "rain"], interval:1, order:"sequence" } } } };
  const events = [];
  const clock = api.createRotationClock({ read:() => doc, onAdvance:(kind) => events.push(kind), blocked:() => false, now:time.now, schedule:time.schedule, cancel:time.cancel });
  time.advance(240000);
  assert.deepEqual(events, ["artwork", "artwork", "artwork", "artwork"]);
  clock.destroy();
  assert.equal(time.count(), 0);
});

test("v6 rotation configs migrate to on-schedule mode while new configs default to full cycle", () => {
  const legacy = load(JSON.stringify({ version:6, selected:{ family:"naruto", mode:"dark", style:"vivid" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:30 } })).api;
  assert.equal(legacy.readDocument().version, 7);
  assert.equal(legacy.readDocument().rotation.mode, "fixed");
  legacy.writeRotation({ ...legacy.readDocument().rotation, mode:"cycle" });
  assert.equal(legacy.readDocument().rotation.mode, "cycle");
  assert.equal(load(null).api.readDocument().rotation.mode, "cycle");
  // 插图轮换配置不携带播法字段。
  assert.equal("mode" in load(JSON.stringify({ version:7, selected:{ family:"naruto", mode:"dark", style:"vivid" } }), false, {}, { catalog:variantCatalog() }).api.readPref().artwork, false);
});

function rotationRuntime(saved) {
  const time = fakeClock();
  const events = new Map();
  let streaming = false;
  const harness = load(JSON.stringify(saved), false, {}, {
    catalog:variantCatalog(), Date:class extends Date { static now() { return time.now(); } },
    setTimeout:time.schedule, clearTimeout:time.cancel,
    document:{ hidden:false, addEventListener:(name, fn) => events.set(name, fn), removeEventListener:(name) => events.delete(name), querySelector:() => streaming ? {} : null },
  });
  const listeners = new Set();
  const cleanups = [];
  let section;
  let snapshot = { preference:"system", revision:0 };
  const ctx = {
    theme:{ register:() => () => {}, getTheme:() => snapshot, setTheme(preference) {
      if (preference === snapshot.preference) return;
      snapshot = { preference, revision:snapshot.revision + 1 };
      for (const listener of listeners) listener(snapshot);
    } },
    on:(_, fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    effect:(fn) => cleanups.push(fn()), locale:{ register:() => () => {}, getLocale:() => ({ active:"zh" }) },
    slots:{ inject:(_, fn) => fn(), entriesOfSlot:() => [{ store:{} }], register:(meta) => { if (meta.name === "settings.section") section = meta; } },
  };
  harness.api.apply(ctx);
  time.advance(0);
  return { ...harness, time, events, actions:section.inject({ sync() {} }), snapshot:() => snapshot, streaming:(value) => { streaming = value; }, dispose:() => { for (const fn of cleanups.reverse()) fn?.(); } };
}

test("preview cancellation restores unsaved controls and retains global changes that were automatically saved", () => {
  const runtime = rotationRuntime({ version:6, selected:{ family:"naruto", mode:"dark", style:"vivid" }, appearance:{ props:false, character:false, headerRange:"title" } });
  const range = () => runtime.document.body["data-dsh-themes-header-range"];
  try {
    assert.equal(range(), "title");
    const saved = runtime.raw();
    runtime.actions.previewTheme({ family:"gundam", mode:"light" });
    assert.equal(range(), "title");
    assert.equal(runtime.api.readPref().family, "naruto");
    assert.equal(runtime.raw(), saved);
    runtime.actions.previewTheme({ family:"gundam", mode:"light", props:true, headerRange:"extend" });
    assert.equal(range(), undefined);
    assert.equal(runtime.raw(), saved);
    runtime.actions.cancelPreview();
    assert.equal(range(), "title");
    assert.equal(runtime.api.readPref().props, false);
    runtime.actions.saveDraft({ family:"gundam", mode:"light", character:true, headerRange:"extend" });
    const restored = runtime.actions.cancelPreview();
    assert.equal(restored.family, "naruto");
    assert.equal(restored.character, true);
    assert.equal(restored.props, false);
    assert.equal(restored.headerRange, "extend");
    assert.equal(range(), undefined);
    const reloaded = load(runtime.raw(), false, {}, { catalog:variantCatalog() }).api;
    assert.equal(reloaded.readPref().character, true);
    assert.equal(reloaded.settingsFor("gundam").headerRange, "extend");
    assert.equal(reloaded.settingsFor("slate").props, false);
  } finally {
    runtime.dispose();
  }
});

test("title-only artwork tracks header visibility, theme style, native mode, and teardown", () => {
  const runtime = rotationRuntime({ version:6, selected:{ family:"naruto", mode:"dark", style:"vivid" }, appearance:{ headerRange:"title" } });
  const range = () => runtime.document.body["data-dsh-themes-header-range"];
  try {
    assert.equal(range(), "title");
    runtime.actions.applyDraft({ family:"gundam", mode:"light" });
    assert.equal(range(), "title");
    runtime.actions.saveDraft({ family:"gundam", mode:"light", header:false });
    assert.equal(range(), undefined);
    assert.equal(runtime.api.readPref().headerRange, "title");
    runtime.actions.saveDraft({ family:"gundam", mode:"light", header:true });
    assert.equal(range(), "title");
    runtime.actions.applyDraft({ family:"slate", mode:"dark" });
    assert.equal(range(), undefined);
    assert.equal(runtime.api.readPref().headerRange, "title");
    runtime.actions.applyDraft({ family:null, mode:"light" });
    assert.equal(range(), undefined);
    assert.equal(runtime.api.appearanceFor(null).headerRange, "title");
    runtime.actions.applyDraft({ family:"naruto", mode:"dark" });
    assert.equal(range(), "title");
    runtime.actions.saveDraft({ family:"naruto", mode:"dark", headerRange:"extend" });
    assert.equal(range(), undefined);
    runtime.actions.saveDraft({ family:"naruto", mode:"dark", headerRange:"title" });
    assert.equal(range(), "title");
  } finally {
    runtime.dispose();
  }
  assert.equal(range(), undefined);
});

test("an active multi-artwork theme starts the default five-minute timer without stored family settings", () => {
  const runtime = rotationRuntime({ version:5, selected:{ family:"naruto", mode:"dark", style:"vivid" } });
  const initial = runtime.snapshot();
  assert.equal(runtime.api.readPref().artwork.enabled, true);
  assert.equal(runtime.api.readPref().artwork.interval, 5);
  runtime.time.advance(299999);
  assert.equal(runtime.api.readPref().artwork.variant, "original");
  runtime.time.advance(1);
  assert.equal(runtime.api.readPref().artwork.variant, "rain");
  assert.equal(runtime.snapshot(), initial);
  runtime.time.advance(300000);
  assert.equal(runtime.api.readPref().artwork.variant, "original");
  runtime.dispose();
  runtime.time.advance(0);
  assert.equal(runtime.time.count(), 0);
});

test("runtime rotates themes with the current mode and global controls, keeps family artwork, and pauses during editing", () => {
  const runtime = rotationRuntime({ version:4, selected:{ family:"naruto", mode:"system", style:"vivid" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:1 }, families:{ naruto:{ mode:"system", props:false, artwork:{ variant:"rain" } }, gundam:{ mode:"dark", props:true } } });
  runtime.actions.setEditing(true);
  runtime.time.advance(120000);
  assert.equal(runtime.api.readPref().family, "naruto");
  runtime.actions.setEditing(false);
  runtime.time.advance(59999);
  assert.equal(runtime.api.readPref().family, "naruto");
  runtime.time.advance(1);
  assert.equal(runtime.snapshot().preference, "gundam-light-vivid");
  assert.equal(runtime.api.readPref().mode, "system");
  assert.equal(runtime.api.readPref().props, false);
  runtime.actions.nextTheme();
  assert.equal(runtime.api.readPref().family, "naruto");
  assert.equal(runtime.api.readPref().artwork.variant, "rain");
  assert.equal(runtime.api.readPref().props, false);
  runtime.actions.applyDraft({ family:null, mode:"dark" });
  runtime.time.advance(120000);
  assert.equal(runtime.api.readPref(), null);
  runtime.dispose();
  assert.equal(runtime.time.count(), 0);
  assert.equal(runtime.events.size, 0);
});

test("rotation arrival starts each theme at the next scene instead of repeating the last one", () => {
  const runtime = rotationRuntime({ version:7, selected:{ family:"naruto", mode:"dark", style:"vivid" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:5, mode:"fixed" }, families:{ naruto:{ mode:"dark", artwork:{ enabled:true, pool:["original", "rain"], interval:30, variant:"rain" } }, gundam:{ mode:"dark" } } });
  try {
    // naruto 窗口 5 分钟均分给两张场景：2.5 分钟换图，5 分钟跨主题。
    runtime.time.advance(150000);
    assert.equal(runtime.api.readPref().family, "naruto");
    assert.equal(runtime.api.readPref().artwork.variant, "original");
    runtime.time.advance(150000);
    assert.equal(runtime.api.readPref().family, "gundam");
    assert.equal(runtime.api.readPref().artwork.variant, "original");
    // gundam 只有原配图，一个窗口后切回 naruto，并从上次停播的雨景接着播。
    runtime.time.advance(300000);
    assert.equal(runtime.api.readPref().family, "naruto");
    assert.equal(runtime.api.readPref().artwork.variant, "rain");
    // 回到 naruto 后继续按窗口均分播出。
    runtime.time.advance(150000);
    assert.equal(runtime.api.readPref().family, "naruto");
    assert.equal(runtime.api.readPref().artwork.variant, "original");
    runtime.time.advance(150000);
    assert.equal(runtime.api.readPref().family, "gundam");
  } finally {
    runtime.dispose();
    assert.equal(runtime.time.count(), 0);
  }
});

test("pausing and resuming keeps the round progress instead of restarting it", () => {
  const runtime = rotationRuntime({ version:7, selected:{ family:"naruto", mode:"dark", style:"vivid" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:1, mode:"cycle" }, families:{ naruto:{ mode:"dark", artwork:{ enabled:true, pool:["original", "rain"], interval:1, variant:"original" } }, gundam:{ mode:"dark" } } });
  try {
    // 播完再换：naruto 两张场景各 1 分钟，第二张播完（2 分钟）才跨主题。
    runtime.time.advance(60000);
    assert.equal(runtime.api.readPref().artwork.variant, "rain");
    assert.equal(runtime.api.readPref().family, "naruto");
    // 隐藏再显示：当前场景重新计一拍，但本轮进度（还剩一张）必须保留。
    runtime.document.hidden = true;
    runtime.events.get("visibilitychange")();
    runtime.time.advance(10000);
    runtime.document.hidden = false;
    runtime.events.get("visibilitychange")();
    runtime.time.advance(59999);
    assert.equal(runtime.api.readPref().family, "naruto");
    runtime.time.advance(1);
    assert.equal(runtime.api.readPref().family, "gundam");
  } finally {
    runtime.dispose();
    assert.equal(runtime.time.count(), 0);
  }
});

test("runtime switches artwork without changing skin, cleans overrides, and respects streaming, input, visibility, and preview", () => {
  const runtime = rotationRuntime({ version:4, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ mode:"dark", artwork:{ enabled:true, pool:["original", "rain"], interval:1 } } } });
  const initial = runtime.snapshot();
  runtime.streaming(true);
  runtime.time.advance(60000);
  assert.equal(runtime.api.readPref().artwork.variant, "original");
  runtime.streaming(false);
  runtime.events.get("input")();
  runtime.time.advance(10000);
  assert.equal(runtime.api.readPref().artwork.variant, "original");
  runtime.time.advance(5000);
  assert.equal(runtime.api.readPref().artwork.variant, "rain");
  assert.equal(runtime.snapshot(), initial);
  const override = [...runtime.nodes].find((node) => node.id === "dsh-theme-decoration-overrides");
  assert.match(override.textContent, /rain-dark.webp/);
  assert.match(override.textContent, /--dsw-pack-scene-props:url\(rain-props-dark.webp\)/);
  assert.match(override.textContent, /--dsw-pack-panel:url\(rain-banner-dark.webp\)/);
  assert.match(override.textContent, /--dsw-pack-folder-open:url\(rain-folder-open-dark.webp\)/);
  assert.equal(runtime.api.artworkDecorFor("naruto").pals[0], "rain-pal.webp");
  assert.equal(runtime.api.artworkDecorFor("naruto").phrases.zh[0][0], "渡船靠岸啦。");
  assert.doesNotMatch(override.textContent, /--dsw-pack-paper:/);
  assert.equal(runtime.document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), "360px");
  runtime.actions.previewTheme({ family:"gundam", mode:"light" });
  runtime.time.advance(60000);
  assert.equal(runtime.api.readPref().artwork.variant, "rain");
  runtime.actions.cancelPreview();
  runtime.document.hidden = true;
  runtime.events.get("visibilitychange")();
  runtime.time.advance(120000);
  assert.equal(runtime.api.readPref().artwork.variant, "rain");
  runtime.document.hidden = false;
  runtime.events.get("visibilitychange")();
  runtime.time.advance(60000);
  assert.equal(runtime.api.readPref().artwork.variant, "original");
  assert.equal(override.isConnected, false);
  assert.equal(runtime.document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), catalog[0].decor.wallpaperSize);
  runtime.dispose();
  runtime.time.advance(0);
  assert.equal(runtime.time.count(), 0);
});

test("minimal visibility defaults on, persists, and never changes the selected theme", () => {
  const { api, raw } = load(null);
  assert.equal(api.readDocument().library.showMinimal, true);
  assert.equal(api.normalizeDocument({ library:{ showMinimal:"false" } }).library.showMinimal, true);
  api.writePref({ family:"slate", mode:"dark", style:"minimal", props:false });
  api.writeLibrarySettings({ showMinimal:false });
  api.writeSettings({ family:"naruto", mode:"light", wallpaper:"soft" });
  const reloaded = load(raw()).api;
  assert.equal(reloaded.readDocument().library.showMinimal, false);
  assert.equal(reloaded.resolveSkin(reloaded.readPref()), "slate-dark");
  assert.equal(reloaded.appearanceFor("slate").props, false);
  const blocked = load(null, true).api;
  blocked.writeLibrarySettings({ showMinimal:false });
  assert.equal(blocked.readDocument().library.showMinimal, false);
});

test("search and category keep palette pairs together while minimal filtering only hides cards", () => {
  const { api } = load(null);
  const ids = (query, category, show) => Array.from(api.filterCatalog(query, category, show), (entry) => entry.id);
  assert.deepEqual(ids("", "all", true), ["naruto", "gundam", "slate"]);
  assert.deepEqual(ids(" 青灰 ", "anime", true), ["gundam", "slate"]);
  assert.deepEqual(ids("SLATE", "anime", false), ["gundam"]);
  assert.deepEqual(ids("", "game", false), []);
  assert.deepEqual(ids("unknown", "all", true), []);
});

function elementRenderer() {
  // 用轻量元素树驱动真实回调；浏览器检查负责布局、焦点和原生事件。
  const state = [];
  let cursor = 0;
  const reactApi = {
    Fragment:"fragment",
    createElement(type, props, ...children) {
      if (typeof type === "function") return type({ ...props, children });
      return { type, props:props ?? {}, children:children.flat(Infinity).filter((entry) => entry != null) };
    },
    useState(initial) {
      const index = cursor++;
      if (!(index in state)) state[index] = typeof initial === "function" ? initial() : initial;
      return [state[index], (value) => { state[index] = typeof value === "function" ? value(state[index]) : value; }];
    },
    useId:() => `id-${cursor++}`,
    useRef(initial) {
      const index = cursor++;
      if (!(index in state)) state[index] = { current:initial };
      return state[index];
    },
    useEffect() {},
  };
  const all = (node, predicate) => node && typeof node === "object" ? [...(predicate(node) ? [node] : []), ...(node.children ?? []).flatMap((child) => all(child, predicate))] : [];
  return { reactApi, render:(component, props) => { cursor = 0; return component(props); }, all, find:(node, predicate) => all(node, predicate)[0] };
}

test("v4 migration preserves global controls, family artwork, and rotation while adding an independent empty library", () => {
  const saved = { version:4, selected:{ family:"naruto", mode:"dark", style:"vivid" }, library:{ showMinimal:false }, families:{ naruto:{ mode:"dark", props:false, artwork:{ variant:"rain", enabled:true, pool:["original", "rain"], interval:5 } } }, rotation:{ enabled:true, pool:["gundam", "naruto"], interval:60, order:"random" } };
  const { api, raw } = load(JSON.stringify(saved), false, {}, { catalog:variantCatalog() });
  assert.equal(api.readDocument().version, 7);
  assert.equal(api.readDocument().favorites.length, 0);
  assert.equal(api.readDocument().library.tab, "all");
  api.writeLibrarySettings({ tab:"favorites" });
  api.writeLibrarySettings({ showMinimal:true });
  const restored = load(raw(), false, {}, { catalog:variantCatalog() }).api;
  assert.equal(restored.readDocument().library.tab, "favorites");
  assert.equal(restored.readDocument().library.showMinimal, true);
  assert.equal(restored.readPref().family, "naruto");
  assert.equal(restored.readPref().mode, "dark");
  assert.equal(restored.readPref().props, false);
  assert.equal(restored.readPref().artwork.variant, "rain");
  assert.equal(restored.readPref().artwork.enabled, true);
  assert.deepEqual(Array.from(restored.readDocument().rotation.pool), ["gundam", "naruto"]);
  assert.equal(restored.readDocument().rotation.enabled, true);
  assert.equal(restored.readDocument().rotation.interval, 60);
});

test("favorites normalize stable IDs, survive unrelated saves, and never constrain rotation", () => {
  const { api, raw } = load(null);
  api.writePref({ family:"naruto", mode:"system", style:"vivid", props:false });
  api.writeFavorites(["slate", "naruto", "slate", "missing", "default", null, 12]);
  api.writeRotation({ enabled:true, pool:["gundam", "naruto"], interval:5 });
  api.toggleFavorite("naruto");
  assert.deepEqual(Array.from(api.readDocument().favorites), ["slate"]);
  assert.deepEqual(Array.from(api.readDocument().rotation.pool), ["gundam", "naruto"]);
  api.toggleFavorite("gundam");
  api.writeLibrarySettings({ tab:"favorites" });
  api.writeSettings({ family:"gundam", mode:"light", wallpaper:"soft" });
  api.writePref(null);
  const restored = load(raw()).api;
  assert.deepEqual(Array.from(restored.readDocument().favorites), ["slate", "gundam"]);
  assert.deepEqual(Array.from(restored.readDocument().rotation.pool), ["gundam", "naruto"]);
  assert.equal(restored.readDocument().rotation.enabled, true);
  assert.equal(restored.readPref(), null);
  assert.equal(restored.appearanceFor("naruto").props, false);
  assert.equal(restored.readDocument().library.tab, "favorites");
  assert.equal(restored.normalizeDocument({ library:{ tab:"unknown" }, favorites:"naruto" }).library.tab, "all");
  const blocked = load(null, true).api;
  blocked.toggleFavorite("naruto");
  assert.deepEqual(Array.from(blocked.readDocument().favorites), ["naruto"]);
});

test("favorite and selected scopes preserve exact entries and caller order without leaking palette pairs", () => {
  const { api } = load(null);
  const ids = (query, showMinimal, scope) => Array.from(api.filterCatalog(query, "all", showMinimal, scope), (entry) => entry.id);
  assert.deepEqual(ids("", true, ["slate"]), ["slate"]);
  assert.deepEqual(ids("gundam", true, ["slate"]), ["slate"]);
  assert.deepEqual(ids("", false, ["slate"]), []);
  assert.deepEqual(ids("", true, ["slate", "naruto"]), ["slate", "naruto"]);
  assert.deepEqual(ids("", true, []), []);
  assert.deepEqual(Array.from(api.orderRotationSelection(["gundam", "naruto"], ["naruto", "slate", "gundam", "slate", "missing"])), ["gundam", "naruto", "slate"]);
});

test("the independent favorites tab supports preview and apply without configuring rotation", () => {
  const renderer = elementRenderer();
  const { api } = load(null, false, renderer.reactApi);
  let previewed;
  let applied;
  const props = { t:(key) => key === "theme.title" ? "主题" : key, useStore:(pick) => pick({ family:"naruto", mode:"light" }), saveDraft() {}, previewTheme:(draft) => { previewed = draft; }, applyDraft:(draft) => { applied = draft; }, cancelPreview() {} };
  const render = () => renderer.render(api.ThemeSection, props);
  const tab = (tree, id) => renderer.find(tree, (node) => node.props.role === "tab" && node.props.id.endsWith(`-${id}`));
  let tree = render();
  tab(tree, "favorites").props.onClick();
  tree = render();
  assert.equal(renderer.all(tree, (node) => node.props.className === "dsh-theme-card").length, 0);
  assert.ok(renderer.find(tree, (node) => node.type === "button" && node.children[0] === "去全部主题看看"));
  tab(tree, "all").props.onClick();
  tree = render();
  renderer.find(tree, (node) => node.props.className === "dsh-theme-favorite").props.onClick({});
  assert.equal(previewed, undefined);
  assert.equal(applied, undefined);
  tab(tree, "favorites").props.onClick();
  tree = render();
  assert.equal(renderer.all(tree, (node) => node.props.className === "dsh-theme-card").length, 1);
  renderer.find(tree, (node) => node.props.className === "dsh-theme-card-preview").props.onClick();
  assert.equal(previewed.family, "naruto");
  tree = render();
  renderer.find(tree, (node) => node.props.className === "dsh-theme-apply").props.onClick();
  assert.equal(applied.family, "naruto");
  assert.equal(api.readDocument().rotation.pool.length, 0);
  assert.equal(api.readDocument().rotation.enabled, false);
  renderer.find(tree, (node) => node.props.type === "search").props.onChange({ target:{ value:"naruto" } });
  tree = render();
  tab(tree, "all").props.onClick();
  tree = render();
  assert.equal(renderer.find(tree, (node) => node.props.type === "search").props.value, "");
  tab(tree, "favorites").props.onClick();
  tree = render();
  assert.equal(renderer.find(tree, (node) => node.props.type === "search").props.value, "naruto");
});

test("rotation picker mixes favorites and other themes, keeps hidden selections, and saves only on completion", () => {
  const renderer = elementRenderer();
  const { api } = load(null, false, renderer.reactApi);
  api.writeFavorites(["naruto"]);
  api.writeRotation({ pool:["gundam"], enabled:false });
  let tab = "all";
  let cancelled = false;
  const props = { rotation:api.readDocument().rotation, get tab() { return tab; }, onTabChange:(value) => { tab = value; }, onCancel:() => { cancelled = true; }, onSave:(pool) => api.writeRotation({ ...api.readDocument().rotation, pool }), text:(zh) => zh, t:(key) => key };
  const render = () => renderer.render(api.ThemeRotationPicker, props);
  const checkbox = (tree, label) => renderer.find(tree, (node) => node.props.type === "checkbox" && node.props["aria-label"] === `轮换 ${label}`);
  let tree = render();
  checkbox(tree, "family.naruto").props.onChange({ target:{ checked:true } });
  tab = "favorites";
  tree = render();
  assert.equal(renderer.all(tree, (node) => node.props.type === "checkbox").length, 1);
  assert.equal(checkbox(tree, "family.naruto").props.checked, true);
  tab = "all";
  tree = render();
  checkbox(tree, "family.gundam · style.minimal").props.onChange({ target:{ checked:true } });
  checkbox(tree, "family.gundam").props.onChange({ target:{ checked:false } });
  tree = render();
  checkbox(tree, "family.gundam").props.onChange({ target:{ checked:true } });
  tree = render();
  renderer.find(tree, (node) => node.props.type === "search").props.onChange({ target:{ value:"naruto" } });
  tree = render();
  assert.equal(renderer.all(tree, (node) => node.props.type === "checkbox").length, 1);
  assert.deepEqual(Array.from(api.readDocument().rotation.pool), ["gundam"]);
  renderer.find(tree, (node) => node.type === "button" && node.children[0] === "完成选择").props.onClick();
  assert.deepEqual(Array.from(api.readDocument().rotation.pool), ["gundam", "naruto", "slate"]);
  assert.deepEqual(Array.from(api.readDocument().favorites), ["naruto"]);
  const before = JSON.stringify(api.readDocument());
  checkbox(tree, "family.naruto").props.onChange({ target:{ checked:false } });
  tree = render();
  renderer.find(tree, (node) => node.type === "button" && node.children[0] === "取消").props.onClick();
  assert.equal(cancelled, true);
  assert.equal(JSON.stringify(api.readDocument()), before);
});

test("artwork panel configures rotation-pool themes in place without switching to them", () => {
  const renderer = elementRenderer();
  const entries = variantCatalog();
  entries[1].artworks = [{ id:"field", names:{ zh:"原野", en:"Field" }, modes:{ light:{ "--dsw-pack-wallpaper":"url(field-light.webp)" }, dark:{ "--dsw-pack-wallpaper":"url(field-dark.webp)" } } }];
  const saved = { version:7, selected:{ family:"naruto", mode:"dark", style:"vivid" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:30, mode:"cycle" }, families:{ naruto:{ mode:"dark", artwork:{ enabled:true, pool:["original", "rain"], interval:5 } } } };
  const { api, raw } = load(JSON.stringify(saved), false, renderer.reactApi, { catalog:entries });
  const props = { draft:{ family:"naruto", ...api.settingsFor("naruto") }, update() {}, nextTheme() {}, text:(zh) => zh, t:(key) => key };
  const render = () => renderer.render(api.ThemeCollections, props);
  let tree = render();
  // 合并面板：只有一个「轮换」下拉，内含主题轮换与同主题图片两节。
  const collections = renderer.all(tree, (node) => node.props?.className === "dsh-theme-collection");
  assert.equal(collections.length, 1);
  const sides = renderer.all(tree, (node) => node.props?.className === "dsh-theme-rotation-side");
  assert.deepEqual(sides.map((side) => side.props["aria-label"]), ["主题轮换", "同主题图片"]);
  // 顶部总开关控制主题栏显隐，插图栏开关单独标注；主题侧不再重复渲染开关。
  assert.ok(renderer.find(tree, (node) => node.props?.role === "switch" && node.children?.[0]?.children?.[0] === "主题轮换"));
  assert.ok(renderer.find(tree, (node) => node.props?.role === "switch" && node.children?.[0]?.children?.[0] === "自动轮换图片"));
  assert.equal(renderer.find(tree, (node) => node.props?.role === "switch" && node.children?.[0]?.children?.[0] === "自动轮换主题"), undefined);
  assert.ok(renderer.find(tree, (node) => node.type === "option" && node.children?.[0] === "播完再换"));
  // 默认跟随预览主题 naruto。
  assert.ok(renderer.find(tree, (node) => node.type === "button" && node.children[0] === "雨景"));
  const familySelect = renderer.find(tree, (node) => node.type === "select" && (node.children ?? []).some((child) => child.props?.value === "gundam"));
  familySelect.props.onChange({ target:{ value:"gundam" } });
  tree = render();
  // 切到轮换池里的 gundam：列出它的场景并提示不影响当前主题。
  assert.ok(renderer.find(tree, (node) => node.type === "button" && node.children[0] === "原野"));
  assert.ok(renderer.find(tree, (node) => node.children[0] === "正在配置「family.gundam」，不影响当前主题。"));
  // 默认全选；取消「原野」的轮换并把默认场景设为原野，直接写入 gundam 的保存配置。
  const fieldToggle = renderer.find(tree, (node) => node.props.type === "checkbox" && node.props["aria-label"] === "轮换 原野");
  assert.equal(fieldToggle.props.checked, true);
  fieldToggle.props.onChange({ target:{ checked:false } });
  renderer.find(render(), (node) => node.type === "button" && node.children[0] === "原野").props.onClick();
  tree = render();
  assert.equal(renderer.find(tree, (node) => node.props.type === "checkbox" && node.props["aria-label"] === "轮换 原野").props.checked, false);
  assert.deepEqual(Array.from(api.readDocument().families.gundam.artwork.pool), ["original"]);
  assert.equal(api.readDocument().families.gundam.artwork.variant, "field");
  // 当前主题与 naruto 自己的配置都不受影响。
  assert.equal(api.readDocument().selected.family, "naruto");
  assert.deepEqual(Array.from(api.readDocument().families.naruto.artwork.pool), ["original", "rain"]);
  // 重新加载后配置仍在。
  const restored = load(raw(), false, renderer.reactApi, { catalog:entries }).api;
  assert.equal(restored.readDocument().families.gundam.artwork.variant, "field");
  assert.deepEqual(Array.from(restored.readDocument().families.gundam.artwork.pool), ["original"]);
  // 主题轮换关闭后，配置下拉收起，面板回到只配置当前主题。
  api.writeRotation({ ...api.readDocument().rotation, enabled:false });
  const offTree = renderer.render(api.ThemeCollections, { ...props, draft:{ family:"naruto", ...api.settingsFor("naruto") } });
  assert.equal(renderer.find(offTree, (node) => node.type === "select" && (node.children ?? []).some((child) => child.props?.value === "gundam")), undefined);
  assert.ok(renderer.find(offTree, (node) => node.type === "button" && node.children[0] === "雨景"));
  // 主题轮换关闭后主题栏整体不渲染，只剩总开关与插图栏。
  const offSides = renderer.all(offTree, (node) => node.props?.className === "dsh-theme-rotation-side");
  assert.deepEqual(offSides.map((side) => side.props["aria-label"]), ["同主题图片"]);
  const masterSwitch = renderer.find(offTree, (node) => node.props?.role === "switch" && node.children?.[0]?.children?.[0] === "主题轮换");
  assert.ok(masterSwitch);
  assert.equal(masterSwitch.props["aria-checked"], false);
  assert.equal(renderer.find(offTree, (node) => node.type === "button" && node.children[0] === "选择轮换主题"), undefined);
  assert.equal(renderer.find(offTree, (node) => node.type === "option" && node.children?.[0] === "播完再换"), undefined);
  assert.ok(renderer.find(offTree, (node) => node.type === "option" && node.children?.[0] === "按列表"));
  // 打开总开关：主题栏出现，配置下拉也带回轮换池主题。
  masterSwitch.props.onClick();
  const onTree = renderer.render(api.ThemeCollections, { ...props, draft:{ family:"naruto", ...api.settingsFor("naruto") } });
  assert.equal(renderer.all(onTree, (node) => node.props?.className === "dsh-theme-rotation-side").length, 2);
  assert.ok(renderer.find(onTree, (node) => node.type === "select" && (node.children ?? []).some((child) => child.props?.value === "gundam")));
});

test("section follows the saved selection when preference events precede the host store update", () => {
  const renderer = elementRenderer();
  const effects = [];
  renderer.reactApi.useEffect = (effect, dependencies) => { if (dependencies?.length === 2) effects.push(effect); };
  const { api } = load(null, false, renderer.reactApi);
  const props = { t:(key) => key === "theme.title" ? "主题" : key, useStore:(pick) => pick({ family:null, mode:"light" }), previewTheme() {}, cancelPreview() {} };
  renderer.render(api.ThemeSection, props);
  const cleanups = effects.map((effect) => effect());
  api.writePref({ family:"naruto", mode:"dark", style:"vivid" });
  const tree = renderer.render(api.ThemeSection, props);
  const selected = renderer.find(tree, (node) => node.props.className === "dsh-theme-card" && node.props["data-selected"]);
  assert.equal(selected.props["data-family"], "naruto");
  for (const cleanup of cleanups) cleanup?.();
});

test("fine controls start collapsed and toggling them preserves artwork preferences", () => {
  const renderer = elementRenderer();
  const { api } = load(null, false, renderer.reactApi);
  let saved;
  const props = { t:(key) => key === "theme.title" ? "主题" : key, useStore:(pick) => pick({ family:"naruto", mode:"light" }), saveDraft:(draft) => { saved = draft; }, previewTheme() {}, applyDraft() {}, cancelPreview() {} };
  const render = () => renderer.render(api.ThemeSection, props);
  const { find } = renderer;
  let tree = render();
  const disclosure = (node) => node.props.className === "dsh-theme-advanced-toggle";
  const character = (node) => node.props.role === "switch" && node.children[0]?.children[0] === "右下角角色";
  assert.equal(find(tree, disclosure).props["aria-expanded"], false);
  assert.equal(find(tree, character), undefined);
  assert.equal(saved, undefined);
  find(tree, disclosure).props.onClick();
  tree = render();
  assert.equal(find(tree, character).props["aria-checked"], true);
  find(tree, character).props.onClick();
  assert.equal(saved.character, false);
  tree = render();
  find(tree, disclosure).props.onClick();
  tree = render();
  assert.equal(find(tree, character), undefined);
  find(tree, disclosure).props.onClick();
  tree = render();
  assert.equal(find(tree, character).props["aria-checked"], false);
});

test("fine controls expose shared header range and reset only global controls", () => {
  const renderer = elementRenderer();
  const saved = { version:6, selected:{ family:"naruto", mode:"dark", style:"vivid" }, appearance:{ header:false, character:false, props:false, pal:false, headerRange:"title" }, families:{ naruto:{ mode:"dark", wallpaper:"soft", artwork:{ variant:"rain", enabled:false, interval:15, order:"random", pool:["rain"], known:["original", "rain"] } } } };
  const { api } = load(JSON.stringify(saved), false, renderer.reactApi, { catalog:variantCatalog() });
  const props = { t:(key) => key === "theme.title" ? "主题" : key, useStore:(pick) => pick({ family:"naruto", mode:"dark" }), saveDraft:(draft) => api.writeSettings(draft), previewTheme() {}, applyDraft() {}, cancelPreview() {} };
  const render = () => renderer.render(api.ThemeSection, props);
  const button = (tree, label) => renderer.find(tree, (node) => node.type === "button" && node.children[0] === label);
  let tree = render();
  renderer.find(tree, (node) => node.props.className === "dsh-theme-advanced-toggle").props.onClick();
  tree = render();
  assert.ok(renderer.find(tree, (node) => node.children.includes("应用于所有主题")));
  assert.ok(renderer.find(tree, (node) => node.children.includes("横幅范围")));
  assert.equal(button(tree, "限于标题栏").props.disabled, true);
  assert.equal(button(tree, "向下延展").props.disabled, true);
  const artwork = JSON.stringify(api.settingsFor("naruto").artwork);
  const reset = button(tree, "恢复默认");
  assert.equal(reset.props.title, "恢复所有主题的精细控制默认值");
  reset.props.onClick();
  assert.deepEqual(JSON.parse(JSON.stringify(api.readDocument().appearance)), { header:true, character:true, props:true, pal:true, headerRange:"extend" });
  assert.equal(api.settingsFor("naruto").wallpaper, "soft");
  assert.equal(api.settingsFor("naruto").mode, "dark");
  assert.equal(JSON.stringify(api.settingsFor("naruto").artwork), artwork);
  tree = render();
  assert.equal(button(tree, "限于标题栏").props.disabled, false);
  assert.equal(button(tree, "向下延展").props["aria-pressed"], true);
  button(tree, "限于标题栏").props.onClick();
  tree = render();
  assert.equal(button(tree, "限于标题栏").props["aria-pressed"], true);
  assert.equal(api.appearanceFor("gundam").headerRange, "title");
  const header = renderer.find(tree, (node) => node.props.role === "switch" && node.children[0]?.children[0] === "头部横幅");
  header.props.onClick();
  tree = render();
  assert.equal(button(tree, "限于标题栏").props.disabled, true);
  assert.equal(api.appearanceFor("gundam").headerRange, "title");
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
    slots:{
      inject:(_, fn) => fn(),
      entriesOfSlot:() => [{ store:{} }],
      register:(meta, component) => { registrations.push({ meta, component }); },
    },
  };
  api.apply(ctx);
  const section = registrations.find(({ meta }) => meta.name === "settings.section");
  assert.ok(section);
  assert.equal(registrations.some(({ meta }) => meta.name === "settings.general.item"), false);
  const actions = section.meta.inject({ sync() {} });
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), catalog[0].decor.wallpaperSize);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), catalog[0].decor.wallpaperPosition);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-translate"), catalog[0].decor.heroTranslate);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-max-width"), catalog[0].decor.heroMaxWidth);
  const saved = raw();
  actions.previewTheme({ family:"gundam", mode:"light", ...api.appearanceFor(null), props:false });
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-translate"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-max-width"), "");
  assert.equal(snapshot.preference, "gundam-light-vivid");
  assert.equal(raw(), saved);
  assert.equal(api.appearanceFor("gundam").props, true);
  actions.previewTheme({ family:null, mode:"dark" });
  assert.equal(snapshot.preference, "dsh-preview-dark");
  assert.equal(raw(), saved);
  actions.cancelPreview();
  assert.equal(snapshot.preference, "naruto-dark-vivid");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), catalog[0].decor.wallpaperSize);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), catalog[0].decor.wallpaperPosition);
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
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-translate"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-max-width"), "");
  const override = [...nodes].find((node) => node.id === "dsh-theme-decoration-overrides");
  assert.match(override.textContent, /--dsw-pack-scene-props-secondary:none!important/);
  assert.match(override.textContent, /--dsw-pack-wallpaper:none!important/);
  assert.match(override.textContent, /--dsw-pack-panel:none!important/);
  actions.applyDraft({ family:null, mode:"light" });
  assert.equal(snapshot.preference, "light");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), "");
  assert.equal(api.appearanceFor("naruto").props, false);
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  for (const cleanup of cleanups.reverse()) cleanup?.();
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), "");
  assert.equal(nodes.size, 0);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-translate"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-max-width"), "");
  assert.equal(document.body.dataset.dshThemesPal, undefined);
});

/**
 * The ThemeService adopts its durable Host preference and republishes
 * "light"/"dark"/"system" whenever the settings document is refreshed; a model
 * switch recomposes the profile and resubmits it. That transient used to look
 * like another plugin's takeover and erased the stored skin permanently, and
 * before the echo rule landed the pack also stopped taking the preference
 * back once its fixed boot window closed.
 */
test("a built-in preference never erases the stored skin preference", () => {
  let raw = JSON.stringify({ version:3, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ mode:"dark" } } });
  const pending = [];
  const { api } = load(null, false, {}, {
    window:{ localStorage:{ getItem:() => raw, setItem:(_, value) => { raw = value; } } },
    setTimeout:(fn) => { pending.push(fn); return pending.length; },
    clearTimeout() {},
  });
  const listeners = [];
  let snapshot = { preference:"naruto-dark-vivid", revision:0 };
  const theme = { register:() => () => {}, getTheme:() => snapshot, setTheme(preference) {
    if (preference === snapshot.preference) return;
    snapshot = { preference, revision:snapshot.revision+1 };
    for (const listener of listeners) listener(snapshot);
  } };
  const ctx = {
    theme,
    on:(_, callback) => { listeners.push(callback); return () => {}; },
    effect:(fn) => fn(),
    locale:{ register:() => () => {}, getLocale:() => ({ active:"en" }) },
    slots:{ inject:(_, fn) => fn(), register() {}, entriesOfSlot:() => [{ store:{} }] },
  };
  // Let every deferred re-assert run, as it would on the real task queue.
  const flush = () => {
    while (pending.length > 0) for (const fn of pending.splice(0)) fn();
  };
  api.apply(ctx);
  flush();
  const before = raw;
  assert.equal(api.readPref().family, "naruto");
  assert.equal(snapshot.preference, "naruto-dark-vivid");

  // The Host echo of its durable built-in preference lands long after the
  // plugin's boot window: it must neither erase the skin nor win.
  snapshot = { preference:"system", revision:snapshot.revision+1 };
  for (const listener of listeners) listener(snapshot);
  flush();
  assert.equal(api.readPref().family, "naruto");
  assert.equal(raw, before);
  assert.equal(snapshot.preference, "naruto-dark-vivid");

  // A real third-party takeover still drops this plugin's preference.
  snapshot = { preference:"someone-elses-theme", revision:snapshot.revision+1 };
  for (const listener of listeners) listener(snapshot);
  flush();
  assert.equal(api.readPref(), null);
});

test("picking the default appearance hands the preference back", () => {
  let raw = JSON.stringify({ version:3, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ mode:"dark" } } });
  const pending = [];
  const { api } = load(null, false, {}, {
    window:{ localStorage:{ getItem:() => raw, setItem:(_, value) => { raw = value; } } },
    setTimeout:(fn) => { pending.push(fn); return pending.length; },
    clearTimeout() {},
  });
  const listeners = [];
  let snapshot = { preference:"naruto-dark-vivid", revision:0 };
  const theme = { register:() => () => {}, getTheme:() => snapshot, setTheme(preference) {
    if (preference === snapshot.preference) return;
    snapshot = { preference, revision:snapshot.revision+1 };
    for (const listener of listeners) listener(snapshot);
  } };
  const registrations = [];
  const ctx = {
    theme,
    on:(_, callback) => { listeners.push(callback); return () => {}; },
    effect:(fn) => fn(),
    locale:{ register:() => () => {}, getLocale:() => ({ active:"en" }) },
    slots:{
      inject:(_, fn) => fn(),
      register:(meta) => { registrations.push(meta); },
      entriesOfSlot:() => [{ store:{} }],
    },
  };
  const flush = () => {
    while (pending.length > 0) for (const fn of pending.splice(0)) fn();
  };
  api.apply(ctx);
  flush();
  const actions = registrations.find(({ name }) => name === "settings.section").inject({ sync() {} });
  // The user picks the built-in default: no family, so no stored skin remains.
  actions.applyDraft({ family:null, mode:"light" });
  flush();
  assert.equal(api.readPref(), null);
  assert.equal(snapshot.preference, "light");
  // A later Host echo must not resurrect anything.
  snapshot = { preference:"system", revision:snapshot.revision+1 };
  for (const listener of listeners) listener(snapshot);
  flush();
  assert.equal(api.readPref(), null);
  assert.equal(snapshot.preference, "system");
});
