import { mergeProps } from '@noodlestan/context-ui-primitives';
import {
    createAnchoredPopoverMixin,
    createAnchoredPopover as createHeadlessAnchoredPopover,
} from '@noodlestan/headless-ui';

import type { AnchoredPopoverAPI, AnchoredPopoverProps } from './types';

export const createAnchoredPopover = (props: AnchoredPopoverProps): AnchoredPopoverAPI => {
    const { $root, ...rest } = createHeadlessAnchoredPopover(props);
    const { $root: $mixinRoot } = createAnchoredPopoverMixin();

    return {
        ...rest,
        $root: mergeProps($root, $mixinRoot),
    };
};
