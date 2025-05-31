import { definePropKeys } from '@no-comply/solid-primitives';

import { ACTION_LABEL_OWN_PROPS } from '../ActionLabel';

import type { ActionLabelAlignedProps } from './types';

export const $ACTION_LABEL_ALIGNED = 'component:standard:action-label-aligned';

export const ACTION_LABEL_ALIGNED_PROPS = definePropKeys<ActionLabelAlignedProps>()([
    ...ACTION_LABEL_OWN_PROPS,
]);
