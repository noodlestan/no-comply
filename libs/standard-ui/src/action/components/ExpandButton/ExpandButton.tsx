import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';

import { IconButton } from '../IconButton';

import { EXPAND_BUTTON_PROPS } from './constants';
import { createExpandButton } from './createExpandButton';
import type { ExpandButtonProps } from './types';

type Props = ClosedTagProps & ExpandButtonProps;

/**
 * Renders an `IconButton` of `variant` plain
 */
export const ExpandButton: Component<Props> = props => {
	const [locals, $others] = splitProps(props, EXPAND_BUTTON_PROPS);

	const { _iconButton } = createExpandButton(locals);
	const $ = combineProps($others, _iconButton);

	return <IconButton {...$} />;
};
