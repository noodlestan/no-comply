import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const SCHEMA_PATH = resolve(dirname(fileURLToPath(import.meta.url)), '../schemas');
