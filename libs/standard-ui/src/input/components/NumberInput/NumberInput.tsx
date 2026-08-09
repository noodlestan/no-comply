import { combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';

import { NUMBER_INPUT_PROPS } from './constants';
import { createNumberInput } from './createNumberInput';
import type { NumberInputProps } from './types';

export const NumberInput: Component<NumberInputProps> = props => {
	const [locals, $others] = splitProps(props, NUMBER_INPUT_PROPS);

	const { $root } = createNumberInput(locals);
	const $ = combineProps($others, $root);

	return <input {...$} />;
};
