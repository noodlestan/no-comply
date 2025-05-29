import { createComputedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './ActionMixin.module.scss';
import type { ActionMixinAPI } from './types';

export const createActionMixin = (): ActionMixinAPI => {
    const $static = {
        classList: staticClassList(styles, 'Action'),
    };
    const $localRoot = createComputedProps($static, {});

    return {
        $root: $localRoot,
    };
};
