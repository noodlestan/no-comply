import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createFlex } from './createFlex';
import type { FlexProps } from './types';

export const Flex: Component<FlexProps> = props => {
    const { elProps } = createFlex(props);
    return <Dynamic {...elProps} />;
};
