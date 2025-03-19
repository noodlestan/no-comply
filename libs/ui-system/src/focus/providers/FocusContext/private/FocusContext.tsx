import { createContext } from 'solid-js';

import { FocusContextValue } from '../types';

export const FocusParentContext = createContext<FocusContextValue>({} as FocusContextValue);
