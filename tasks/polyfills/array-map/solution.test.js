import './solution.js';

describe('Array.prototype.myMap', () => {
  it('maps values with callback', () => {
    expect([1, 2, 3].myMap((x) => x * 2)).toEqual([2, 4, 6]);
  });

  it('passes index and array to callback', () => {
    const result = ['a', 'b'].myMap((val, idx, arr) => `${val}-${idx}-${arr.length}`);
    expect(result).toEqual(['a-0-2', 'b-1-2']);
  });

  it('respects thisArg', () => {
    const ctx = { multiplier: 10 };
    const result = [1, 2].myMap(function (x) {
      return x * this.multiplier;
    }, ctx);
    expect(result).toEqual([10, 20]);
  });

  it('returns empty array for empty input', () => {
    expect([].myMap((x) => x)).toEqual([]);
  });
});
