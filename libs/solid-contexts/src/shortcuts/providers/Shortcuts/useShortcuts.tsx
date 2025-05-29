import { useContext } from 'solid-js';

import type { ShortcutsServiceAPI } from '../../services';

import { ShortcutsCTX } from './private';

export const useShortcuts = (): ShortcutsServiceAPI => {
    const context = useContext(ShortcutsCTX);
    if (!context) {
        throw new Error('useShortcuts() must be wrapped in <ShortcutsProvider/>');
    }

    return context;
};
