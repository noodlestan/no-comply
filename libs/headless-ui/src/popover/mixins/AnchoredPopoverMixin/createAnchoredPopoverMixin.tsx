import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';

import { createPopoverMixin } from '../PopoverMixin';

import styles from './AnchoredPopover.module.scss';
import type { AnchoredPopoverMixinAPI } from './types';

export const createAnchoredPopoverMixin = (): AnchoredPopoverMixinAPI => {
    const { $root: $popoverMixinRoot } = createPopoverMixin();

    const $localRoot = {
        classList: staticClassList(styles, 'AnchoredPopover'),
    };

    return {
        $root: mergeProps($popoverMixinRoot, $localRoot),
    };
};
