import { mergeProps } from '@noodlestan/context-ui-primitives';
import {
    createPopover as createHeadlessPopover,
    createPopoverMixin,
} from '@noodlestan/headless-ui';

import type { PopoverAPI, PopoverProps } from './types';

export const createPopover = (props: PopoverProps): PopoverAPI => {
    const { $root, ...rest } = createHeadlessPopover(props);
    const { $root: $mixinRoot } = createPopoverMixin();

    return {
        ...rest,
        $root: mergeProps($root, $mixinRoot),
    };
};
