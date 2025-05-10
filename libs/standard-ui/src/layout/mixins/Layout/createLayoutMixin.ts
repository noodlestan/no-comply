import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createLayoutMixin as createHeadlessLayoutMixin } from '@noodlestan/headless-ui';

import styles from './Layout.module.css';
import { type LayoutMixinAPI, type LayoutMixinProps } from './types';

const defaultProps: PickRequired<LayoutMixinProps, 'padding'> = {
    padding: 'none',
};

export const createLayoutMixin = (props: LayoutMixinProps): LayoutMixinAPI => {
    const { $root: $headlessRoot } = createHeadlessLayoutMixin(props);

    const padding = () => props.padding ?? defaultProps.padding;
    const classList = createClassList(styles, () => [`Layout-padding-${padding()}`]);
    const $localRoot = createComputedProps({ classList });

    return {
        $root: mergeProps($headlessRoot, $localRoot),
    };
};
