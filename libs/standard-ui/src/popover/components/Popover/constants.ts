import { POPOVER_PROPS as HEADLESS_POPOVER_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { PopoverProps } from './types';

export const $POPOVER = 'component:standard:popover';

export const POPOVER_PROPS = definePropKeys<PopoverProps>()(HEADLESS_POPOVER_PROPS);
