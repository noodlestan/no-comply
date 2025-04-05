import {
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@noodlestan/context-ui-types';

import styles from './DividerMixin.module.css';
import type { DividerMixinAPI, DividerMixinProps } from './types';

const defaultProps: PickRequired<DividerMixinProps, 'component' | 'orientation'> = {
    component: 'hr',
    orientation: 'horizontal',
};

export const createDividerMixin = (props: DividerMixinProps): DividerMixinAPI => {
    const component = () => props.component ?? defaultProps.component;

    const orientation = () => props.orientation ?? defaultProps.orientation;

    const classList = createClassList(styles, () => ['Divider', `Divider-${orientation()}`]);

    const elProps = createComputedProps({ classList, component });

    return {
        elProps,
    };
};
