/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
	staticClassList,
} from '@no-comply/solid-primitives';
import CheckIcon from 'lucide-solid/icons/check';
import { type Component } from 'solid-js';

import { createFocusRing } from '../../../focus';

import styles from './Checkbox.module.scss';
import type { CheckboxProps } from './types';

const defaultProps: PickRequired<CheckboxProps, 'size'> = {
	size: 's',
};

export const Checkbox: Component<CheckboxProps> = props => {
	let inputRef: HTMLInputElement | undefined;

	const size = () => props.size ?? defaultProps.size;

	const { $root: $focusRingRoot, $focusTarget } = createFocusRing();

	const setInputRef = (ref: HTMLInputElement) => {
		inputRef = ref;
		props.ref?.(ref);
	};

	const handleChange = (ev: Event) => {
		props.onChange?.(ev);
		props.onValueChange?.(!props.checked);
	};

	const handleMouseDown = (ev: MouseEvent) => {
		ev.stopImmediatePropagation();
		ev.preventDefault();
		inputRef?.focus();
	};

	const handleKeyDown = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
		if (ev.key === ' ' || ev.key === 'Enter') {
			ev.preventDefault();
			handleChange(ev);
		}
	};

	const handleClick = (ev: MouseEvent) => {
		ev.stopImmediatePropagation();
		handleChange(ev);
	};

	const handlers = {
		onMouseDown: handleMouseDown,
		onClick: handleClick,
	};

	const inputHandlers = {
		// onChange: handleChange,
		onKeyDown: handleKeyDown,
	};

	const classList = createClassList(styles, () => ({
		Checkbox: true,
		[`size-${size()}`]: true,
		'is-disabled': Boolean(props.disabled),
		'is-invalid': Boolean(props.invalid),
		'is-modified': Boolean(props.modified),
		'is-checked': Boolean(props.checked),
	}));

	const $root = computedProps({
		classList,
	});

	const $ = combineProps($focusRingRoot, $root);

	return (
		<div {...handlers} {...$}>
			<span classList={staticClassList(styles, '-Control')}>
				<CheckIcon aria-hidden />
				<input
					id={props.id}
					// eslint-disable-next-line solid/reactivity
					ref={setInputRef}
					type="checkbox"
					checked={props.checked}
					disabled={props.disabled}
					{...inputHandlers}
					{...$focusTarget}
					aria-label={props.label}
				/>
			</span>
		</div>
	);
};
