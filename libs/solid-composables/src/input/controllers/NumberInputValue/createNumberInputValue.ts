import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';
import { createSignal } from 'solid-js';

import { isTextEditingShortcut } from '../../helpers';

import { $NUMBER_INPUT_VALUE } from './constants';
import {
	VALID_KEYS,
	calcStepMultiplier,
	getValueRounded,
	hasDecimalSymbol,
	isDecimalSymbol,
	isNumberSymbol,
} from './private';
import type { NumberInputValueAPI, NumberInputValueProps } from './types';

export const createNumberInputValue = (props: NumberInputValueProps): NumberInputValueAPI => {
	const [locals, expose] = createExposable($NUMBER_INPUT_VALUE, props);
	let inputRef: HTMLInputElement;

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

	const setInputRef = (ref: HTMLInputElement) => {
		inputRef = ref;
		// props.ref?.(ref);
	};

	const isCaretAtStart = () => {
		return inputRef.selectionStart === 0;
	};

	const canNotTypeMinus = (value: string) => {
		return !isCaretAtStart() || value?.includes('-');
	};

	const clampedValue = (incremented: number) => {
		const min = locals.min ?? -Infinity;
		const max = locals.max ?? Infinity;
		return Math.min(max, Math.max(min, incremented));
	};

	const incrementValue = (ev: Event, value: number, by: number) => {
		const incremented = getValueRounded(value + by);
		const clamped = clampedValue(incremented);
		onChange(ev, clamped.toString());
	};

	const decrementValue = (ev: Event, value: number, by: number) => {
		const decremented = getValueRounded(value - by);
		const clamped = clampedValue(decremented);
		onChange(ev, clamped.toString());
	};

	const handleInputKey = (ev: KeyboardEvent) => {
		if (isTextEditingShortcut(ev)) {
			return;
		}

		const value = locals.value ?? '';
		const step = locals.step ?? 1;
		const multiplier = calcStepMultiplier(ev, step);

		if (!VALID_KEYS.includes(ev.key) && !isNumberSymbol(ev.key)) {
			ev.preventDefault();
		}
		if (isDecimalSymbol(ev.key) && hasDecimalSymbol(value)) {
			ev.preventDefault();
		}
		if (ev.key === '-' && canNotTypeMinus(value)) {
			ev.preventDefault();
		}
		if (value.includes('-') && isCaretAtStart() && ev.key !== 'ArrowRight') {
			ev.preventDefault();
		}

		if (ev.key === 'ArrowUp') {
			const val = Number(value);
			if (!isNaN(val)) {
				incrementValue(ev, val, multiplier);
			}
		}
		if (ev.key === 'ArrowDown') {
			const val = Number(value);
			if (!isNaN(val)) {
				decrementValue(ev, val, multiplier);
			}
		}
	};

	const handleKeyDown = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
		handleInputKey(ev);
	};

	const handleKeyUp = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	const handleKeyPress = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	const handlers = {
		ref: setInputRef,
		onInput: handleInput,
		onFocus: handleFocus,
		onKeyDown: handleKeyDown,
		onKeyUp: handleKeyUp,
		onKeyPress: handleKeyPress,
	};

	const $root = computedProps(handlers, {
		value,
	});

	return exposeAPI(expose, '$root', {
		$root,
		wasTouched,
		value,
	});
};
