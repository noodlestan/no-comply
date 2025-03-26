import { createContext } from 'solid-js';

import type { FocusServiceAPI } from '../../../services';

export const FocusProviderContext = createContext<FocusServiceAPI>();
