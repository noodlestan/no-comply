import {
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@noodlestan/context-ui-primitives';

import styles from './SizedActionMixin.module.scss';
import type { SizedActionMixinAPI, SizedActionMixinProps } from './types';

const defaultProps: PickRequired<SizedActionMixinProps, 'size'> = {
    size: 'normal',
};

export const createSizedActionMixin = (props: SizedActionMixinProps): SizedActionMixinAPI => {
    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => [`SizedAction`, `size-${size()}`]);
    const $localRoot = createComputedProps({ classList });

    return {
        $root: $localRoot,
    };
};
