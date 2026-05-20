import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, Show, splitProps } from 'solid-js';

import { Icon } from '../../../icon';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { TOGGLE_BUTTON_PROPS } from './constants';
import { createToggleButton } from './createToggleButton';
import type { ToggleButtonProps } from './types';

type Props = ClosedTagProps & ToggleButtonProps;

export const ToggleButton: Component<Props> = props => {
	const [locals, $others] = splitProps(props, TOGGLE_BUTTON_PROPS);

	const { _iconButton, _icon, _button } = createToggleButton(locals);
	const $iconButton = combineProps($others, _iconButton);
	const $button = combineProps($others, _button);

	return (
		<Show when={!props.iconOnly} fallback={<IconButton {...$iconButton} />}>
			<Button {...$button}>
				<Icon {..._icon} />
				{$iconButton.label}
			</Button>
		</Show>
	);
};
