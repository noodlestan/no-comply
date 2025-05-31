import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './FocusRingOffsetMixin.module.scss';
import { type FocusRingOffsetMixinAPI, type FocusRingOffsetMixinProps } from './types';

export const createFocusRingOffsetMixin = (
    props: FocusRingOffsetMixinProps = {},
): FocusRingOffsetMixinAPI => {
    const classList = createClassList(styles, () => ({
        FocusRingOffset: true,
        inset: Boolean(props.inset),
    }));
    const $root = computedProps({
        classList,
    });

    return {
        $root,
    };
};
