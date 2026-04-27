/**
 * Minimal browser-compatible test runner.
 * Mirrors Vitest/Jest API: describe, it, expect.
 * Collects results instead of throwing — so the UI can render pass/fail.
 */

export function createTestRunner() {
  const results = [];
  let currentSuite = '';

  function describe(name, fn) {
    currentSuite = name;
    fn();
    currentSuite = '';
  }

  function it(name, fn) {
    const fullName = currentSuite ? `${currentSuite} > ${name}` : name;
    try {
      fn();
      results.push({ name: fullName, status: 'pass' });
    } catch (err) {
      results.push({ name: fullName, status: 'fail', error: err.message });
    }
  }

  function expect(actual) {
    return {
      toBe(expected) {
        if (actual !== expected) {
          throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
        }
      },
      toEqual(expected) {
        const a = JSON.stringify(actual);
        const b = JSON.stringify(expected);
        if (a !== b) {
          throw new Error(`Expected ${b}, got ${a}`);
        }
      },
      toBeTruthy() {
        if (!actual) {
          throw new Error(`Expected truthy, got ${JSON.stringify(actual)}`);
        }
      },
      toBeFalsy() {
        if (actual) {
          throw new Error(`Expected falsy, got ${JSON.stringify(actual)}`);
        }
      },
      toThrow() {
        if (typeof actual !== 'function') {
          throw new Error('Expected a function');
        }
        let threw = false;
        try {
          actual();
        } catch {
          threw = true;
        }
        if (!threw) {
          throw new Error('Expected function to throw');
        }
      },
      toHaveLength(expected) {
        if (actual.length !== expected) {
          throw new Error(`Expected length ${expected}, got ${actual.length}`);
        }
      },
    };
  }

  return { describe, it, expect, results };
}
