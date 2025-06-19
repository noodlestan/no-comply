import { commonConfig } from './common.mjs';

export const cjsConfig = {
  ...commonConfig,
  tsconfig: 'tsconfig.cjs.json',
  bundle: true,
  format: 'cjs',
  sourcemap: true,
  platform: 'node',
  outdir: 'dist/cjs',
  plugins: [],
};
