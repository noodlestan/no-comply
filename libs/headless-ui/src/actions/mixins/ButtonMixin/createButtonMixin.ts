import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './ButtonMixin.module.scss';
import type { ButtonMixinAPI } from './types';

export const createButtonMixin = (): ButtonMixinAPI => {
    const $static = {
        classList: staticClassList(styles, 'Button'),
    };
    const $localRoot = createComputedProps($static, {});

    return {
        $root: $localRoot,
    };
};
