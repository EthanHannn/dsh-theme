import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const template = readFileSync(new URL("../lib/client.tpl.js", import.meta.url), "utf8");
const start = template.indexOf("    function createScenePropsLayout(selector) {");
const end = template.indexOf("    function apply(ctx) {", start);
const source = template.slice(start, end) + "\ncreateScenePropsLayout;";
const leftKey = "--dsh-theme-composer-left";
const bottomKey = "--dsh-theme-composer-bottom-gap";

function eventTarget() {
  const listeners = new Map();
  const keyFor = (type, capture = false) => `${type}:${Boolean(capture)}`;
  return {
    addEventListener(type, listener, capture) {
      const key = keyFor(type, capture);
      if (!listeners.has(key)) listeners.set(key, new Set());
      listeners.get(key).add(listener);
    },
    removeEventListener(type, listener, capture) {
      listeners.get(keyFor(type, capture))?.delete(listener);
    },
    emit(type, capture = false) {
      for (const listener of [...listeners.get(keyFor(type, capture)) ?? []]) listener();
    },
    count(type, capture = false) {
      return listeners.get(keyFor(type, capture))?.size ?? 0;
    },
  };
}

function harness({ wide = true, height = 1080, available = true } = {}) {
  const history = [];
  const frames = new Map();
  const resizeObservers = [];
  const mutationObservers = [];
  let frameId = 0;
  let matches = [];
  const node = (name, parentElement = null, rect = { left: 0, bottom: height }) => {
    const values = new Map();
    return {
      name,
      parentElement,
      rect,
      style: {
        getPropertyValue: (key) => values.get(key) ?? "",
        setProperty(key, value) { history.push(["write", name, key, value]); values.set(key, value); },
        removeProperty(key) { history.push(["remove", name, key]); values.delete(key); },
      },
      getBoundingClientRect() { history.push(["read", name]); return { ...this.rect }; },
    };
  };
  const body = node("body");
  const media = { ...eventTarget(), matches: wide };
  const window = {
    ...eventTarget(),
    innerHeight: height,
    matchMedia(query) {
      assert.equal(query, "(min-width: 1681px) and (min-height: 800px)");
      return media;
    },
    requestAnimationFrame(callback) { const id = ++frameId; frames.set(id, callback); return id; },
    cancelAnimationFrame(id) { frames.delete(id); },
  };
  const document = {
    ...eventTarget(),
    body,
    querySelectorAll(selector) { assert.equal(selector, ".active-composer"); return matches; },
  };
  class ResizeObserver {
    constructor(callback) { this.callback = callback; this.targets = new Set(); resizeObservers.push(this); }
    observe(target) { this.targets.add(target); }
    unobserve(target) { this.targets.delete(target); }
    disconnect() { this.targets.clear(); }
  }
  class MutationObserver {
    constructor(callback) { this.callback = callback; this.target = null; mutationObservers.push(this); }
    observe(target, options) { this.target = target; this.options = options; }
    disconnect() { this.target = null; }
  }
  const factory = vm.runInNewContext(source, {
    window, document, ResizeObserver: available ? ResizeObserver : undefined, MutationObserver,
  });
  const layout = factory(".active-composer");
  return {
    layout, node, body, window, document, media, frames, history, resizeObservers, mutationObservers,
    setMatches(value) { matches = value; },
    flush() {
      const pending = [...frames.values()];
      frames.clear();
      for (const callback of pending) callback();
    },
    resize(target) {
      for (const observer of resizeObservers) {
        if (observer.targets.has(target)) observer.callback([{ target }]);
      }
    },
    mutate(type = "childList", attributeName) {
      for (const observer of mutationObservers) {
        if (!observer.target || !observer.options[type === "attributes" ? "attributes" : "childList"]) continue;
        if (type === "attributes" && !observer.options.attributeFilter.includes(attributeName)) continue;
        observer.callback([{ type, attributeName }]);
      }
    },
    setWide(value) { media.matches = value; media.emit("change"); },
  };
}

test("composer geometry preserves viewport artwork coordinates on both axes", () => {
  const h = harness();
  const parent = h.node("parent", h.body);
  const seat = h.node("seat", parent, { left: 292.5, bottom: 998.25 });
  const second = h.node("second", parent, { left: 610, bottom: 1052 });
  h.setMatches([seat, second]);
  h.layout.sync(true);
  assert.equal(h.frames.size, 1);
  assert.equal(seat.style.getPropertyValue(leftKey), "");
  h.flush();
  assert.equal(seat.style.getPropertyValue(leftKey), "292.5px");
  assert.equal(seat.style.getPropertyValue(bottomKey), "81.75px");
  assert.equal(second.style.getPropertyValue(leftKey), "610px");
  assert.equal(second.style.getPropertyValue(bottomKey), "28px");
  const localLeft = 360 - parseFloat(seat.style.getPropertyValue(leftKey));
  const localBottom = 34 - parseFloat(seat.style.getPropertyValue(bottomKey));
  assert.equal(seat.rect.left + localLeft, 360);
  assert.equal(h.window.innerHeight - (seat.rect.bottom - localBottom), 34);
  assert.deepEqual(h.history.slice(0, 2), [["read", "seat"], ["read", "second"]]);
  assert.deepEqual(h.resizeObservers[0].targets, new Set([seat, second, parent, h.body]));
  h.layout.destroy();
});

