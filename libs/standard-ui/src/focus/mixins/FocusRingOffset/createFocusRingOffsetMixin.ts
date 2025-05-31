import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './FocusRingOffsetMixin.module.scss';
import { $FOCUS_RING_OFFSET_MIXIN } from './constants';
import { type FocusRingOffsetMixinAPI, type FocusRingOffsetMixinProps } from './types';

export const createFocusRingOffsetMixin = (
    props: FocusRingOffsetMixinProps = {},
): FocusRingOffsetMixinAPI => {
    const [locals, expose] = createExposable($FOCUS_RING_OFFSET_MIXIN, props);

    const classList = createClassList(styles, () => ({
        FocusRingOffset: true,
        inset: Boolean(locals.inset),
    }));

    const $root = computedProps({
        classList,
    });

    return exposeAPI(expose, '$root', {
        $root,
    });
};
