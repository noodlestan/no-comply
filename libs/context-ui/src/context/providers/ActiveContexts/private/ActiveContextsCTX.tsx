import { createContext } from 'solid-js';

import type { ActiveContextsServiceAPI } from '../../../services';

export const ActiveContextsCTX = createContext<ActiveContextsServiceAPI>();
