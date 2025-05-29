import {
    createAnchoredPopoverMixin,
    createAnchoredPopover as createHeadlessAnchoredPopover,
} from '@no-comply/solid-composables';
import { mergeProps } from '@no-comply/solid-primitives';

import type { AnchoredPopoverAPI, AnchoredPopoverProps } from './types';

export const createAnchoredPopover = (props: AnchoredPopoverProps): AnchoredPopoverAPI => {
    const { $root, ...rest } = createHeadlessAnchoredPopover(props);
    const { $root: $mixinRoot } = createAnchoredPopoverMixin();

    return {
        ...rest,
        $root: mergeProps($root, $mixinRoot),
    };
};
