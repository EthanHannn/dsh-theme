import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

function loadPal({ desktop, trigger = null, lang = "zh" }) {
  let api;
  const timers = [];
  const effects = [];
  const registrations = [];
  const declarations = new Map();
  const shell = { open: false, activeId: undefined, opens: 0 };
  const actions = {
    open() { throw new Error("The pal must select Themes & Appearance"); },
    openSection(id) { shell.open = true; shell.activeId = id; shell.opens += 1; },
  };
  const store = { spec: { actions }, create() { throw new Error("The renderer owns store creation"); } };
  let legacyClicks = 0;
  const document = {
    body: { dataset: {} },
    querySelector(selector) {
      assert.equal(desktop, false, "Desktop must not search for the old settings button");
      assert.equal(selector, '[data-slot="settings.trigger"]');
      return trigger ? { closest: () => ({ click() { legacyClicks += 1; } }) } : null;
    },
  };
  const reactApi = {
    useState: (value) => [typeof value === "function" ? value() : value, () => {}],
    useReducer: () => [0, () => {}],
    useEffect: (effect) => effects.push(effect),
  };
  const jsx = (type, props) => ({ type, props });
  const window = {
    ...(desktop ? { dshDesktop: {} } : {}),
    localStorage: { getItem: () => null },
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
    __ModuleLoader__: { load({ factory }) {
      api = factory((id) => id === "react" ? reactApi
        : id === "react/jsx-runtime" ? { jsx, jsxs: jsx, Fragment: "fragment" }
        : { defineStore: (spec) => spec });
    } },
  };
  const catalog = [{ id: "test", names: { zh: "测试", en: "Test" },
    skins: [{ id: "test-dark-vivid", colorScheme: "dark" }],
    decor: { pals: ["pal.webp"], phrases: { zh: ["你好"] } } }];
  const source = readFileSync(new URL("../lib/client.tpl.js", import.meta.url), "utf8")
    .replace("__CATALOG__", JSON.stringify(catalog))
    .replace("    exports.CATALOG = CATALOG;", "    exports.registerPalEntry = registerPalEntry;");
  vm.runInNewContext(source, { window, document,
    setTimeout: (callback) => timers.push(callback),
    setInterval() { throw new Error("No settings-button polling is needed"); }, clearInterval() {} });
  const ctx = {
    locale: { getLocale: () => ({ active: lang }) },
    theme: { getTheme: () => ({ preference: "test-dark-vivid" }) },
    on: () => () => {},
    slots: {
      entriesOfSlot(name) { assert.equal(name, "sidebar.settings"); return [{ store }]; },
      inject(name, callback) {
        declarations.set(name, callback);
        return () => declarations.delete(name);
      },
      register(options, component) {
        const entry = { options, component, removed: false };
        registrations.push(entry);
        return () => { entry.removed = true; };
      },
    },
  };
  const dispose = api.registerPalEntry(ctx);
  return { store, shell, declarations, registrations, dispose, document,
    legacyClicks: () => legacyClicks,
    click() {
      const entry = registrations.at(-1);
      const tree = entry.component({ wide: true, ...(entry.options.store ? { actions } : {}) });
      for (const effect of effects.splice(0)) effect();
      const button = tree.props.children.find((child) => child.type === "button");
      const label = lang === "zh" ? "主题与外观" : "Themes & Appearance";
      assert.equal(button.props["aria-label"], label);
      button.props.onClick({ currentTarget: { blur() {} } });
      for (const callback of timers.splice(0)) callback();
    },
  };
}

test("Desktop pal selects Themes & Appearance without a legacy trigger or account-menu click", () => {
  const pal = loadPal({ desktop: true });
  assert.equal(pal.registrations.length, 0);
  const remove = pal.declarations.get("settings.launcher")();
  assert.equal(pal.registrations[0].options.store, pal.store);
  assert.equal(pal.registrations[0].options.name, "sidebar.footer.action");
  pal.click();
  assert.equal(pal.shell.open, true);
  assert.equal(pal.shell.activeId, "themes");
  assert.equal(pal.shell.opens, 1);
  assert.equal(pal.document.body.dataset.dshThemesPal, undefined);
  assert.equal(pal.legacyClicks(), 0);
  pal.click();
  assert.equal(pal.shell.open, true, "Repeated clicks must not toggle Settings closed");
  remove();
  assert.equal(pal.registrations[0].removed, true);
  pal.dispose();
  assert.equal(pal.declarations.size, 0);
});

test("Web pal selects Themes & Appearance while replacing the plain settings button", () => {
  const pal = loadPal({ desktop: false, trigger: true, lang: "en" });
  assert.equal(pal.registrations.length, 0);
  const remove = pal.declarations.get("settings.launcher")();
  assert.equal(pal.registrations[0].options.store, pal.store);
  pal.click();
  assert.equal(pal.shell.open, true);
  assert.equal(pal.shell.activeId, "themes");
  assert.equal(pal.legacyClicks(), 0);
  assert.equal(pal.document.body.dataset.dshThemesPal, "");
  assert.equal(pal.shell.opens, 1);
  remove();
  assert.equal(pal.registrations[0].removed, true);
  pal.dispose();
  assert.equal(pal.declarations.size, 0);
});
