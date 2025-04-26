import {
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@noodlestan/context-ui-primitives';

import styles from './LayoutMixin.module.css';
import type { LayoutMixinAPI, LayoutMixinProps } from './types';

const defaultProps: PickRequired<LayoutMixinProps, 'tag'> = {
    tag: 'div',
};

export function createLayoutMixin(props: LayoutMixinProps): LayoutMixinAPI {
    const component = () => props.tag ?? defaultProps.tag;
    const classList = createClassList(styles, () => ({
        Layout: true,
        [`Layout-stretch-${props.stretch}`]: Boolean(props.stretch),
        [`Layout-overflow-${props.overflow}`]: Boolean(props.overflow),
    }));
    const $localRoot = createComputedProps({ classList, component });

    return {
        $root: $localRoot,
    };
}
