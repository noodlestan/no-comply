import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import {
    ANCHORED_POPOVER_PROPS,
    type AnchoredPopoverProps,
    createAnchoredPopover,
} from '../../controllers';
import { createAnchoredPopoverMixin } from '../../mixins';
import { PopoverContextProvider } from '../../providers';

import { ANCHORED_POPOVER_BASE_PROPS } from './constants';
import type { AnchoredPopoverBaseProps } from './types';

type Props = ClosedTagProps & AnchoredPopoverProps & AnchoredPopoverBaseProps;

export const AnchoredPopoverBase: Component<Props> = props => {
    const [locals, $others] = splitProps(props, [
        ...ANCHORED_POPOVER_PROPS,
        ...ANCHORED_POPOVER_BASE_PROPS,
        'children',
    ]);

    const { $root, $trigger, contentProps, contextValue } = createAnchoredPopover(locals);
    const { $root: $mixinRoot } = createAnchoredPopoverMixin();

    const $ = mergeProps($others, $root, $mixinRoot);

    return (
        <PopoverContextProvider context={contextValue}>
            {props.trigger($trigger)}
            <Dynamic {...$}>{props.children(contentProps)}</Dynamic>
        </PopoverContextProvider>
    );
};
