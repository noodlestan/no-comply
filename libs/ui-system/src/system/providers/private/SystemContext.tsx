import { createContext } from 'solid-js';

import type { SystemContextServiceAPI } from '../../services';

export const SystemContext = createContext<SystemContextServiceAPI>();
