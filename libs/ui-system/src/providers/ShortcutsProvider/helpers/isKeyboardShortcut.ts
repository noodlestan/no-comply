import { UIShortcut } from '../../../controllers';
import { KeyboardShortcut } from '../types';

export const isKeyboardShortcut = (shortcut: UIShortcut): shortcut is KeyboardShortcut => {
    return 'keyBinding' in shortcut;
};
