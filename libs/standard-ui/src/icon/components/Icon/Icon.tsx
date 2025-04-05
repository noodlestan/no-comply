import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createIcon } from './createIcon';
import type { IconProps } from './types';

export const Icon: Component<IconProps> = props => {
    const { elProps } = createIcon(props);
    return <Dynamic {...elProps} />;
};
