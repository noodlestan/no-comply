import { useContext } from 'solid-js';

import { ShortcutsContext } from './private';
import { ShortcutsService } from './types';

export const useShortcuts = (): ShortcutsService => {
    const context = useContext(ShortcutsContext);
    if (!context) {
        throw new Error('useShortcuts() must be wrapped in <ShortcutsProvider/>');
    }

    return context;
};
