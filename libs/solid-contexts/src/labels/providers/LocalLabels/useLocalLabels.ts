import { useContext } from 'solid-js';

import type { LabelMap } from '../../types';

import { LocalLabelsCTX } from './private';

export const useLocalLabels = <T extends LabelMap>(defaults: T): T => {
	const context = useContext(LocalLabelsCTX);
	return { ...defaults, ...context };
};
