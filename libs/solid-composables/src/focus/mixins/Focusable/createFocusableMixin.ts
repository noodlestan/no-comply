import { staticClassList } from '@no-comply/solid-primitives';

import styles from './FocusableMixin.module.scss';
import type { FocusableMixinAPI } from './types';

export const createFocusableMixin = (): FocusableMixinAPI => {
    const classList = staticClassList(styles, 'Focusable');

    const $localRoot = {
        classList,
    };

    return {
        $root: $localRoot,
    };
};
