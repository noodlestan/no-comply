import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createPopoverMixin } from '../Popover';

import styles from './AnchoredPopoverMixin.module.scss';
import { $ANCHORED_POPOVER_MIXIN } from './constants';
import type { AnchoredPopoverMixinAPI } from './types';

export const createAnchoredPopoverMixin = (): AnchoredPopoverMixinAPI => {
    const [, expose, compose] = createExposable($ANCHORED_POPOVER_MIXIN);

    const { $root: $popoverMixinRoot } = compose(createPopoverMixin());

    const $root = {
        classList: staticClassList(styles, 'AnchoredPopover'),
    };

    return exposeAPI(expose, '$root', {
        $root: combineProps($popoverMixinRoot, $root),
    });
};
