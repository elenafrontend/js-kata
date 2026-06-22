export const meta = {
  id: 'map-async',
  title: 'mapAsync',
  category: 'async',
  difficulty: 1,
  signature: 'mapAsync(items, iteratee, done)',
  description: `Apply an async, error-first "iteratee" to every element of an array ONE AT A TIME — the next element must not start until the previous one has finished. Collect results into an array preserving order, then pass them to the final "done" callback. This is the callback-based ancestor of Promise.all with concurrency 1. No promises, no async/await.

Rules:
1. Sequential — iteratee for items[i+1] starts only after the callback for items[i] fired. Never run two in parallel.
2. Order — results[i] corresponds to items[i].
3. Error short-circuit — if any iteratee calls cb(error), immediately call done(error) and process no further items.
4. Empty — mapAsync([], ...) calls done(null, []).

Example 1:
  items    = [1, 2, 3]
  iteratee = (n, cb) => cb(null, n * 2)
  → done(null, [2, 4, 6])

Example 2 (error):
  items    = [1, 2, 3]
  iteratee = (n, cb) => n === 2 ? cb(new Error('boom')) : cb(null, n)
  → done(Error('boom'))   // item 3 is never processed

Constraints:
  • iteratee always calls its cb exactly once.
  • Do not mutate items.
  • Think: why does items.forEach(it => iteratee(it, cb)) break rule 1?`,
  defaultInput: '',
  defaultCallback: '',
};
