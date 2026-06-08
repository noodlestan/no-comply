import { createSignal } from 'solid-js';

import type {
	FocusContext,
	FocusContextOptions,
	FocusContextOwnerAPI,
	FocusContextValue,
} from './types';

export const createFocusContextPrivate = (
	options: FocusContextOptions = {},
	maybeParent?: FocusContext,
): FocusContextValue => {
	const [children, setChildren] = createSignal<FocusContext[]>([]);
	const [hasFocus, setHasFocus] = createSignal(false);
	const [hasFocusWithin, setHasFocusWithin] = createSignal(false);

	let targetEl: HTMLElement;

	const setFocus = () => {
		if (targetEl) {
			targetEl.focus();
			return;
		}
		maybeParent?.setFocus();
	};

	const setTargetRef = (el: HTMLElement) => {
		targetEl = el;
		if (options.autoFocus) {
			setFocus();
		}
	};

	const isDisabled = () => Boolean(options.disabled);

	const hasFocusWithinOrNested = () => {
		if (hasFocusWithin()) {
			return true;
		}
		return Boolean(children().find(focus => focus.hasFocusWithin()));
	};

	const context: FocusContext = {
		type: 'focus',
		setTargetRef,
		isDisabled,
		setFocus,
		hasFocus,
		setHasFocus,
		hasFocusWithin: hasFocusWithinOrNested,
		setHasFocusWithin,
	};

	const addChild = (child: FocusContext) => {
		setChildren(prev => [...prev, child]);
	};

	const removeChild = (child: FocusContext) => {
		setChildren(prev => prev.filter(context => context !== child));
	};

	const ownerAPI: FocusContextOwnerAPI = {
		addChild,
		removeChild,
	};

	return [context, ownerAPI];
};
