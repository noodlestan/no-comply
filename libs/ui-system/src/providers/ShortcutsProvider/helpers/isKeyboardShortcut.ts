import type { UIShortcut } from '../../../controllers';
import type { KeyboardShortcut } from '../types';

export const isKeyboardShortcut = (shortcut: UIShortcut): shortcut is KeyboardShortcut => {
    return 'keyBinding' in shortcut;
};
