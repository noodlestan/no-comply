import { mergeProps } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps } from '@noodlestan/headless-ui';
import { type Component, splitProps } from 'solid-js';

import { IconButton } from '../IconButton';

import { CLOSE_BUTTON_PROPS } from './constants';
import { createCloseButton } from './createCloseButton';
import type { CloseButtonProps } from './types';

type Props = ClosedTagProps & CloseButtonProps;

export const CloseButton: Component<Props> = props => {
    const [locals, $others] = splitProps(props, CLOSE_BUTTON_PROPS);

    const { iconButtonProps } = createCloseButton(locals);
    const $ = mergeProps($others, iconButtonProps);

    return <IconButton {...$} />;
};
