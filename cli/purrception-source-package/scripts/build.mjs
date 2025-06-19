import { cjs, esm } from '@no-comply/build-tools';
import { config } from './config.mjs';

await cjs(config).build();
await esm(config).build();
