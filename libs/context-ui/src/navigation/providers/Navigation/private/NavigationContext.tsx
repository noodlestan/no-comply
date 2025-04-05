import { createContext } from 'solid-js';

import type { NavigationServiceAPI } from '../../../services';

export const NavigationContext = createContext<NavigationServiceAPI>();
