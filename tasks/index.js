// Task registry — built automatically from the filesystem via Vite's
// import.meta.glob. Adding a task = create a folder with meta.js + solution.js
// + solution.test.js. No manual registration needed here.

// meta: needed immediately to render the sidebar → eager (inlined at build time)
const metaModules = import.meta.glob('./**/meta.js', { eager: true });

// solution: the runnable module, loaded only when a task is opened → lazy
// (each value is a () => import(...) function, so Vite code-splits per task)
const solutionModules = import.meta.glob('./**/solution.js');

// source + tests: raw file text for the SourceView / TestRunner panels
const sourceModules = import.meta.glob('./**/solution.js', {
  query: '?raw',
  import: 'default',
});
const testModules = import.meta.glob('./**/solution.test.js', {
  query: '?raw',
  import: 'default',
});

export const taskRegistry = Object.entries(metaModules)
  .map(([path, mod]) => {
    // './async/map-async/meta.js' → './async/map-async'
    const dir = path.replace(/\/meta\.js$/, '');

    return {
      ...mod.meta,
      load: solutionModules[`${dir}/solution.js`],
      loadSource: sourceModules[`${dir}/solution.js`],
      loadTests: testModules[`${dir}/solution.test.js`],
    };
  })
  // order within the list: explicit `order` if present, else by difficulty,
  // then alphabetically by id as a stable tiebreaker
  .sort((a, b) => {
    const byOrder = (a.order ?? a.difficulty ?? 0) - (b.order ?? b.difficulty ?? 0);
    return byOrder !== 0 ? byOrder : a.id.localeCompare(b.id);
  });

export function getCategories(tasks) {
  const map = new Map();

  for (const task of tasks) {
    if (!map.has(task.category)) {
      map.set(task.category, []);
    }
    map.get(task.category).push(task);
  }

  return map;
}
