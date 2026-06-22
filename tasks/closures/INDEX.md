# closures — a closure as a tool

Mechanism: a function remembers variables from its outer scope after that scope has
returned. Every task here is a different use of that one fact — private state, a
one-shot guard, a cache, a partially applied function, a timer that survives between
calls.

| Task | ⭐ | Status | What to implement |
|:-----|:--|:-------|:------------------|
| `createCounter` | ⭐ | 🔲 | Return a function that increments and returns a private count. The canonical closure demo. |
| `once` | ⭐ | 🔲 | Wrap fn so it runs at most once; subsequent calls return the first result. |
| `memoize` | ⭐⭐ | 🔲 | Cache results by arguments. Follow-up: accept a custom **cache-key resolver**. |
| `curry` | ⭐⭐ | 🔲 | `curry(fn)` collects args across calls until `fn.length` is reached, then invokes. `add(1)(2)(3)` and `add(1,2)(3)` both work. |
| `debounce` | ⭐⭐ | 🔲 | Delay calling fn until `wait` ms after the **last** call. Closure holds one timeout id. |
| `throttle` | ⭐⭐ | 🔲 | Call fn at most once per `limit` ms. Contrast with debounce. |

**Interview traps to encode in tests:**
- The returned wrapper must be a **regular function, not an arrow** — otherwise
  `obj.debounced()` loses the dynamic `this`, and the delayed call can't forward it.
- Forward `this` and `args` to fn via `apply`.
- debounce: clearing the previous timeout before scheduling is what makes it a
  debounce; forgetting that turns it into a throttle.
- A `wait` of 0 still defers through `setTimeout` — fn is not called synchronously.
