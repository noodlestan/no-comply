import type { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createLayoutMixin } from '../../mixins';

import type { LayoutBaseProps } from './types';

export const LayoutBase: ParentComponent<LayoutBaseProps> = props => {
    const { elProps } = createLayoutMixin(props);
    return <Dynamic {...elProps} />;
};
