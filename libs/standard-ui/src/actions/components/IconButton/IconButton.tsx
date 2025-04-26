import { mergeProps } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps } from '@noodlestan/headless-ui';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Icon } from '../../../icon';

import { ICON_BUTTON_PROPS } from './constants';
import { createIconButton } from './createIconButton';
import type { IconButtonProps } from './types';

type Props = ClosedTagProps & IconButtonProps;

export const IconButton: Component<Props> = props => {
    const [locals, $others] = splitProps(props, ICON_BUTTON_PROPS);

    const { $root, iconProps } = createIconButton(locals);
    const $ = mergeProps($others, $root);

    return (
        <Dynamic {...$}>
            <Icon {...iconProps} />
        </Dynamic>
    );
};
