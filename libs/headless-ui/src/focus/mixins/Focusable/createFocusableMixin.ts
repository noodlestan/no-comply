import { staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './FocusableMixin.module.css';
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
