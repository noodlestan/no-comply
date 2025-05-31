import { mergeProps, staticClassList } from '@no-comply/solid-primitives';

import { createPopoverMixin } from '../Popover';

import styles from './AnchoredPopoverMixin.module.scss';
import type { AnchoredPopoverMixinAPI } from './types';

export const createAnchoredPopoverMixin = (): AnchoredPopoverMixinAPI => {
    const { $root: $popoverMixinRoot } = createPopoverMixin();

    const $root = {
        classList: staticClassList(styles, 'AnchoredPopover'),
    };

    return {
        $root: mergeProps($popoverMixinRoot, $root),
    };
};
