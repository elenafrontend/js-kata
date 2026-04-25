export const tests = [
  {
    name: 'maps values with callback',
    fn: () => {
      const result = [1, 2, 3].myMap((x) => x * 2);
      return JSON.stringify(result) === JSON.stringify([2, 4, 6]);
    },
  },
  {
    name: 'passes index and array to callback',
    fn: () => {
      const result = ['a', 'b'].myMap((val, idx, arr) => `${val}-${idx}-${arr.length}`);
      return JSON.stringify(result) === JSON.stringify(['a-0-2', 'b-1-2']);
    },
  },
  {
    name: 'respects thisArg',
    fn: () => {
      const ctx = { multiplier: 10 };
      const result = [1, 2].myMap(function (x) {
        return x * this.multiplier;
      }, ctx);
      return JSON.stringify(result) === JSON.stringify([10, 20]);
    },
  },
  {
    name: 'returns empty array for empty input',
    fn: () => {
      const result = [].myMap((x) => x);
      return JSON.stringify(result) === JSON.stringify([]);
    },
  },
];
