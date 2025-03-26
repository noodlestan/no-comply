import { useContext } from 'solid-js';

import type { IconMap } from '../../types';

import { LocalIconsContext } from './private';

export const useLocalIcons = <T extends IconMap>(defaults: T): T => {
    const context = useContext(LocalIconsContext);
    return { ...defaults, ...context };
};
