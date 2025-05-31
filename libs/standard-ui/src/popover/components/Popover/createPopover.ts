import {
    createPopover as createHeadlessPopover,
    createPopoverMixin,
} from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { $POPOVER } from './constants';
import type { PopoverAPI, PopoverProps } from './types';

export const createPopover = (props: PopoverProps): PopoverAPI => {
    const [locals, expose, compose] = createExposable($POPOVER, props);

    const { $root: $popoverRoot, ...rest } = compose(createHeadlessPopover(locals));
    const { $root: $mixinRoot } = compose(createPopoverMixin());

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: combineProps($popoverRoot, $mixinRoot),
    });
};
