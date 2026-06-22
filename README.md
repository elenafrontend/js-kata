<div align="center">

# ⚡ js-kata

**The JavaScript interview gym — implement the functions interviewers actually ask for.** 🧠

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

*Like Storybook, but for functions*

</div>

> LeetCode prepares you for algorithm rounds. It does **not** prepare you for the
> front-end JavaScript round — where you're asked to implement `Array.prototype.map`,
> `Promise.all`, `debounce`, or `curry` from scratch.
>
> **js-kata** is a curated set of those exact questions. Clone it, implement each
> function yourself, and let the tests tell you when you've nailed it.

---

## 🎯 The idea

Front-end interviews rarely ask you to reverse a binary tree. They ask:

> *"Implement `throttle`."* — *"Write a polyfill for `Promise.all`."* —
> *"Build `Array.prototype.reduce` from scratch."*

These questions test real language mastery: closures, `this`, prototypes, the event
loop, async control flow. This repo collects them in one place, each as a small kata:

- a **task** with a clear spec, rules, and examples (interview-style)
- a **test suite** (Vitest) that defines correctness, including the edge cases that
  separate a junior answer from a senior one
- a **stub** for you to fill in

You implement. Tests run. Green means you're interview-ready on that topic.

---

## 🚀 Getting started

```bash
git clone https://github.com/elenafrontend/js-kata.git
cd js-kata
npm install
```

**Solve a kata (the core loop):**

```bash
npm run test:watch
```

Open a task folder, write your implementation in `solution.js`, and watch the tests
go green in real time. That's the whole workflow — no setup, no boilerplate.

**Browse the catalog (read-only showcase):**

```bash
npm run dev
```

A small React app to read each task's spec, your solution, and its live test status.
Useful for reviewing before an interview. Tasks are auto-discovered from the
filesystem, so the catalog always reflects what's in the repo.

---

## 📂 Categories

Tasks are grouped by the **mechanism** they train, so solving one reinforces the
technique behind the others. Full task lists live in each chapter — see the
**[task catalog](./tasks/README.md)** for the overview.

| Category | Mechanism | Examples |
|:---------|:----------|:---------|
| **[async](./tasks/async/INDEX.md)** | event loop, promises, control flow | `delay`, `mapAsync`, `promisify`, `Promise.all`, `retry` |
| **[closures](./tasks/closures/INDEX.md)** | a closure holds state between calls | `debounce`, `throttle`, `curry`, `memoize`, `once` |
| **[this-binding](./tasks/this-binding/INDEX.md)** | call context & explicit binding | `myBind`, `myCall`, `myApply` |
| **[prototypes](./tasks/prototypes/INDEX.md)** | the prototype chain | `myNew`, `myInstanceof`, `Object.create` |
| **[array-methods](./tasks/array-methods/INDEX.md)** | reimplement `Array.prototype` | `myMap`, `myFilter`, `myReduce` |
| **[data-transform](./tasks/data-transform/INDEX.md)** | reshape data | `flatten`, `groupBy`, `deepClone`, `classnames` |
| **[dom](./tasks/dom/INDEX.md)** | DOM APIs & traversal (jsdom) | `getElementsByClassName`, event delegation |
| **[data-structures](./tasks/data-structures/INDEX.md)** | storage & operation complexity | `EventEmitter`, `LRUCache` |

> The task list is drawn from what top interview resources (GreatFrontEnd, the Front
> End Interview Handbook) report as the most commonly asked JavaScript implementation
> questions — the front-end equivalent of "grinding LeetCode."
>
> Interactive UI components (Tabs, Modal, Autocomplete) are a different interview
> format and live in a separate Storybook repo, not here.

---

## ➕ Adding a kata

Each kata is a folder under `tasks/<category>/<task-name>/` with three files:

```
tasks/closures/debounce/
├── meta.js           ← title, category, difficulty, spec
├── solution.js       ← your implementation (the stub)
└── solution.test.js  ← Vitest tests defining correctness
```

**1. `meta.js`** — the task spec shown in the catalog:

```js
export const meta = {
  id: 'debounce',
  title: 'debounce',
  category: 'closures',
  difficulty: 2,
  signature: 'debounce(fn, wait) => debounced',
  description: `Implement debounce — return a function that delays calling fn
until 'wait' ms have passed since the last call. ...`,
};
```

**2. `solution.js`** — the stub you fill in (default export):

```js
export function debounce(fn, wait) {
  // your implementation
}

export default debounce;
```

**3. `solution.test.js`** — tests that define "correct" (Vitest globals, no imports
needed for `describe`/`it`/`expect`/`vi`):

```js
import { debounce } from './solution.js';

describe('debounce', () => {
  it('calls fn only once after rapid calls', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const d = debounce(fn, 100);
    d(); d(); d();
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledOnce();
  });
});
```

That's it — the task is auto-discovered. No registration step.

---

## 🛠 Stack

- **Vitest** — test runner, the heart of the solve loop
- **Vite + React** — the read-only catalog app
- Tasks auto-discovered via `import.meta.glob`; test statuses surfaced in the UI
  from Vitest's JSON reporter

---

<div align="center">

Built for interview prep. Maintained for fun. 🧠

</div>
