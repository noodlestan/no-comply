import { createContext } from 'solid-js';

import type { LabelMap } from '../../../types';

export const LocalLabelsCTX = createContext<LabelMap | null>(null);
