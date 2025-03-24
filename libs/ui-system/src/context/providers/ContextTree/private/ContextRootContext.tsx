import { createContext } from 'solid-js';

import type { ContextOwnerAPI } from '../../../private';

export const ContextRootContext = createContext<ContextOwnerAPI>();
