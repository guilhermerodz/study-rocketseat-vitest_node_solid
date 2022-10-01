import { defineConfig } from 'vitest/config'

export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined', // Allow inline tests
  },
  test: {
    includeSource: ['src/**/*.{js,ts}'],
  },
})
