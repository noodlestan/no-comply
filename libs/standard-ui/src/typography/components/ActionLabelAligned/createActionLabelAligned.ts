import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import type { ComposableActionLabelProps } from '../../mixins';
import { useAlignFirstLine } from '../../providers';
import { createActionLabel } from '../ActionLabel';

import { $ACTION_LABEL_ALIGNED } from './constants';
import type { ActionLabelAlignedAPI, ActionLabelAlignedProps } from './types';

export const createActionLabelAligned = (props: ActionLabelAlignedProps): ActionLabelAlignedAPI => {
    const [locals, expose, compose] = createExposable($ACTION_LABEL_ALIGNED, props);

    const alignedProps = useAlignFirstLine<ComposableActionLabelProps>('action');
    const merged = combineProps(locals, alignedProps, { aligned: true });

    const { $root: $actionLabelRoot } = compose(createActionLabel(merged));

    return exposeAPI(expose, '$root', {
        $root: $actionLabelRoot,
    });
};
