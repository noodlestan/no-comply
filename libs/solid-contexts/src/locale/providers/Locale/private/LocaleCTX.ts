import { createContext } from 'solid-js';

import type { LocaleServiceAPI } from '../../../services';

export const LocaleCTX = createContext<LocaleServiceAPI>();
