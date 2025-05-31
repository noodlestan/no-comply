import { createContext } from 'solid-js';

import type { ExposeServiceAPI } from '../../../services';

export const ExposeCTX = createContext<ExposeServiceAPI>();
