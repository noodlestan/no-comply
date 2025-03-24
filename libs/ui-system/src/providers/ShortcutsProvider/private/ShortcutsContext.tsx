import { createContext } from 'solid-js';

import type { ShortcutsService } from '../types';

export const ShortcutsContext = createContext<ShortcutsService>();
