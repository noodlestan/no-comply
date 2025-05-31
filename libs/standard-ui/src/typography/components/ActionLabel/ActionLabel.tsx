import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { ACTION_LABEL_PROPS } from './constants';
import { createActionLabel } from './createActionLabel';
import type { ActionLabelProps } from './types';

type Props = ClosedTagProps & ActionLabelProps;

export const ActionLabel: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, ACTION_LABEL_PROPS);

    const { $root } = createActionLabel(locals);
    const $ = combineProps($others, $root);

    return <Dynamic {...$} />;
};
