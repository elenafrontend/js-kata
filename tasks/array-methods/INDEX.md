# array-methods — reimplement Array.prototype

Mechanism: recreate native array methods exactly. The skill being tested is knowledge
of the **spec**, not the happy path — the callback signature, the optional `thisArg`,
and the handling of sparse-array holes are where junior and senior answers diverge.

| Task | ⭐ | Status | What to implement |
|:-----|:--|:-------|:------------------|
| `myMap` | ⭐ | 🔄 | `(value, index, array)` callback, optional `thisArg`, returns a new array, skips holes in sparse arrays. |
| `myFilter` | ⭐ | 🔲 | Keep elements where callback is truthy. Follow-up: implement filter in terms of reduce. |
| `myReduce` | ⭐⭐ | 🔲 | Accumulator with optional initial value; throws on empty array with no initial value. The foundation for many transforms. |
| `myForEach` | ⭐ | 🔲 | Low priority (per GreatFrontEnd skip-list). Side-effect iteration, returns undefined. |
| `myFlat` | ⭐⭐ | 🔲 | Low priority. Flatten nested arrays to a configurable depth (default 1). |

**Interview traps to encode in tests:**
- Sparse arrays: `[1, , 3]` — native map/filter do **not** call the callback on the
  hole (`if (i in this)`); preserve that.
- The optional second arg `thisArg` controls the callback's `this`.
- Pass all three args `(value, index, array)` to the callback.
- Don't mutate the source array.

> Priority: `myMap`, `myFilter`, `myReduce` are core. `myForEach`/`myFlat` can wait —
> interview resources advise not grinding array polyfills beyond map/filter/reduce.
