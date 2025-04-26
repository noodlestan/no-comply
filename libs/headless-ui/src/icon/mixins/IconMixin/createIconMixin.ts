import { staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './IconMixin.module.css';
import type { IconMixinAPI } from './types';

export const createIconMixin = (): IconMixinAPI => {
    const $localRoot = {
        classList: staticClassList(styles, 'Icon'),
    };

    return {
        $root: $localRoot,
    };
};
