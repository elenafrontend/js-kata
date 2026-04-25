# js-kata

JavaScript practice tasks — polyfills, async patterns, data structures, DOM manipulation.

## Structure

```
polyfills/       — custom implementations of built-in methods
async/           — throttle, debounce, retry, promise patterns
data-structures/ — event emitter, LRU cache, etc.
dom/             — DOM manipulation, event delegation
patterns/        — closures, currying, memoization
```

## Setup

```bash
npm install
```

## How to run tests

```bash
# run all tests once
npm test

# watch mode (re-runs on file change)
npm run test:watch

# run tests for a specific file
npx vitest run polyfills/array-map.test.js
```

## Task format

Each task has two files:

```
polyfills/
├── array-map.js        — solution
└── array-map.test.js   — tests
```

Write the solution, write the tests, run `npm run test:watch` — and iterate.
