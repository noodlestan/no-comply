import { createContext } from 'solid-js';

import type { ContextOwnerAPI } from '../../../private';

export const ContextNodeContext = createContext<ContextOwnerAPI>();
