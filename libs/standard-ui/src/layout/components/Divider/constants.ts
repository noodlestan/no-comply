import { DIVIDER_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { DividerProps } from './types';

export const DIVIDER_PROPS = definePropKeys<DividerProps>()([
    ...DIVIDER_MIXIN_PROPS,
    'variant',
    'length',
]);
