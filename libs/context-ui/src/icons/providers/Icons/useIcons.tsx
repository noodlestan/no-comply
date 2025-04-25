import { useContext } from 'solid-js';

import type { IconsServiceAPI } from '../../types';

import { IconsContextCTX } from './private';

export const useIcons = (): IconsServiceAPI => {
    const context = useContext(IconsContextCTX);
    if (!context) {
        throw new Error('useIcons() must be wrapped in <IconsProvider/>');
    }

    return context;
};
