import { mapAsync } from './solution.js';

describe('mapAsync', () => {
  it('maps every item, preserving order', () => {
    return new Promise((resolve) => {
      mapAsync([1, 2, 3], (n, cb) => cb(null, n * 2), (err, results) => {
        expect(err).toBeNull();
        expect(results).toEqual([2, 4, 6]);
        resolve();
      });
    });
  });

  it('runs sequentially — next starts only after previous finished', () => {
    vi.useFakeTimers();
    const order = [];

    const iteratee = (n, cb) => {
      order.push(`start ${n}`);
      setTimeout(() => {
        order.push(`end ${n}`);
        cb(null, n);
      }, 10);
    };

    const done = vi.fn();
    mapAsync([1, 2], iteratee, done);

    expect(order).toEqual(['start 1']);

    vi.advanceTimersByTime(10);
    expect(order).toEqual(['start 1', 'end 1', 'start 2']);

    vi.advanceTimersByTime(10);
    expect(order).toEqual(['start 1', 'end 1', 'start 2', 'end 2']);
    expect(done).toHaveBeenCalledWith(null, [1, 2]);

    vi.useRealTimers();
  });

  it('short-circuits on first error', () => {
    return new Promise((resolve) => {
      const boom = new Error('boom');
      const iteratee = vi.fn((n, cb) => (n === 2 ? cb(boom) : cb(null, n)));

      mapAsync([1, 2, 3], iteratee, (err, results) => {
        expect(err).toBe(boom);
        expect(results).toBeUndefined();
        expect(iteratee).toHaveBeenCalledTimes(2);
        resolve();
      });
    });
  });

  it('handles empty array', () => {
    return new Promise((resolve) => {
      mapAsync([], (n, cb) => cb(null, n), (err, results) => {
        expect(err).toBeNull();
        expect(results).toEqual([]);
        resolve();
      });
    });
  });
});
