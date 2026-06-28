import { combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';

import { TEXT_INPUT_PROPS } from './constants';
import { createTextInput } from './createTextInput';
import type { TextInputProps } from './types';

export const TextInput: Component<TextInputProps> = props => {
	const [locals, $others] = splitProps(props, TEXT_INPUT_PROPS);

	const { $root } = createTextInput(locals);
	const $ = combineProps($others, $root);

	return <input {...$} />;
};
