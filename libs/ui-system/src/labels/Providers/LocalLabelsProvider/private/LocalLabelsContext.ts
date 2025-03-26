import { createContext } from 'solid-js';

import type { LabelMap } from '../../../types';

export const LocalLabelsContext = createContext<LabelMap | null>(null);
