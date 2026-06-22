# data-structures — classic structures

Mechanism: storage, encapsulation, and the time complexity of operations. These show
you can design a small API and reason about why an operation is O(1) vs O(n).

| Task | ⭐ | Status | What to implement |
|:-----|:--|:-------|:------------------|
| `EventEmitter` | ⭐⭐⭐ | 🔲 | `on` / `off` / `emit` / `once`. Method chaining. Stores listeners per event name. |
| `LRUCache` | ⭐⭐⭐ | 🔲 | Fixed-capacity cache evicting the least-recently-used entry. `get`/`put` in O(1) using a `Map` (insertion order) or map + doubly linked list. |

**Interview traps to encode in tests:**
- `EventEmitter`: `once` must auto-remove after firing; `off` during `emit`
  shouldn't break the current dispatch; support multiple listeners per event.
- `LRUCache`: a `get` counts as a use and refreshes recency; `put` on an existing
  key updates and refreshes; eviction happens only past capacity. `Map` keeps
  insertion order, which makes O(1) LRU clean to express.
