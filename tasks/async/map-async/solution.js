/**
 * mapAsync(items, iteratee, done)
 *
 *   items:    T[]
 *   iteratee: (item, cb) => void   // cb(err, result)
 *   done:     (err, results?) => void
 */
export function mapAsync(items, iteratee, done) {
  const results = [];

  if (items?.length === 0) {
    return done(null, results);
  }

  function processItem(index) {
    if (index === items.length) return done(null, results);

    iteratee(items[index], (error, result) => {
      if (error) return done(error);

      results.push(result);
      processItem(index + 1);
    });
  }

  processItem(0);
}

// --- temp debug ---
mapAsync(
  [1, 2, 3],
  (n, cb) => cb(null, n * 2),
  (err, res) => console.log('RESULT:', err, res)
);

export default mapAsync;
