import { PopoverContextProvider } from '@no-comply/solid-composables';
import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { ANCHORED_POPOVER_PROPS } from './constants';
import { createAnchoredPopover } from './createAnchoredPopover';
import type { AnchoredPopoverProps } from './types';

type Props = ClosedTagProps & AnchoredPopoverProps;

export const AnchoredPopover: Component<Props> = props => {
    const [locals, $others] = splitProps(props, ANCHORED_POPOVER_PROPS);

    const { $root, $trigger, contentProps, contextValue } = createAnchoredPopover(locals);
    const $ = combineProps($others, $root);

    return (
        <PopoverContextProvider context={contextValue}>
            {locals.trigger($trigger)}
            <Dynamic {...$}>{locals.children(contentProps)}</Dynamic>
        </PopoverContextProvider>
    );
};
