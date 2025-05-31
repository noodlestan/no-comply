import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './AlignedToFirstLineMixin.module.scss';
import { $ALIGNED_TO_FIRST_LINE_MIXIN } from './constants';
import type { AlignedToFirstLineMixinAPI, AlignedToFirstLineMixinProps } from './types';

export const createAlignedToFirstLineMixin = (
    props: AlignedToFirstLineMixinProps,
): AlignedToFirstLineMixinAPI => {
    const [locals, expose] = createExposable($ALIGNED_TO_FIRST_LINE_MIXIN, props);

    const classList = createClassList(styles, () => ({
        [`AlignedToFirstLine`]: Boolean(locals.aligned),
    }));
    const $root = computedProps({
        classList,
    });

    return exposeAPI(expose, '$root', {
        $root,
    });
};
