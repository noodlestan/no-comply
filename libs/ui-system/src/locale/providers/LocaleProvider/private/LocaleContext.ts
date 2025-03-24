import { createContext } from 'solid-js';

import type { LocaleServiceAPI } from '../../../services';

export const LocaleContext = createContext<LocaleServiceAPI>();
