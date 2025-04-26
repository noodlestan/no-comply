import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createIcon as createHeadlessIcon, createIconMixin } from '@noodlestan/headless-ui';

import styles from './Icon.module.css';
import type { IconAPI, IconProps } from './types';

const defaultProps: PickRequired<IconProps, 'size'> = {
    size: 'normal',
};

export const createIcon = (props: IconProps): IconAPI => {
    const { $root: $iconRoot } = createHeadlessIcon(props);
    const { $root: $iconMixinRoot } = createIconMixin();

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => [`Icon-size-${size()}`]);
    const $localRoot = createComputedProps({ classList });

    return {
        $root: mergeProps($iconRoot, $iconMixinRoot, $localRoot),
    };
};
