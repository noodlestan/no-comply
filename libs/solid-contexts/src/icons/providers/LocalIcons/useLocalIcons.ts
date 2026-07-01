import type { IconMap } from '@no-comply/solid-primitives';
import { useContext } from 'solid-js';

import { LocalIconsCTX } from './private';

export const useLocalIcons = <T extends IconMap>(defaults: T): T => {
	const context = useContext(LocalIconsCTX);
	return { ...defaults, ...context };
};
