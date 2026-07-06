import { FOCUS_RING_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { FOCUS_RING_MIXIN_PROPS } from '../../mixins';

import type { FocusRingProps } from './types';

export const $FOCUS_RING = 'component:standard:focus-ring';

export const FOCUS_RING_PROPS2 = definePropKeys<FocusRingProps>()([
	...FOCUS_RING_MIXIN_PROPS,
	...FOCUS_RING_PROPS,
]);
