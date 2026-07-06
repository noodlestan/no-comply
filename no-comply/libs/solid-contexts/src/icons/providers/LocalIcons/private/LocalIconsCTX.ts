import type { IconMap } from '@no-comply/solid-primitives';
import { createContext } from 'solid-js';

export const LocalIconsCTX = createContext<IconMap | null>(null);
