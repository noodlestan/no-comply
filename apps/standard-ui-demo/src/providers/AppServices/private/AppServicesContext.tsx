import { createContext } from 'solid-js';

import type { AppServicesAPI } from '../types';

export const AppServicesContext = createContext<AppServicesAPI>();
