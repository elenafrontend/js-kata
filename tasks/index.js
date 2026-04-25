import { meta as arrayMap } from './polyfills/array-map/meta.js';

export const taskRegistry = [
  {
    ...arrayMap,
    load: () => import('./polyfills/array-map/solution.js'),
    loadTests: () =>
      fetch('/tasks/polyfills/array-map/solution.test.js').then((r) => r.text()),
    loadSource: () =>
      fetch('/tasks/polyfills/array-map/solution.js').then((r) => r.text()),
  },
];

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
