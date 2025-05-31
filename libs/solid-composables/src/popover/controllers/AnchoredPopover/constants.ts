import { definePropKeys } from '@no-comply/solid-primitives';

import { PLACEMENT_PROPS } from '../../../placement';
import { POPOVER_CONTEXT_OPTIONS } from '../../contexts';

import type { AnchoredPopoverProps } from './types';

export const $ANCHORED_POPOVER = 'controller:composable:anchored-popover';

export const ANCHORED_POPOVER_PROPS = definePropKeys<AnchoredPopoverProps>()([
    ...POPOVER_CONTEXT_OPTIONS,
    ...PLACEMENT_PROPS,
]);
