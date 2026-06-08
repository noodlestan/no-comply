import { type PickRequired, createClassList } from '@no-comply/solid-primitives';
import { type Component, type JSX, createSignal } from 'solid-js';

import styles from './TextInput.module.scss';
import type { TextInputLength, TextInputProps } from './types';

const defaultProps: PickRequired<TextInputProps, 'size' | 'length'> = {
	size: 's',
	length: 'auto',
};

const makeLength = (length: number | TextInputLength, maxLength?: number): string => {
	if (typeof length === 'number') {
		return `${length}em`;
	}
	if (length === 'auto' && maxLength) {
		return `${maxLength * 0.63 + 0.5}em`;
	}
	if (length === 'full') {
		return '100%';
	}
	return `var(--input-length-${length})`;
};

const makeStyle = (length?: TextInputLength | number, maxLength?: number) =>
	length ? { '--input-length': makeLength(length, maxLength) } : {};

export const TextInput: Component<TextInputProps> = props => {
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
		// onBlur: handleBlur,
		onKeyDown: handleKeyDown,
		onKeyUp: handleKeyUp,
		onKeyPress: handleKeyPress,
	};

	const classList = createClassList(styles, () => ({
		...props.classList,
		TextInput: true,
		'is-disabled': Boolean(props.disabled),
		'is-invalid': Boolean(props.invalid),
		'is-modified': Boolean(props.modified),
		'was-touched': wasTouched(),
		[`size-${size()}`]: true,
	}));

	const style = () => makeStyle(length(), props.maxLength);

	return (
		<input
			id={props.id}
			type={props.type}
			placeholder={props.placeholder}
			maxLength={props.maxLength}
			min={props.min}
			max={props.max}
			value={props.value}
			disabled={props.disabled}
			{...handlers}
			ref={props.ref}
			classList={classList()}
			style={style()}
		/>
	);
};
