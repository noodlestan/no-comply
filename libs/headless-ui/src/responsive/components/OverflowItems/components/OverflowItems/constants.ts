import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { OVERFLOW_ITEMS_CONTEXT_OPTIONS } from '../../private';

import type { OverflowItemsProps } from './types';

export const OVERFLOW_ITEMS_PROPS = definePropKeys<OverflowItemsProps>()([
    ...OVERFLOW_ITEMS_CONTEXT_OPTIONS,
    'renderOverflow',
]);
