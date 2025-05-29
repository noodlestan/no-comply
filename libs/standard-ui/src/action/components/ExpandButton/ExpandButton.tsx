import {
    type ClosedTagProps,
    type PopoverTriggerTagProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { type Component, splitProps } from 'solid-js';

import { IconButton } from '../IconButton';

import { EXPAND_BUTTON_PROPS } from './constants';
import { createExpandButton } from './createExpandButton';
import type { ExpandButtonProps } from './types';

type Props = ClosedTagProps & PopoverTriggerTagProps & ExpandButtonProps;

export const ExpandButton: Component<Props> = props => {
    const [locals, $others] = splitProps(props, EXPAND_BUTTON_PROPS);

    const { iconButtonProps } = createExpandButton(locals);
    const $ = mergeProps($others, iconButtonProps);

    return <IconButton {...$} />;
};
