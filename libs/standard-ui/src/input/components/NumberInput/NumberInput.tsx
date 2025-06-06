import { type ClassList, type PickRequired, createClassList } from '@no-comply/solid-primitives';
import { type Component, type JSX, createSignal } from 'solid-js';

import styles from './NumberInput.module.scss';
import { VALID_KEYS } from './constants';
import {
	calcStepMultiplier,
	getValueRounded,
	hasDecimalSymbol,
	isDecimalSymbol,
	isNumberSymbol,
	isTextEditingShortcut,
	makeStyle,
} from './functions';
import type { NumberInputLength, NumberInputSize } from './types';

export type NumberInputProps = {
	id?: string;
	value?: string;
	placeholder?: string;
	size?: NumberInputSize;
	length?: number | NumberInputLength;
	maxLength?: number;
	min?: number;
	max?: number;
	step?: number;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: string) => void;
	ref?: (el: HTMLInputElement) => void;
	classList?: ClassList;
};

const defaultProps: PickRequired<NumberInputProps, 'size' | 'length'> = {
	size: 's',
	length: 'auto',
};

export const NumberInput: Component<NumberInputProps> = props => {
	let inputRef: HTMLInputElement;

	const size = () => props.size ?? defaultProps.size;
	const length = () => props.length ?? defaultProps.length;

	const [wasTouched, setWasTouched] = createSignal<boolean>(false);

	const onChange = (ev: Event, v: string) => {
		props.onChange?.(ev);
		props.onValueChange?.(v);
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
		props.ref?.(ref);
	};

	const isCaretAtStart = () => {
		return inputRef.selectionStart === 0;
	};

	const canNotTypeMinus = (value: string) => {
		return !isCaretAtStart() || value?.includes('-');
	};

	const clampedValue = (incremented: number) => {
		const min = props.min ?? -Infinity;
		const max = props.max ?? Infinity;
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

		const value = props.value ?? '';
		const step = props.step ?? 1;
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
		onInput: handleInput,
		onFocus: handleFocus,
		onKeyDown: handleKeyDown,
		onKeyUp: handleKeyUp,
		onKeyPress: handleKeyPress,
	};

	const classList = createClassList(styles, () => ({
		...props.classList,
		NumberInput: true,
		'is-disabled': Boolean(props.disabled),
		'is-invalid': Boolean(props.invalid),
		'is-modified': Boolean(props.modified),
		'is-touched': wasTouched(),
		[`size-${size()}`]: true,
	}));

	const style = () => makeStyle(length(), props.maxLength);

	return (
		<input
			id={props.id}
			type="text"
			inputMode="decimal"
			pattern="[0-9]"
			placeholder={props.placeholder}
			min={props.min}
			max={props.max}
			step={props.step}
			value={props.value}
			disabled={props.disabled}
			{...handlers}
			// eslint-disable-next-line solid/reactivity
			ref={setInputRef}
			classList={classList()}
			style={style()}
		/>
	);
};
