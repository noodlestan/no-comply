import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';

import { createFocusRingMixin } from '../../../focus';

import styles from './MenuMixin.module.scss';
import type { MenuMixinAPI } from './types';

export const createMenuMixin = (): MenuMixinAPI => {
    const { $root: $focusRing } = createFocusRingMixin({ inset: true });

    const classList = staticClassList(styles, 'Menu');
    const $localRoot = {
        classList,
    };

    return {
        $root: mergeProps($localRoot, $focusRing),
    };
};
