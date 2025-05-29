import { type ClosedTagProps, mergeProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { type FocusTrapProps, createFocusTrap } from '../../controllers';

type Props = ClosedTagProps & FocusTrapProps;

export const FocusTrap: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, ['focusable']);
    const { $root } = createFocusTrap(locals);

    const $ = mergeProps($others, $root);

    return <Dynamic component="div" {...$} />;
};
