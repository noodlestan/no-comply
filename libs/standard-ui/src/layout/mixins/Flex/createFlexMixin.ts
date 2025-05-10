import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createFlexMixin as createHeadlessFlexMixin } from '@noodlestan/headless-ui';

import styles from './Flex.module.css';
import { type FlexMixinAPI, type FlexMixinProps } from './types';

const defaultProps: PickRequired<FlexMixinProps, 'gap'> = {
    gap: 'none',
};

export const createFlexMixin = (props: FlexMixinProps): FlexMixinAPI => {
    const { $root: $headlessRoot } = createHeadlessFlexMixin(props);

    const gap = () => props.gap ?? defaultProps.gap;
    const classList = createClassList(styles, () => [`Flex-gap-${gap()}`]);
    const $localRoot = createComputedProps({ classList });

    return {
        $root: mergeProps($headlessRoot, $localRoot),
    };
};
