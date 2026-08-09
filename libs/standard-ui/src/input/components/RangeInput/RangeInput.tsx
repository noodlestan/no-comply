import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';
import { type Component, type JSX, createSignal } from 'solid-js';

import { createContentLengthMixin } from '../../../content';

import styles from './RangeInput.module.scss';
import type { RangeInputProps } from './types';

const defaultProps: PickRequired<RangeInputProps, 'size' | 'length'> = {
	size: 's',
	length: 'auto',
};

export const RangeInput: Component<RangeInputProps> = props => {
	const size = () => props.size ?? defaultProps.size;

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

	const $root = computedProps({
		classList,
	});

	const { $root: $contentLengthMixinRoot } = createContentLengthMixin(props);

	const $ = combineProps($contentLengthMixinRoot, $root);

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
			{...$}
		/>
	);
};
