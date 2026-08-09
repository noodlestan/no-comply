import { createContext } from 'solid-js';

import type { ContextVariantsServiceAPI } from '../../../private';

export const ContextVariantsCTX = createContext<ContextVariantsServiceAPI>();
