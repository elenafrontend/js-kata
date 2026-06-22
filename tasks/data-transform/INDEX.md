# data-transform — reshape data

Mechanism: utility functions that chew through data structures. Unlike array-methods,
there's no native contract to memorize — you're judged on clean, correct
transformation. Most of these reduce down to "iterate and accumulate."

| Task | ⭐ | Status | What to implement |
|:-----|:--|:-------|:------------------|
| `flatten` | ⭐⭐ | 🔲 | Flatten a nested array to a configurable depth. Recursion pattern. |
| `chunk` | ⭐ | 🔲 | Split an array into groups of size n. |
| `uniq` | ⭐ | 🔲 | Remove duplicates, preserving first-seen order. |
| `groupBy` | ⭐⭐ | 🔲 | Group items into an object keyed by an iteratee's result. Essentially a reduce. |
| `deepClone` | ⭐⭐⭐ | 🔲 | Recursively clone nested objects/arrays. Edge cases: **circular refs (WeakMap), Date, Map, Set**, and preserving prototype. |
| `classnames` | ⭐⭐ | 🔲 | The `clsx`/`classnames` utility: join truthy class names from strings, arrays, and `{class: bool}` objects. |
| `keysToCamelCase` | ⭐⭐ | 🔲 | Recursively convert all object keys snake_case → camelCase (and a snake variant). Common real-world ask. |
| `myJSONStringify` | ⭐⭐⭐ | 🔲 | Senior topic. Reimplement a subset of `JSON.stringify`, handling its edge cases. |

**Interview traps to encode in tests:**
- `deepClone`: a naive recursion infinite-loops on circular refs — track visited
  objects in a `WeakMap`. `structuredClone` is the modern native alternative (mention it).
- `flatten`: handle depth 0, depth Infinity.
- `groupBy`: empty input → `{}`; preserve insertion order of groups.
