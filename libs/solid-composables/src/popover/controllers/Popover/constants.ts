import { definePropKeys } from '@no-comply/solid-primitives';

import { POPOVER_CONTEXT_OPTIONS } from '../../contexts';

import type { PopoverProps } from './types';

export const $POPOVER = 'controller:composable:popover';

export const POPOVER_PROPS = definePropKeys<PopoverProps>()([
    ...POPOVER_CONTEXT_OPTIONS,
    'onShow',
    'onHide',
]);
