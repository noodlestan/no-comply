import { createAlignToFirstLineMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    createClassList,
    computedProps,
    mergeProps,
} from '@no-comply/solid-primitives';

import styles from './SizedActionMixin.module.scss';
import type { SizedActionMixinAPI, SizedActionMixinProps } from './types';

const defaultProps: PickRequired<SizedActionMixinProps, 'size'> = {
    size: 'normal',
};

export const createSizedActionMixin = (props: SizedActionMixinProps): SizedActionMixinAPI => {
    const { $root: $alignToFirstLineRoot } = createAlignToFirstLineMixin(props);

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => [`SizedAction`, `size-${size()}`]);
    const $root = computedProps({
        classList,
    });

    return {
        $root: mergeProps($alignToFirstLineRoot, $root),
        size,
    };
};
