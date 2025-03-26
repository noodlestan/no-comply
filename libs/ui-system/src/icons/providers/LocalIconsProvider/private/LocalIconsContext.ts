import { createContext } from 'solid-js';

import type { IconMap } from '../../../types';

export const LocalIconsContext = createContext<IconMap | null>(null);
