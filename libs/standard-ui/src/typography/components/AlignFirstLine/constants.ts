import { definePropKeys } from '@no-comply/solid-primitives';

import { COMPOSABLE_TYPE_MIXIN_PROPS, FIRST_LINE_ALIGN_MIXIN_PROPS } from '../../mixins';

import type { AlignFirstLineAllProps } from './types';

export const ALIGN_FIRST_LINE_PROPS = definePropKeys<AlignFirstLineAllProps>()([
    ...FIRST_LINE_ALIGN_MIXIN_PROPS,
    ...COMPOSABLE_TYPE_MIXIN_PROPS,
    'tag',
]);
