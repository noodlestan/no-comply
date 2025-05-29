import { createClassList, createComputedProps } from '@no-comply/solid-primitives';

import styles from './FocusRingOffset.module.css';
import { type FocusRingOffsetMixinAPI, type FocusRingOffsetMixinProps } from './types';

export const createFocusRingOffsetMixin = (
    props: FocusRingOffsetMixinProps = {},
): FocusRingOffsetMixinAPI => {
    const classList = createClassList(styles, () => ({
        FocusRingOffset: true,
        'FocusRingOffset-inset': Boolean(props.inset),
    }));
    const $localRoot = createComputedProps({ classList });

    return {
        $root: $localRoot,
    };
};
