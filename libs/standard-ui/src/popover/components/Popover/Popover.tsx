import { type PopoverBaseProps, PopoverContextProvider } from '@no-comply/solid-composables';
import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { POPOVER_PROPS } from './constants';
import { createPopover } from './createPopover';

type Props = ClosedTagProps & PopoverBaseProps;

export const Popover: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [...POPOVER_PROPS, 'children']);

    const { $root, contextValue } = createPopover(locals);

    const $ = combineProps($others, $root);

    return (
        <PopoverContextProvider context={contextValue}>
            <Dynamic component="div" {...$}>
                {locals.children}
            </Dynamic>
        </PopoverContextProvider>
    );
};
