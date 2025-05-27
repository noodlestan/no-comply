import { type ClosedTagProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, mergeProps, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { ACTION_LABEL_ALIGNED_PROPS } from './constants';
import { createActionLabelAligned } from './createActionLabelAligned';
import type { ActionLabelAlignedProps } from './types';

type Props = ClosedTagProps & ActionLabelAlignedProps;

export const ActionLabelAligned: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, ACTION_LABEL_ALIGNED_PROPS);

    const { $root } = createActionLabelAligned(locals);
    const $ = mergeProps($others, $root);

    return <Dynamic {...$} />;
};
