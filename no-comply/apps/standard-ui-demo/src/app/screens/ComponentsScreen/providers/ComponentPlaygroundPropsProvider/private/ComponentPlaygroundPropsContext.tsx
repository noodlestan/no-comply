import { createContext } from 'solid-js';

import type { ComponentPlaygroundPropsContextValue } from './types';

export const ComponentPlaygroundPropsContext =
	createContext<ComponentPlaygroundPropsContextValue>();
