import { mergeProps } from '@noodlestan/context-ui-types';
import { type ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createFlexMixin, createLayoutMixin } from '../../mixins';

import type { FlexBaseProps } from './types';

export const FlexBase: ParentComponent<FlexBaseProps> = props => {
    const { elProps: layoutElProps } = createLayoutMixin(props);
    const { elProps: flexElProps } = createFlexMixin(props);
    const elProps = mergeProps(layoutElProps, flexElProps);

    return <Dynamic {...elProps} />;
};
