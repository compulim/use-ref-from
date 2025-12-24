import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      'use-ref-from': './src/index.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true,
    target: 'esnext'
  }
]);
