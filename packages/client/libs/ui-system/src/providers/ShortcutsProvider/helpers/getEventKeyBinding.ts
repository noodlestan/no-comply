import { ShortcutKeyBinding } from '../types';

import { isAlphaCharacter } from './isAlphaCharacter';

export const getEventKeyBinding = (ev: KeyboardEvent): ShortcutKeyBinding => {
    const key = ev.key.toLowerCase();
    const parts: string[] = [];
    if (ev.ctrlKey) {
        parts.push('ctrl');
    }
    if (ev.shiftKey && isAlphaCharacter(key)) {
        parts.push('shift');
    }
    if (ev.altKey) {
        parts.push('alt');
    }
    parts.push(key);
    return parts.join('+') as ShortcutKeyBinding;
};
