import { createContext } from 'solid-js';

import { FocusServiceAPI } from '../types';

export const FocusContext = createContext<FocusServiceAPI>({} as FocusServiceAPI);
