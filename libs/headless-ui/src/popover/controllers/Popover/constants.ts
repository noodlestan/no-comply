import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { POPOVER_CONTEXT_OPTIONS } from '../../contexts';

import type { PopoverProps } from './types';

export const POPOVER_PROPS = definePropKeys<PopoverProps>()([
    ...POPOVER_CONTEXT_OPTIONS,
    'onShow',
    'onHide',
]);
