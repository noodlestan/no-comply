import {
    type PickRequired,
    createComputedProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';

import styles from './DividerMixin.module.css';
import type { DividerMixinAPI, DividerMixinProps } from './types';

const defaultProps: PickRequired<DividerMixinProps, 'tag' | 'orientation'> = {
    tag: 'hr',
    orientation: 'horizontal',
};

export const createDividerMixin = (props: DividerMixinProps): DividerMixinAPI => {
    const component = () => props.tag ?? defaultProps.tag;
    const orientation = () => props.orientation ?? defaultProps.orientation;
    const classList = staticClassList(styles, 'Divider');

    const $static = { classList };
    const $localRoot = createComputedProps($static, {
        component,
        'data-divider': orientation,
    });

    return {
        $root: $localRoot,
    };
};
