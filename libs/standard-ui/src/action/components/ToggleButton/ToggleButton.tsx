import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';

import { IconButton } from '../IconButton';

import { TOGGLE_BUTTON_PROPS } from './constants';
import { createToggleButton } from './createToggleButton';
import type { ToggleButtonProps } from './types';

type Props = ClosedTagProps & ToggleButtonProps;

export const ToggleButton: Component<Props> = props => {
	const [locals, $others] = splitProps(props, TOGGLE_BUTTON_PROPS);

	const { _iconButton } = createToggleButton(locals);
	const $ = combineProps($others, _iconButton);

	return <IconButton {...$} />;
};
