import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['tasks/**/*.test.js', 'polyfills/**/*.test.js', 'async/**/*.test.js', 'data-structures/**/*.test.js', 'dom/**/*.test.js', 'patterns/**/*.test.js'],
  },
});
