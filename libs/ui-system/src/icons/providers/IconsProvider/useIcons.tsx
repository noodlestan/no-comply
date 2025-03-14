import { useContext } from 'solid-js';

import { IconsContext } from './private';
import { IconsAPI } from './types';

export const useIcons = (): IconsAPI => {
    const api = useContext(IconsContext);
    if (!('getIcon' in api)) {
        throw new Error('useIcons() must be wrapped in <IconsProvider/>');
    }

    return api;
};
