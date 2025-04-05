import { type ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createLayout } from './createLayout';
import type { LayoutProps } from './types';

export const Layout: ParentComponent<LayoutProps> = props => {
    const { elProps } = createLayout(props);
    return <Dynamic {...elProps} />;
};
