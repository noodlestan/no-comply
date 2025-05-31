import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { ACTION_LABEL_ALIGNED_PROPS } from './constants';
import { createActionLabelAligned } from './createActionLabelAligned';
import type { ActionLabelAlignedProps } from './types';

type Props = ClosedTagProps & ActionLabelAlignedProps;

export const ActionLabelAligned: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, ACTION_LABEL_ALIGNED_PROPS);

    const { $root } = createActionLabelAligned(locals);
    const $ = combineProps($others, $root);

    return <Dynamic {...$} />;
};
