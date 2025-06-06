import { type ClassList, type PickRequired, createClassList } from '@no-comply/solid-primitives';
import { type Component, type JSX, createSignal } from 'solid-js';

import styles from './RangeInput.module.scss';

export type RangeInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type RangeInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type RangeInputProps = {
	id?: string;
	value?: string;
	min?: number;
	max?: number;
	step?: number;
	size?: RangeInputSize;
	length?: number | RangeInputLength;
	autoConfirm?: boolean;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: string) => void;
	ref?: (el: HTMLInputElement) => void;
	classList?: ClassList;
};

const defaultProps: PickRequired<RangeInputProps, 'size' | 'length'> = {
	size: 's',
	length: 'auto',
};

const makeLength = (length: number | RangeInputLength): string => {
	if (typeof length === 'number') {
		return `${length}em`;
	}
	if (length === 'full') {
		return '100%';
	}
	return `var(--input-length-${length})`;
};

const makeStyle = (length?: RangeInputLength | number) =>
	length ? { '--input-length': makeLength(length) } : {};

export const RangeInput: Component<RangeInputProps> = props => {
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
		onKeyDown: handleKeyDown,
		onKeyUp: handleKeyUp,
		onKeyPress: handleKeyPress,
	};

	const classList = createClassList(styles, () => ({
		...props.classList,
		RangeInput: true,
		'is-disabled': Boolean(props.disabled),
		'is-invalid': Boolean(props.invalid),
		'is-modified': Boolean(props.modified),
		'is-touched': wasTouched(),
		[`size-${size()}`]: true,
	}));

	const style = () => makeStyle(length());

	return (
		<input
			id={props.id}
			type="range"
			min={String(props.min)}
			max={String(props.max)}
			step={props.step}
			value={props.value}
			disabled={props.disabled}
			{...handlers}
			ref={props.ref}
			classList={classList()}
			style={style()}
		/>
	);
};
