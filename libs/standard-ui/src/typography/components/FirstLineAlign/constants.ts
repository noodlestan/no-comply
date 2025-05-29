import { definePropKeys } from '@no-comply/solid-primitives';

import { COMPOSABLE_TYPE_MIXIN_PROPS, FIRST_LINE_ALIGN_MIXIN_PROPS } from '../../mixins';

import type { FirstLineAlignAllProps } from './types';

export const FIRST_LINE_ALIGN_PROPS = definePropKeys<FirstLineAlignAllProps>()([
    ...FIRST_LINE_ALIGN_MIXIN_PROPS,
    ...COMPOSABLE_TYPE_MIXIN_PROPS,
    'tag',
]);
