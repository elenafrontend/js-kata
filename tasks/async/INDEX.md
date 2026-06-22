# async — event loop, promises, control flow

Mechanism: scheduling and ordering of asynchronous work. Callbacks first, then
promises, then concurrency control. The recurring senior signal is reasoning about
microtask vs macrotask ordering and about what happens on the error path.

| Task | ⭐ | Status | What to implement |
|:-----|:--|:-------|:------------------|
| `delay` | ⭐ | ✅ | `delay(ms, cb)` — call cb after ms. The simplest async primitive. |
| `mapAsync` | ⭐ | ✅ | Apply an error-first iteratee to each item **sequentially**, collect results in order, short-circuit on first error. |
| `mapAsyncParallel` | ⭐⭐ | 🔲 | Same as mapAsync but run all iteratees **at once**; collect results by index; counter to know when all finished. |
| `promisify` | ⭐⭐ | 🔄 | Turn an error-first `fn(...args, cb)` into a promise-returning function. The Node `util.promisify` analog. |
| `promisePool` | ⭐⭐⭐ | 🔲 | Run async tasks with a **concurrency limit** N — never more than N in flight. The bridge between sequential and Promise.all. |
| `retry` | ⭐⭐ | 🔲 | Retry an async op up to N times on failure, with **exponential backoff** between attempts. |
| `Promise.all` | ⭐⭐⭐ | 🔲 | Resolve to an array of results in input order; reject on first rejection. Edge: empty input → `[]`; normalize non-promises via `Promise.resolve`. |
| `Promise.allSettled` | ⭐⭐ | 🔲 | Never rejects; resolves to `{status, value/reason}[]` once all settle. |
| `Promise.any` | ⭐⭐ | 🔲 | Resolve on first fulfillment; reject with `AggregateError` only if all reject. |
| `Promise.race` | ⭐⭐ | 🔲 | Settle as soon as the first input settles (fulfill or reject). |

**Interview traps to encode in tests:** empty iterable resolves immediately;
result order follows input, not completion; non-promise values are normalized;
the error path stops further work where the spec says so.
