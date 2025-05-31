import { createFocusRingMixin as createHeadlessFocusRingMixin } from '@no-comply/solid-composables';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createFocusRingOffsetMixin } from '../FocusRingOffset';

import styles from './FocusRing.module.scss';
import { type FocusRingMixinAPI, type FocusRingMixinProps } from './types';

export const createFocusRingMixin = (props: FocusRingMixinProps = {}): FocusRingMixinAPI => {
    const { $root: $headlessRingRoot } = createHeadlessFocusRingMixin();
    const { $root: $ringOffsetMixin } = createFocusRingOffsetMixin(props);

    const classList = staticClassList(styles, 'FocusRing');
    const $root = { classList };

    return {
        $root: combineProps($headlessRingRoot, $ringOffsetMixin, $root),
    };
};
