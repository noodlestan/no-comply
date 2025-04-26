import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './LinkMixin.module.css';
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
