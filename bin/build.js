// eslint-disable-next-line import/no-extraneous-dependencies
import { build } from 'esbuild';

build({
  entryPoints: ['app.ts'],
  outdir: 'dist',
  minify: true,
  bundle: true,
  format: 'cjs',
  loader: {
    '.ts': 'ts',
  },
  platform: 'node',
  target: 'node12',
  write: true,
  tsconfig: 'tsconfig.json',
});
