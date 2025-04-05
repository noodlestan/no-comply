import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createDisplay } from './createDisplay';
import type { DisplayProps } from './types';

export const Display: Component<DisplayProps> = props => {
    const { elProps } = createDisplay(props);
    return <Dynamic {...elProps} />;
};
