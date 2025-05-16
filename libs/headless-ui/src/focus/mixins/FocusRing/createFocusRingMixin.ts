import { staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './FocusRingMixin.module.scss';
import type { FocusRingMixinAPI } from './types';

export const createFocusRingMixin = (): FocusRingMixinAPI => {
    const classList = staticClassList(styles, 'FocusRing');
    const $localRoot = { classList };

    return {
        $root: $localRoot,
    };
};
