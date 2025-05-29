import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component, splitProps } from 'solid-js';

import { IconButton } from '../IconButton';

import { TOGGLE_BUTTON_PROPS } from './constants';
import { createToggleButton } from './createToggleButton';
import type { ToggleButtonProps } from './types';

type Props = ClosedTagProps & ToggleButtonProps;

export const ToggleButton: Component<Props> = props => {
    const [locals, $others] = splitProps(props, TOGGLE_BUTTON_PROPS);

    const { iconButtonProps } = createToggleButton(locals);
    const $ = mergeProps($others, iconButtonProps);

    return <IconButton {...$} />;
};
