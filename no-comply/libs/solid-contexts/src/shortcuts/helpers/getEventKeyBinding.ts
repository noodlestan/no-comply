import type { ShortcutKeyBinding } from '../types';

import { isAlphaCharacter } from './isAlphaCharacter';

export const getEventKeyBinding = (ev: KeyboardEvent): ShortcutKeyBinding => {
	const key = ev.key.toLowerCase();
	const parts: string[] = [];
	if (ev.ctrlKey && key !== 'ctrl') {
		parts.push('ctrl');
	}
	if (ev.shiftKey && isAlphaCharacter(key)) {
		parts.push('shift');
	}
	if (ev.altKey && key !== 'alt') {
		parts.push('alt');
	}
	parts.push(key);
	return parts.join('+') as ShortcutKeyBinding;
};
