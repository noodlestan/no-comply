import {
    type PickRequired,
    createComputedProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';

import styles from './DividerMixin.module.css';
import type { DividerMixinAPI, DividerMixinProps } from './types';

const defaultProps: PickRequired<DividerMixinProps, 'component' | 'orientation'> = {
    component: 'hr',
    orientation: 'horizontal',
};

export const createDividerMixin = (props: DividerMixinProps): DividerMixinAPI => {
    const component = () => props.component ?? defaultProps.component;

    const orientation = () => props.orientation ?? defaultProps.orientation;

    const classList = staticClassList(styles, 'Divider');

    const staticProps = { classList };

    const elProps = createComputedProps(staticProps, {
        component,
        'data-divider': orientation,
    });

    return {
        elProps,
    };
};
