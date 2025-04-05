import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createIconButton } from './createIconButton';
import type { IconButtonProps } from './types';

export const IconButton: Component<IconButtonProps> = props => {
    const { elProps, iconProps } = createIconButton(props);
    return (
        <Dynamic {...elProps}>
            <span {...iconProps} />
        </Dynamic>
    );
};
