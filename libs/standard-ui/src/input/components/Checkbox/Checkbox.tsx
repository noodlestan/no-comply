import {
	combineProps,
	computedProps,
	createClassList,
	staticClassList,
} from '@no-comply/solid-primitives';
import CheckIcon from 'lucide-solid/icons/check';
import { type Component } from 'solid-js';

import { createFocusRing } from '../../../focus';
import { createSizedInputBoxMixin } from '../../mixins';

import styles from './Checkbox.module.scss';
import type { CheckboxProps } from './types';

export const Checkbox: Component<CheckboxProps> = props => {
	let inputRef: HTMLInputElement | undefined;

	const classList = createClassList(styles, () => ({
		Checkbox: true,
		'is-disabled': Boolean(props.disabled),
		'is-invalid': Boolean(props.invalid),
		'is-modified': Boolean(props.modified),
		'is-checked': Boolean(props.checked),
	}));

	const { $root: $focusRingRoot, $focusTarget } = createFocusRing();
	const { $root: $sizedInputRoot } = createSizedInputBoxMixin(props);

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

	const $root = computedProps({
		classList,
	});

	const $ = combineProps($focusRingRoot, $sizedInputRoot, $root);

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
