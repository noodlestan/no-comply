import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';
import { createSignal } from 'solid-js';

import { $TEXT_INPUT_VALUE } from './constants';
import type { TextInputValueAPI, TextInputValueProps } from './types';

export const createTextInputValue = (props: TextInputValueProps): TextInputValueAPI => {
	const [locals, expose] = createExposable($TEXT_INPUT_VALUE, props);

	const value = () => locals.value || '';

	const [wasTouched, setWasTouched] = createSignal<boolean>(false);

	const onChange = (ev: Event, v: string) => {
		locals.onChange?.(ev);
		locals.onValueChange?.(v);
	};

	const handleInput = (ev: InputEvent) => {
		const target = ev.target as HTMLInputElement;
		const v = target?.value ?? '';
		onChange(ev, v);
	};

	const handleFocus = () => {
		setWasTouched(true);
	};

	const handleKeyDown = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	const handleKeyUp = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	const handleKeyPress = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	const handlers = {
		onInput: handleInput,
		onFocus: handleFocus,
		onKeyDown: handleKeyDown,
		onKeyUp: handleKeyUp,
		onKeyPress: handleKeyPress,
	};

	const $root = computedProps(handlers, { value });

	return exposeAPI(expose, '$root', {
		$root,
		wasTouched,
		value,
	});
};
