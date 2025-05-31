import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createAnchoredPopover } from '../../controllers';
import { createAnchoredPopoverMixin } from '../../mixins';

import { $ANCHORED_POPOVER_BASE } from './constants';
import type { AnchoredPopoverBaseAPI, AnchoredPopoverBaseProps } from './types';

export const createAnchoredPopoverBase = (
    props: AnchoredPopoverBaseProps,
): AnchoredPopoverBaseAPI => {
    const [locals, expose, compose] = createExposable($ANCHORED_POPOVER_BASE, props);

    const { $root: $popoverRoot, ...rest } = compose(createAnchoredPopover(locals));
    const { $root: $mixinRoot } = compose(createAnchoredPopoverMixin());

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: combineProps($popoverRoot, $mixinRoot),
    });
};
