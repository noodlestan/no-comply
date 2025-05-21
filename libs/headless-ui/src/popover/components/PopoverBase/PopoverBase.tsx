import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { POPOVER_PROPS, createPopover } from '../../controllers';
import { createPopoverMixin } from '../../mixins';
import { PopoverContextProvider } from '../../providers';

import type { PopoverBaseProps } from './types';

type Props = ClosedTagProps & PopoverBaseProps;

export const PopoverBase: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [...POPOVER_PROPS, 'children']);

    const { $root, contextValue } = createPopover(locals);
    const { $root: $mixinRoot } = createPopoverMixin();

    const $ = mergeProps($others, $root, $mixinRoot);

    return (
        <PopoverContextProvider context={contextValue}>
            <Dynamic component="div" {...$}>
                {props.children}
            </Dynamic>
        </PopoverContextProvider>
    );
};
