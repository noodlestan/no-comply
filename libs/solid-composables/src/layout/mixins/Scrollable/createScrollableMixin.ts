import {
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@no-comply/solid-primitives';

import styles from './ScrollableMixin.module.scss';
import type { ScrollableMixinAPI, ScrollableMixinProps } from './types';

const defaultProps: PickRequired<ScrollableMixinProps, 'tag'> = {
    tag: 'div',
};

export const createScrollableMixin = (props: ScrollableMixinProps): ScrollableMixinAPI => {
    const component = () => props.tag ?? defaultProps.tag;
    const classList = createClassList(styles, () => ({
        Scrollable: true,
        [`Scrollable-x`]: Boolean(props.x),
        [`Scrollable-y`]: Boolean(props.y),
    }));
    const $localRoot = createComputedProps({ classList, component });

    return {
        $root: $localRoot,
    };
};
