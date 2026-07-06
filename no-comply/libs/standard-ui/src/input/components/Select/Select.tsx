import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';
import { type ParentComponent, Show } from 'solid-js';

import { createContentLengthMixin } from '../../../content';

import styles from './Select.module.scss';
import type { SelectProps } from './types';

const defaultProps: PickRequired<SelectProps, 'size' | 'length'> = {
	size: 's',
	length: 'full',
};

export const Select: ParentComponent<SelectProps> = props => {
	const size = () => props.size ?? defaultProps.size;

	const handleChange = (ev: Event) => {
		const target = ev.target as HTMLSelectElement;
		props.onChange?.(ev);
		props.onValueChange?.(target?.value ?? '');
	};

	const handleKeyDown = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	const handleKeyUp = (ev: KeyboardEvent) => {
		ev.stopImmediatePropagation();
	};

	// NOTE: using spread operator in `<select>` causes expected selected option to not be selected
	// because attributes/children are committed to the DOM in a different order
	// See: https://github.com/solidjs/solid/issues/1754
	// const handlers = {
	//     onChange: handleChange,
	//     onKeyDown: handleKeyDown,
	//     onKeyUp: handleKeyUp,
	// };

	const classList = createClassList(styles, () => ({
		...props.classList,
		Select: true,
		'is-disabled': Boolean(props.disabled),
		'is-invalid': Boolean(props.invalid),
		'is-modified': Boolean(props.modified),
		[`size-${size()}`]: true,
	}));

	const $root = computedProps({
		classList,
	});

	const { $root: $contentLengthMixinRoot } = createContentLengthMixin(props);

	const $ = combineProps($contentLengthMixinRoot, $root);

	return (
		<select
			id={props.id}
			disabled={props.disabled}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			onKeyUp={handleKeyUp}
			classList={$.classList}
			style={$.style}
			value={props.value ?? ''}
		>
			<Show when={!!props.placeholder}>
				<option value="">{props.placeholder}</option>
			</Show>
			{props.children}
		</select>
	);
};
