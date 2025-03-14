import { createContext } from 'solid-js';

import { IconsAPI } from '../types';

export const IconsContext = createContext<IconsAPI>({} as IconsAPI);
