import { useContext } from 'solid-js';

import { ShortcutsContext } from './private';
import { ShortcutsService } from './types';

export const useShortcuts = (): ShortcutsService => {
    const api = useContext(ShortcutsContext);
    if (!('addShortcuts' in api)) {
        throw new Error('useShortcuts() must be wrapped in <ShortcutsProvider/>');
    }

    return api;
};
