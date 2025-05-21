import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { POPOVER_PROPS as HEADLESS_POPOVER_PROPS } from '@noodlestan/headless-ui';

import type { PopoverProps } from './types';

export const POPOVER_PROPS = definePropKeys<PopoverProps>()(HEADLESS_POPOVER_PROPS);
