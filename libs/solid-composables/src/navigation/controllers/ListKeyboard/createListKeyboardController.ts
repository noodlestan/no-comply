import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { $LIST_KEYBOARD } from './constants';
import type { ListKeyboardAPI, ListKeyboardProps } from './types';

export const createListKeyboardController = (props: ListKeyboardProps): ListKeyboardAPI => {
	const [locals, expose] = createExposable($LIST_KEYBOARD, props);

	const onKeyDown = (ev: KeyboardEvent) => {
		const roving = locals.roving;

		switch (ev.key) {
			case 'ArrowUp': {
				ev.preventDefault();
				roving.focusPrev();
				break;
			}
			case 'ArrowDown': {
				ev.preventDefault();
				roving.focusNext();
				break;
			}
			case 'Home': {
				ev.preventDefault();
				roving.focusFirst();
				break;
			}
			case 'End': {
				ev.preventDefault();
				roving.focusLast();
				break;
			}
			case 'Enter': {
				ev.preventDefault();
				locals.onSelect?.(roving.index());
				break;
			}
			case ' ': {
				ev.preventDefault();
				locals.onToggle?.(roving.index());
				break;
			}
		}
	};

	const delegatedMethods = {
		index: () => locals.roving.index(),
		focusNext: () => locals.roving.focusNext(),
		focusPrev: () => locals.roving.focusPrev(),
		focusFirst: () => locals.roving.focusFirst(),
		focusLast: () => locals.roving.focusLast(),
		focusIndex: (i: number) => locals.roving.focusIndex(i),
	};

	return exposeAPI(expose, '$root', {
		$root: { onKeyDown },
		...delegatedMethods,
	});
};
