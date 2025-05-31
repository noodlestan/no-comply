import { definePropKeys } from '@no-comply/solid-primitives';

import { ANCHORED_POPOVER_PROPS } from '../../controllers';

import type { AnchoredPopoverBaseProps } from './types';

export const $ANCHORED_POPOVER_BASE = 'component:composable:anchored-popover';

export const ANCHORED_POPOVER_BASE_PROPS = definePropKeys<AnchoredPopoverBaseProps>()([
    ...ANCHORED_POPOVER_PROPS,
    'trigger',
    'children',
]);
