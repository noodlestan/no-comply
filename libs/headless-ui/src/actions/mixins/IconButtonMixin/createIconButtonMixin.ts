import { staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './IconButtonMixin.module.css';
import type { IconButtonMixinAPI } from './types';

export const createIconButtonMixin = (): IconButtonMixinAPI => {
    const $localRoot = {
        classList: staticClassList(styles, 'IconButton'),
    };

    const $icon = {
        classList: staticClassList(styles, 'IconButton--icon'),
    };

    return {
        $root: $localRoot,
        $icon,
    };
};
