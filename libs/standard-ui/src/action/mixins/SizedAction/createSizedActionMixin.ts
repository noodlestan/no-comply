import { createAlignedToFirstLineMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import styles from './SizedActionMixin.module.scss';
import type { SizedActionMixinAPI, SizedActionMixinProps } from './types';

const defaultProps: PickRequired<SizedActionMixinProps, 'size'> = {
    size: 'normal',
};

export const createSizedActionMixin = (props: SizedActionMixinProps): SizedActionMixinAPI => {
    const { $root: $alignedToFirstLineRoot } = createAlignedToFirstLineMixin(props);

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => [`SizedAction`, `size-${size()}`]);
    const $root = computedProps({
        classList,
    });

    return {
        $root: combineProps($alignedToFirstLineRoot, $root),
        size,
    };
};
