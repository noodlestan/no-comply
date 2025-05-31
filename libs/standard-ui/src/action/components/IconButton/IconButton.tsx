import {
    type ClosedTagProps,
    type PopoverTriggerTagProps,
    combineProps,
} from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Icon } from '../../../icon';

import { ICON_BUTTON_PROPS } from './constants';
import { createIconButton } from './createIconButton';
import type { IconButtonProps } from './types';

type Props = ClosedTagProps & PopoverTriggerTagProps & IconButtonProps;

export const IconButton: Component<Props> = props => {
    const [locals, $others] = splitProps(props, ICON_BUTTON_PROPS);

    const { $root, iconProps } = createIconButton(locals);
    const $ = combineProps($others, $root);

    return (
        <Dynamic {...$}>
            <Icon {...iconProps} />
        </Dynamic>
    );
};
