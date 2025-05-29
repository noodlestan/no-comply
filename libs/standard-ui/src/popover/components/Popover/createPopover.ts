import {
    createPopover as createHeadlessPopover,
    createPopoverMixin,
} from '@no-comply/solid-composables';
import { mergeProps } from '@no-comply/solid-primitives';

import type { PopoverAPI, PopoverProps } from './types';

export const createPopover = (props: PopoverProps): PopoverAPI => {
    const { $root, ...rest } = createHeadlessPopover(props);
    const { $root: $mixinRoot } = createPopoverMixin();

    return {
        ...rest,
        $root: mergeProps($root, $mixinRoot),
    };
};
