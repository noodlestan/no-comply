import { combineProps } from '@no-comply/solid-primitives';

import type { ComposableActionLabelProps } from '../../mixins';
import { useAlignFirstLine } from '../../providers';
import { createActionLabel } from '../ActionLabel';

import type { ActionLabelAlignedAPI, ActionLabelAlignedProps } from './types';

export const createActionLabelAligned = (props: ActionLabelAlignedProps): ActionLabelAlignedAPI => {
    const alignedProps = useAlignFirstLine<ComposableActionLabelProps>('action');

    const merged = combineProps(props, alignedProps, { aligned: true });

    return createActionLabel(merged);
};
