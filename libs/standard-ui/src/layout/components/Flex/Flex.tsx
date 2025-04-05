import { type ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createFlex } from './createFlex';
import type { FlexProps } from './types';

export const Flex: ParentComponent<FlexProps> = props => {
    const { elProps } = createFlex(props);
    return <Dynamic {...elProps} />;
};
