import { createIcon as createHeadlessIcon, createIconMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import styles from './Icon.module.scss';
import type { IconAPI, IconProps } from './types';

const defaultProps: PickRequired<IconProps, 'size'> = {
    size: 'normal',
};

export const createIcon = (props: IconProps): IconAPI => {
    const { $root: $iconRoot } = createHeadlessIcon(props);
    const { $root: $iconMixinRoot } = createIconMixin(props);

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => [`size-${size()}`]);
    const $root = computedProps({
        classList,
    });

    return {
        $root: combineProps($iconRoot, $iconMixinRoot, $root),
    };
};
