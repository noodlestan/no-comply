import { createContext } from 'solid-js';

import type { ContextValuesServiceAPI } from '../../../private';

export const ContextValuesContext = createContext<ContextValuesServiceAPI>();
