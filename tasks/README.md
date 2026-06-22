# 📚 js-kata — task catalog

Tasks grouped by the **mechanism** they train, not by surface label. The point is
that your brain links a problem to the technique that solves it: implement `debounce`
next to `memoize` and you feel the same "a closure holds state between calls" move.

Sources: GreatFrontEnd Front End Interview Playbook, Front End Interview Handbook
(2026). The list mirrors what these report as the most commonly asked JavaScript
implementation questions — the front-end equivalent of grinding LeetCode.

Solve loop: open a task folder → write `solution.js` → `npm run test:watch`.

---

## Chapters

### [async](./async/INDEX.md) — event loop, promises, control flow
Callbacks → promises → concurrency. Microtasks vs macrotasks, promise chaining,
sequencing and parallelism, promise polyfills.

### [closures](./closures/INDEX.md) — a closure as a tool
Private state, deferred calls, caching. The unifying move: a closure keeps state
between invocations. Includes the timer-based HOFs (debounce, throttle).

### [this-binding](./this-binding/INDEX.md) — call context
Explicit binding, `arguments`, borrowing methods. Reimplement `Function.prototype`
binding methods from scratch.

### [prototypes](./prototypes/INDEX.md) — the prototype chain
`[[Prototype]]`, delegation, the `new` operator, `instanceof`. How inheritance
actually works under the hood.

### [array-methods](./array-methods/INDEX.md) — reimplement Array.prototype
Exact native contracts: `(value, index, array)` callback, `thisArg`, sparse-array
holes. Tests knowledge of the spec, not just the happy path.

### [data-transform](./data-transform/INDEX.md) — reshape data
Utility functions that chew through data: flatten, group, dedupe, key conversion.
Free implementation — no native contract to memorize.

### [dom](./dom/INDEX.md) — DOM APIs & traversal (jsdom)
Reimplement DOM lookups and patterns: `getElementsByClassName`, event delegation.
Tested in a jsdom environment. (UI components live in a separate Storybook repo.)

### [data-structures](./data-structures/INDEX.md) — classic structures
Storage, encapsulation, operation complexity. EventEmitter, LRU cache.

---

## Status legend

✅ done · 🔄 in progress · 🔲 todo · ⭐ difficulty (1–3)
