import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './FocusRingMixin.module.scss';
import { $FOCUS_RING_MIXIN } from './constants';
import type { FocusRingMixinAPI } from './types';

export const createFocusRingMixin = (): FocusRingMixinAPI => {
    const [, expose] = createExposable($FOCUS_RING_MIXIN);

    const classList = staticClassList(styles, 'FocusRing');
    const $root = {
        classList,
    };

    return exposeAPI(expose, '$root', {
        $root,
    });
};
