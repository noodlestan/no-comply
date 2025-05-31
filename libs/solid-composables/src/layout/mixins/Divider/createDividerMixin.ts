import { type PickRequired, computedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './DividerMixin.module.scss';
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
    const $root = computedProps($static, {
        component,
        'data-divider': orientation,
    });

    return {
        $root,
    };
};
