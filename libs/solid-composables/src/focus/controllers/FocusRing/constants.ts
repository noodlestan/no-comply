import { definePropKeys } from '@no-comply/solid-primitives';

import type { FocusRingProps } from './types';

export const $FOCUS_RING = 'controller:composable:focus-ring';

export const FOCUS_RING_PROPS = definePropKeys<FocusRingProps>()(['passive']);
