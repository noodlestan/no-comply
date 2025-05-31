import {
    type ClosedTagProps,
    type PopoverTriggerTagProps,
    combineProps,
} from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';

import { IconButton } from '../IconButton';

import { CLOSE_BUTTON_PROPS } from './constants';
import { createCloseButton } from './createCloseButton';
import type { CloseButtonProps } from './types';

type Props = ClosedTagProps & PopoverTriggerTagProps & CloseButtonProps;

export const CloseButton: Component<Props> = props => {
    const [locals, $others] = splitProps(props, CLOSE_BUTTON_PROPS);

    const { iconButtonProps } = createCloseButton(locals);
    const $ = combineProps($others, iconButtonProps);

    return <IconButton {...$} />;
};
