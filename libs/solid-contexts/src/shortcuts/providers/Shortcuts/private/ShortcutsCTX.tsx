import { createContext } from 'solid-js';

import type { ShortcutsServiceAPI } from '../../../services';

export const ShortcutsCTX = createContext<ShortcutsServiceAPI>();