test("ancestor resize, scrolling, and viewport resize refresh position-only changes", () => {
  const h = harness();
  const parent = h.node("parent", h.body);
  const seat = h.node("seat", parent, { left: 280, bottom: 1000 });
  h.setMatches([seat]);
  h.layout.sync(true);
  h.flush();
  seat.rect.left = 0;
  h.resize(parent);
  h.flush();
  assert.equal(seat.style.getPropertyValue(leftKey), "0px");
  seat.rect.bottom = 960;
  assert.equal(h.document.count("scroll", true), 1);
  h.document.emit("scroll", true);
  h.flush();
  assert.equal(seat.style.getPropertyValue(bottomKey), "120px");
  h.window.innerHeight = 1200;
  h.window.emit("resize");
  h.flush();
  assert.equal(seat.style.getPropertyValue(bottomKey), "240px");
  h.layout.destroy();
});

test("remounting and phase changes clear detached seats and refresh observed ancestors", () => {
  const h = harness();
  const oldParent = h.node("old-parent", h.body);
  const oldSeat = h.node("old-seat", oldParent, { left: 280, bottom: 1000 });
  h.setMatches([oldSeat]);
  h.layout.sync(true);
  h.flush();
  const parent = h.node("new-parent", h.body);
  const seat = h.node("new-seat", parent, { left: 310, bottom: 1040 });
  h.setMatches([seat]);
  h.mutate();
  h.flush();
  assert.equal(oldSeat.style.getPropertyValue(leftKey), "");
  assert.equal(oldSeat.style.getPropertyValue(bottomKey), "");
  assert.equal(seat.style.getPropertyValue(leftKey), "310px");
  assert.deepEqual(h.resizeObservers[0].targets, new Set([seat, parent, h.body]));
  h.setMatches([]);
  h.mutate("attributes", "data-phase");
  h.flush();
  assert.equal(seat.style.getPropertyValue(leftKey), "");
  assert.equal(h.resizeObservers[0].targets.size, 0);
  h.setMatches([seat]);
  h.mutate("attributes", "data-phase");
  h.flush();
  assert.equal(seat.style.getPropertyValue(bottomKey), "40px");
  h.layout.destroy();
});

test("layout notifications merge into one frame and unchanged geometry does not rewrite styles", () => {
  const h = harness();
  const seat = h.node("seat", h.body, { left: 280, bottom: 1000 });
  h.setMatches([seat]);
  h.layout.sync(true);
  h.layout.sync(true);
  h.window.emit("resize");
  h.document.emit("scroll", true);
  h.mutate();
  assert.equal(h.frames.size, 1);
  h.flush();
  const writes = () => h.history.filter(([kind]) => kind === "write").length;
  assert.equal(writes(), 2);
  h.resize(seat);
  h.resize(h.body);
  h.window.emit("resize");
  h.document.emit("scroll", true);
  h.mutate();
  assert.equal(h.frames.size, 1);
  h.flush();
  assert.equal(writes(), 2);
  assert.equal(h.frames.size, 0);
  h.mutate("attributes", "style");
  assert.equal(h.frames.size, 0);
  h.layout.destroy();
});

test("stopping cancels pending work and clears listeners, observations, and seat properties", () => {
  const h = harness();
  const seat = h.node("seat", h.body, { left: 280, bottom: 1000 });
  h.setMatches([seat]);
  h.layout.sync(true);
  h.flush();
  h.window.emit("resize");
  assert.equal(h.frames.size, 1);
  h.layout.sync(false);
  assert.equal(h.frames.size, 0);
  assert.equal(seat.style.getPropertyValue(leftKey), "");
  assert.equal(seat.style.getPropertyValue(bottomKey), "");
  assert.equal(h.window.count("resize"), 0);
  assert.equal(h.document.count("scroll", true), 0);
  assert.equal(h.resizeObservers[0].targets.size, 0);
  assert.equal(h.mutationObservers[0].target, null);
  h.window.emit("resize");
  h.document.emit("scroll", true);
  h.mutate();
  h.setWide(false);
  h.setWide(true);
  assert.equal(h.frames.size, 0);
  h.layout.sync(true);
  h.flush();
  assert.equal(seat.style.getPropertyValue(leftKey), "280px");
  h.window.emit("resize");
  h.layout.destroy();
  assert.equal(h.frames.size, 0);
  assert.equal(h.media.count("change"), 0);
  assert.equal(h.window.count("resize"), 0);
  assert.equal(h.document.count("scroll", true), 0);
  assert.equal(h.resizeObservers[0].targets.size, 0);
  assert.equal(seat.style.getPropertyValue(leftKey), "");
});

test("narrow windows suspend layout and restore it when the wide-screen query matches", () => {
  const h = harness({ wide: false });
  const seat = h.node("seat", h.body, { left: 280, bottom: 1000 });
  h.setMatches([seat]);
  h.layout.sync(true);
  assert.equal(h.frames.size, 0);
  assert.equal(h.window.count("resize"), 0);
  h.setWide(true);
  assert.equal(h.frames.size, 1);
  h.flush();
  assert.equal(seat.style.getPropertyValue(leftKey), "280px");
  h.setWide(false);
  assert.equal(seat.style.getPropertyValue(leftKey), "");
  assert.equal(h.window.count("resize"), 0);
  assert.equal(h.resizeObservers[0].targets.size, 0);
  h.setWide(true);
  h.flush();
  assert.equal(seat.style.getPropertyValue(bottomKey), "80px");
  h.layout.destroy();
});

test("a browser without resize observation safely leaves layout inactive", () => {
  const h = harness({ available: false });
  h.layout.sync(true);
  h.layout.sync(false);
  h.layout.destroy();
  assert.equal(h.frames.size, 0);
  assert.equal(h.media.count("change"), 0);
  assert.equal(h.window.count("resize"), 0);
});
