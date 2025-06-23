import { cjs, esm } from '@no-comply/build-tools';
import { config } from './config.mjs';

await Promise.all([cjs(config).watch(), esm(config).watch()]);
