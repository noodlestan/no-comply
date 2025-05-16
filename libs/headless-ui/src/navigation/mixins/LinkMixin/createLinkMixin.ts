import {
    createComputedProps,
    mergeProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';

import { createFocusRingMixin } from '../../../focus';

import styles from './LinkMixin.module.scss';
import type { LinkMixinAPI } from './types';

export const createLinkMixin = (): LinkMixinAPI => {
    const { $root: $focusRingMixinRoot } = createFocusRingMixin();

    const $static = {
        classList: staticClassList(styles, 'Link'),
    };

    const $localRoot = createComputedProps($static, {});

    return {
        $root: mergeProps($focusRingMixinRoot, $localRoot),
    };
};
