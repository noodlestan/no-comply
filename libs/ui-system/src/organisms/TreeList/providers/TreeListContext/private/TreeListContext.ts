import { createContext } from 'solid-js';

import type { TreeListContextValue } from '../../../private';

export const TreeListContext = createContext<TreeListContextValue | null>(null);
