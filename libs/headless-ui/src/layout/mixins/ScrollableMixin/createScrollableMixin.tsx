import {
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@noodlestan/context-ui-types';

import styles from './ScrollableMixin.module.css';
import type { ScrollableMixinAPI, ScrollableMixinProps } from './types';

const defaultProps: PickRequired<ScrollableMixinProps, 'component'> = {
    component: 'div',
};

export const createScrollableMixin = (props: ScrollableMixinProps): ScrollableMixinAPI => {
    const component = () => props.component ?? defaultProps.component;

    const classList = createClassList(styles, () => ({
        Scrollable: true,
        [`Scrollable-y`]: Boolean(props.y),
        [`Scrollable-x`]: Boolean(props.z),
    }));

    const elProps = createComputedProps({ classList, component });

    return {
        elProps,
    };
};
