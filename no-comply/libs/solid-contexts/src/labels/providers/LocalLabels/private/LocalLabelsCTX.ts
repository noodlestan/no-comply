import type { LabelMap } from '@no-comply/solid-primitives';
import { createContext } from 'solid-js';

export const LocalLabelsCTX = createContext<LabelMap | null>(null);
