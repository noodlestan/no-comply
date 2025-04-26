import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { DIVIDER_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { DividerProps } from './types';

export const DIVIDER_PROPS = definePropKeys<DividerProps>()([
    ...DIVIDER_MIXIN_PROPS,
    'variant',
    'length',
]);
