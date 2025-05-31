import {
    createAnchoredPopoverMixin,
    createAnchoredPopover as createHeadlessAnchoredPopover,
} from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';

import type { AnchoredPopoverAPI, AnchoredPopoverProps } from './types';

export const createAnchoredPopover = (props: AnchoredPopoverProps): AnchoredPopoverAPI => {
    const { $root, ...rest } = createHeadlessAnchoredPopover(props);
    const { $root: $mixinRoot } = createAnchoredPopoverMixin();

    return {
        ...rest,
        $root: combineProps($root, $mixinRoot),
    };
};
