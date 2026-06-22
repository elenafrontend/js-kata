# this-binding — call context

Mechanism: `this` is decided by how a function is **called**, not where it's defined.
These tasks reimplement the three explicit-binding methods, which forces you to work
with `this`, `arguments`, and the prototype chain directly.

| Task | ⭐ | Status | What to implement |
|:-----|:--|:-------|:------------------|
| `myCall` | ⭐⭐ | 🔲 | `fn.myCall(context, ...args)` — invoke fn with `this = context` and the given args. |
| `myApply` | ⭐⭐ | 🔲 | Like myCall but args come as an array. |
| `myBind` | ⭐⭐ | 🔲 | Return a new function permanently bound to `context`, supporting partial application. Edge: bound fn used as a constructor with `new`. |

**Interview traps to encode in tests:**
- Set the function as a temporary property of `context` and call it, so `this` is
  correct, then delete the temp property (classic call/apply trick).
- Handle `null`/`undefined` context → defaults to global (non-strict) — but note
  the trade-offs; tests can assert the simpler spec.
- `myBind`: partial args from bind time + call time must concatenate in order.
