import { createContext } from 'solid-js';

import type { SelectionAPI } from '../types';

export const SelectionContext = createContext<SelectionAPI>();
