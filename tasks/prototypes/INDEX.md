# prototypes — the prototype chain

Mechanism: objects delegate property lookups up a chain of `[[Prototype]]` links.
These tasks make the chain explicit by reimplementing the language features built
on top of it.

| Task | ⭐ | Status | What to implement |
|:-----|:--|:-------|:------------------|
| `myNew` | ⭐⭐ | 🔲 | Reimplement the `new` operator: create an object whose prototype is `Ctor.prototype`, run the constructor with `this` bound to it, return it (or the object the ctor returns). |
| `myObjectCreate` | ⭐⭐ | 🔲 | `Object.create(proto)` — make a new object with the given prototype. |
| `myInstanceof` | ⭐⭐ | 🔲 | Walk the prototype chain of an object looking for `Ctor.prototype`. |

**Interview traps to encode in tests:**
- `myNew`: if the constructor returns an **object**, that object wins; if it returns
  a primitive, the freshly created instance is returned.
- `myInstanceof`: stop at `null` (end of chain); a plain object is `instanceof Object`.
- The created object's `__proto__` must point at `Ctor.prototype`, not a copy.
