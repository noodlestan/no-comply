import type { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createScrollable } from './createScrollable';
import type { ScrollableProps } from './types';

export const Scrollable: ParentComponent<ScrollableProps> = props => {
    const { elProps } = createScrollable(props);
    return <Dynamic {...elProps} />;
};
