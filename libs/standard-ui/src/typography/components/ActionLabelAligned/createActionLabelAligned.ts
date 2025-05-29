import { mergeProps } from '@no-comply/solid-primitives';

import type { ComposableActionLabelProps } from '../../mixins';
import { useFirstLineAlign } from '../../providers';
import { createActionLabel } from '../ActionLabel';

import type { ActionLabelAlignedAPI, ActionLabelAlignedProps } from './types';

export const createActionLabelAligned = (props: ActionLabelAlignedProps): ActionLabelAlignedAPI => {
    const alignedProps = useFirstLineAlign<ComposableActionLabelProps>('action');

    const merged = mergeProps(props, alignedProps, { aligned: true });

    return createActionLabel(merged);
};
