import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';

import { createFocusRingOffsetMixin } from '../FocusRingOffset';

import styles from './FocusRing.module.scss';
import { type FocusRingMixinAPI, type FocusRingMixinProps } from './types';

export const createFocusRingMixin = (props: FocusRingMixinProps = {}): FocusRingMixinAPI => {
    const { $root } = createFocusRingOffsetMixin(props);

    const classList = staticClassList(styles, 'FocusRing');
    const $localRoot = { classList };

    return {
        $root: mergeProps($root, $localRoot),
    };
};
