import { DIVIDER_MIXIN_PROPS as HEADLESS_DIVIDER_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { DividerMixinProps } from './types';

export const DIVIDER_MIXIN_PROPS = definePropKeys<DividerMixinProps>()([
    ...HEADLESS_DIVIDER_MIXIN_PROPS,
    'variant',
    'length',
]);
