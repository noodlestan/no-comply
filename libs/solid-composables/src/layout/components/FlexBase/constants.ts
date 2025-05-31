import { definePropKeys } from '@no-comply/solid-primitives';

import { FLEX_MIXIN_PROPS, LAYOUT_MIXIN_PROPS } from '../../mixins';

import type { FlexBaseProps } from './types';

export const $FLEX_BASE = 'component:composable:flex-base';

export const FLEX_BASE_PROPS = definePropKeys<FlexBaseProps>()([
    ...LAYOUT_MIXIN_PROPS,
    ...FLEX_MIXIN_PROPS,
    'tag',
]);
