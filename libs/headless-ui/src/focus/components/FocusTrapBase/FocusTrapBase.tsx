import { mergeProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { ClosedTagProps } from '../../../tag';
import { type FocusTrapProps, createFocusTrap } from '../../controllers';

type Props = ClosedTagProps & FocusTrapProps;

export const FocusTrap: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, ['focusable']);
    const { $root } = createFocusTrap(locals);

    const $ = mergeProps($others, $root);

    return <Dynamic component="div" {...$} />;
};
