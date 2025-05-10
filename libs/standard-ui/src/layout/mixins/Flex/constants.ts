import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { FLEX_MIXIN_PROPS as HEADLESS_FLEX_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { FlexMixinProps } from './types';

export const FLEX_MIXIN_PROPS = definePropKeys<FlexMixinProps>()([
    ...HEADLESS_FLEX_MIXIN_PROPS,
    'gap',
]);
