import { definePropKeys } from '@no-comply/solid-primitives';

import { POPOVER_PROPS } from '../../controllers';

import type { PopoverBaseProps } from './types';

export const $POPOVER_BASE = 'component:composable:-popover';

export const POPOVER_BASE_PROPS = definePropKeys<PopoverBaseProps>()([...POPOVER_PROPS]);
