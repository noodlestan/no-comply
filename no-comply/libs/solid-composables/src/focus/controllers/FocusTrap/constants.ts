import { definePropKeys } from '@no-comply/solid-primitives';

import type { FocusTrapProps } from './types';

export const $FOCUS_TRAP = 'controller:composable:focus-trap';

export const FOCUS_TRAP_PROPS = definePropKeys<FocusTrapProps>()(['focusable']);
