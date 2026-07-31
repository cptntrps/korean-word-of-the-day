/* Behavioral test for the Korean word-of-the-day DATE PIN.
 *
 * Loads the REAL words.js bank + the REAL rotation/pin block out of korean/index.html and
 * runs them in a vm sandbox (same approach as test_liveness_render.js: the app's OWN
 * trusted script text, isolated from this process — never fetched or user-supplied), so
 * the test fails if either the pin DATA or the selection LOGIC drifts.
 *
 * Invariants:
 *   1. A pinned local date renders its pinned word, not the rotation word.
 *   2. Days either side of a pin are UNCHANGED — a pin must not shift the rotation.
 *   3. Every pin entry is shape-complete (same fields the renderer reads), because a
 *      half-filled pin would render blank panels on the resting screen rather than fail.
 *   4. Pin keys are local-calendar YYYY-MM-DD, and localISO agrees with them.
 *   5. Dedupe keys are namespaced, so a pin day and a rotation day can never collide in
 *      the renderer's lastWordKey short-circuit.
 */

const fs = require("fs");
const path = require("path");
const assert = require("assert");
const vm = require("vm");

const KOREAN = path.join(__dirname, "..");

// --- run the real bank + the real selection block together in one sandbox ----
const wordsSrc = fs.readFileSync(path.join(KOREAN, "words.js"), "utf8");
const html = fs.readFileSync(path.join(KOREAN, "index.html"), "utf8");

const start = html.indexOf("let WORDS = [];");
const end = html.indexOf("function heroSize");
assert.ok(start !== -1 && end !== -1 && end > start,
  "could not slice the rotation/pin block out of index.html — anchors moved");
const selectionSrc = html.slice(start, end);

const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(wordsSrc, sandbox, { filename: "korean/words.js" });
vm.runInContext(
  selectionSrc + "\n; globalThis.__api = { wordFor, localISO, WORDS, PINS };\n",
  sandbox, { filename: "korean/index.html:rotation" },
);
// inside a contextified sandbox, `globalThis` IS the sandbox — so __api lands here.
const { wordFor, localISO, WORDS, PINS } = sandbox.__api;
assert.strictEqual(typeof wordFor, "function", "wordFor() not exposed");

const ROTATION_SIZE = WORDS.length;
const PIN_DATES = Object.keys(PINS);
assert.ok(ROTATION_SIZE > 0, "word bank is empty");
assert.ok(PIN_DATES.length > 0, "no pins defined — this test would prove nothing");

const at = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);   // LOCAL date, matching the renderer
};
const shift = (iso, days) => {
  const d = at(iso);
  d.setDate(d.getDate() + days);
  return d;
};
// The rotation word a date WOULD get if pins did not exist.
const rotationWordAt = (d) => {
  const days = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  return WORDS[((days % ROTATION_SIZE) + ROTATION_SIZE) % ROTATION_SIZE];
};

for (const iso of PIN_DATES) {
  const pinned = PINS[iso];

  // 4. key format + localISO agreement
  assert.match(iso, /^\d{4}-\d{2}-\d{2}$/, `pin key ${iso} is not YYYY-MM-DD`);
  assert.strictEqual(localISO(at(iso)), iso, `localISO disagrees with pin key ${iso}`);

  // 3. shape completeness — every field the renderer reads
  for (const f of ["ko", "roman", "sound", "pos", "meaning"]) {
    assert.ok(typeof pinned[f] === "string" && pinned[f].length,
      `pin ${iso} missing/empty field: ${f}`);
  }
  assert.ok(Array.isArray(pinned.syl) && pinned.syl.length,
    `pin ${iso} has no syllable breakdown`);
  for (const s of pinned.syl) {
    assert.ok(Array.isArray(s) && s.length === 2
      && s.every((x) => typeof x === "string" && x.length),
      `pin ${iso} has a malformed syllable pair: ${JSON.stringify(s)}`);
  }
  assert.strictEqual([...pinned.ko].length, pinned.syl.length,
    `pin ${iso}: syllable count does not match the hangul hero line`);
  assert.ok(Array.isArray(pinned.ex) && pinned.ex.length === 2
    && pinned.ex.every((x) => typeof x === "string" && x.length),
    `pin ${iso} needs an [korean, english] example pair`);

  // 1. + 5. the pin wins on its date, under a namespaced key
  const [key, word] = wordFor(at(iso));
  assert.strictEqual(key, "pin:" + iso, `pin ${iso} did not produce a pin dedupe key`);
  assert.strictEqual(word.ko, pinned.ko, `pin ${iso} did not render its pinned word`);

  // 2. neighbours keep their rotation word
  for (const delta of [-1, 1]) {
    const d = shift(iso, delta);
    const neighbourISO = localISO(d);
    if (PINS[neighbourISO]) continue;   // adjacent pin, not a rotation day
    const [nKey, nWord] = wordFor(d);
    assert.ok(nKey.startsWith("day:"),
      `${neighbourISO} should be a rotation day, got ${nKey}`);
    assert.strictEqual(nWord.ko, rotationWordAt(d).ko,
      `pin ${iso} shifted the rotation on ${neighbourISO}`);
  }
}

// The 2026-07-29 pin is the occasion this mechanism was built for — assert it by content
// so a silent data edit (wrong word, wrong sentence) fails rather than renders quietly.
const JUL29 = PINS["2026-07-29"];
if (JUL29) {
  assert.strictEqual(JUL29.ko, "행운", "2026-07-29 pin should be 행운 (good luck)");
  assert.match(JUL29.ex[1], /good luck/i, "2026-07-29 example should read as a good-luck line");
}

console.log(`korean pin invariants: all hold (${PIN_DATES.length} pin(s), rotation size ${ROTATION_SIZE})`);
