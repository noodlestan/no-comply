import { definePropKeys } from '@no-comply/solid-primitives';

import { ALIGNED_TO_FIRST_LINE_MIXIN_PROPS } from '../AlignedToFirstLine';

import type { TextMixinProps } from './types';

export const TEXT_MIXIN_PROPS = definePropKeys<TextMixinProps>()([
    ...ALIGNED_TO_FIRST_LINE_MIXIN_PROPS,
    'nowrap',
]);
