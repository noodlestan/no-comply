import { createComputedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './LinkMixin.module.scss';
import type { LinkMixinAPI } from './types';

export const createLinkMixin = (): LinkMixinAPI => {
    const $static = {
        classList: staticClassList(styles, 'Link'),
    };

    const $localRoot = createComputedProps($static, {});

    return {
        $root: $localRoot,
    };
};
