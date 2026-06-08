import { createContext } from 'solid-js';

import type { IconMap } from '../../../types';

export const LocalIconsCTX = createContext<IconMap | null>(null);
