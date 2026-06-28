import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	pickProps,
} from '@no-comply/solid-primitives';
import { type JSX, createSignal } from 'solid-js';

import {
	INPUT_BOX_MIXIN_PROPS,
	SIZED_INPUT_BOX_MIXIN_PROPS,
	createInputBoxMixin,
	createSizedInputBoxMixin,
} from '../../mixins';

import { $NUMBER_INPUT, VALID_KEYS } from './constants';
import {
	calcStepMultiplier,
	getValueRounded,
	hasDecimalSymbol,
	isDecimalSymbol,
	isNumberSymbol,
	isTextEditingShortcut,
	makeStyle,
} from './functions';
import type { NumberInputAPI, NumberInputProps } from './types';

const defaultProps: PickRequired<NumberInputProps, 'length'> = {
	length: 'auto',
};

export const createNumberInput = (props: NumberInputProps): NumberInputAPI => {
	const [locals, expose, compose] = createExposable($NUMBER_INPUT, props);
	let inputRef: HTMLInputElement;

	const length = () => locals.length ?? defaultProps.length;

	const [wasTouched, setWasTouched] = createSignal<boolean>(false);

	const onChange = (ev: Event, v: string) => {
		locals.onChange?.(ev);
		locals.onValueChange?.(v);
	};

	const handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = ev => {
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
		setInputRef,
		onInput: handleInput,
		onFocus: handleFocus,
		onKeyDown: handleKeyDown,
		onKeyUp: handleKeyUp,
		onKeyPress: handleKeyPress,
	};

	const $root = computedProps(handlers, {
		style: () => makeStyle(length(), locals.maxLength),
		value: () => locals.value,
	});

	const inputBoxMixinProps = combineProps(
		pickProps(locals, INPUT_BOX_MIXIN_PROPS),
		computedProps({
			touched: wasTouched,
		}),
	);
	const { $root: $inputBoxMixinRoot } = compose(createInputBoxMixin(inputBoxMixinProps));

	const sizedInputBoxMixinProps = pickProps(locals, SIZED_INPUT_BOX_MIXIN_PROPS);
	const { $root: $sizedInputBoxMixinRoot } = compose(
		createSizedInputBoxMixin(sizedInputBoxMixinProps),
	);
	return exposeAPI(expose, '$root', {
		$root: combineProps($inputBoxMixinRoot, $sizedInputBoxMixinRoot, $root),
	});
};
