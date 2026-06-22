# dom — DOM APIs & traversal (jsdom)

Mechanism: reimplement DOM lookups and event patterns by walking the DOM tree. Same
"implement + test" shape as the rest of the repo, but tests run in a **jsdom**
environment (Vitest `environment: 'jsdom'`).

> Scope: these are DOM *algorithms* (traverse, match, delegate). Interactive UI
> components (Tabs, Modal, Autocomplete) belong in a separate Storybook repo.

| Task | ⭐ | Status | What to implement |
|:-----|:--|:-------|:------------------|
| `getElementsByClassName` | ⭐⭐ | 🔲 | Traverse the DOM subtree and collect elements containing all the given class names. |
| `getElementsByTagName` | ⭐ | 🔲 | Collect all descendants matching a tag name. |
| `eventDelegation` | ⭐⭐ | 🔲 | Attach one listener on a parent that handles events from matching children (the delegation pattern). |
| `domTraversal` | ⭐⭐ | 🔲 | Find next/previous element, walk to a common ancestor, or serialize the tree. |

**Setup note:** add a per-file pragma or config so these run under jsdom:
```js
// @vitest-environment jsdom
```

**Interview traps to encode in tests:**
- Traverse the full subtree (children of children), not just direct children.
- `getElementsByClassName` matches elements that have **all** requested classes.
- Delegation: check `event.target.matches(selector)`, and handle clicks on nested
  descendants of the intended target.
