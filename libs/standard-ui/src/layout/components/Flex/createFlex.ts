import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createFlexMixin } from '@noodlestan/headless-ui';

import { createLayout } from '../Layout';

import styles from './Flex.module.css';
import { type FlexAPI, type FlexProps } from './types';

const defaultProps: PickRequired<FlexProps, 'gap'> = {
    gap: 'none',
};

export const createFlex = (props: FlexProps): FlexAPI => {
    const { $root: $layoutRoot } = createLayout(props);
    const { $root: $flexMixinRoot } = createFlexMixin(props);

    const gap = () => props.gap ?? defaultProps.gap;
    const classList = createClassList(styles, () => [`Flex-gap-${gap()}`]);
    const $localRoot = createComputedProps({ classList });

    return {
        $root: mergeProps($layoutRoot, $flexMixinRoot, $localRoot),
    };
};
