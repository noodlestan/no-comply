import { useContext } from 'solid-js';

import type { IconMap } from '../../types';

import { LocalIconsCTX } from './private';

export const useLocalIcons = <T extends IconMap>(defaults: T): T => {
	const context = useContext(LocalIconsCTX);
	return { ...defaults, ...context };
};
