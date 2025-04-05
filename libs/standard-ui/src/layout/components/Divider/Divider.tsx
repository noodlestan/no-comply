import type { Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createDivider } from './createDivider';
import type { DividerProps } from './types';

export const Divider: Component<DividerProps> = props => {
    const { elProps } = createDivider(props);
    return <Dynamic {...elProps} />;
};
