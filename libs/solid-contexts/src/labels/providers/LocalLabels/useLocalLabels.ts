import type { LabelMap } from '@no-comply/solid-primitives';
import { useContext } from 'solid-js';

import { LocalLabelsCTX } from './private';

export const useLocalLabels = <T extends LabelMap>(defaults: T): T => {
	const context = useContext(LocalLabelsCTX);
	return { ...defaults, ...context };
};
