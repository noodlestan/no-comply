import { definePropKeys } from '@no-comply/solid-primitives';

import { FOCUS_TRAP_PROPS } from '../../controllers';

import type { FocusTrapBaseProps } from './types';

export const $FOCUS_TRAP_BASE = 'component:composable:focus-trap-base';

export const FOCUS_TRAP_BASE_PROPS = definePropKeys<FocusTrapBaseProps>()([...FOCUS_TRAP_PROPS]);
