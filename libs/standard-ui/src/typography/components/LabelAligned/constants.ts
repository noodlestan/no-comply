import { definePropKeys } from '@no-comply/solid-primitives';

import { LABEL_OWN_PROPS } from '../Label';

import type { LabelAlignedProps } from './types';

export const $LABEL_ALIGNED = 'component:standard:label-aligned';

export const LABEL_ALIGNED_PROPS = definePropKeys<LabelAlignedProps>()([...LABEL_OWN_PROPS]);
