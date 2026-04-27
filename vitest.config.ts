import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Custom include pattern. Test files follow the `*.test.ts`
    // convention repo-wide.
    include: ['src/**/*.spec.ts'],
  },
});
