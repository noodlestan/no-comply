import {
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@noodlestan/context-ui-types';

import styles from './LayoutMixin.module.css';
import type { LayoutMixinAPI, LayoutMixinProps } from './types';

const defaultProps: PickRequired<LayoutMixinProps, 'component'> = {
    component: 'div',
};

export function createLayoutMixin(props: LayoutMixinProps): LayoutMixinAPI {
    const component = () => props.component ?? defaultProps.component;

    const classList = createClassList(styles, () => ({
        Layout: true,
        [`Layout-stretch-${props.stretch}`]: Boolean(props.stretch),
        [`Layout-overflow-${props.overflow}`]: Boolean(props.overflow),
    }));

    const elProps = createComputedProps({ classList, component });

    return {
        elProps,
    };
}
