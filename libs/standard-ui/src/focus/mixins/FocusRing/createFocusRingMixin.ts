import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import { createFocusRingMixin as createHeadlessFocusRingMixin } from '@noodlestan/headless-ui';

import { createFocusRingOffsetMixin } from '../FocusRingOffset';

import styles from './FocusRing.module.css';
import { type FocusRingMixinAPI, type FocusRingMixinProps } from './types';

export const createFocusRingMixin = (props: FocusRingMixinProps = {}): FocusRingMixinAPI => {
    const { $root: $headlessRingRoot } = createHeadlessFocusRingMixin();
    const { $root: $ringOffsetMixin } = createFocusRingOffsetMixin(props);

    const classList = staticClassList(styles, 'FocusRing');
    const $localRoot = { classList };

    return {
        $root: mergeProps($headlessRingRoot, $ringOffsetMixin, $localRoot),
    };
};
