import { useContext } from 'solid-js';

import { IconsContext } from './private';
import { IconsAPI } from './types';

export const useIcons = (): IconsAPI => {
    const context = useContext(IconsContext);
    if (!context) {
        throw new Error('useIcons() must be wrapped in <IconsProvider/>');
    }

    return context;
};
