import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createFocusRingMixin } from '../../../focus';

import styles from './MenuMixin.module.scss';
import type { MenuMixinAPI } from './types';

export const createMenuMixin = (): MenuMixinAPI => {
    const { $root: $focusRing } = createFocusRingMixin({ inset: true });

    const classList = staticClassList(styles, 'Menu');
    const $root = {
        classList,
    };

    return {
        $root: combineProps($root, $focusRing),
    };
};
