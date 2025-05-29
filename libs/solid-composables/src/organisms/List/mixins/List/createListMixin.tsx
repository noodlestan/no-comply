import { staticClassList } from '@no-comply/solid-primitives';

import styles from './ListMixin.module.css';
import type { ListMixinAPI } from './types';

export const createListixin = (): ListMixinAPI => {
    const $localRoot = {
        classList: staticClassList(styles, 'List'),
    };

    return {
        $root: $localRoot,
    };
};
