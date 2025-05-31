import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { type FocusTrapProps } from '../../controllers';

import { FOCUS_TRAP_BASE_PROPS } from './constants';
import { createFocusTrapBase } from './createFocusTrapBase';

type Props = ClosedTagProps & FocusTrapProps;

export const FocusTrap: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [...FOCUS_TRAP_BASE_PROPS, 'children']);

    const { $root } = createFocusTrapBase(locals);

    const $ = combineProps($others, $root);

    return (
        <Dynamic component="div" {...$}>
            {locals.children}
        </Dynamic>
    );
};
