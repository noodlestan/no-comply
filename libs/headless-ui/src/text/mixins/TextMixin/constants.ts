import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { ALIGN_TO_FIRST_LINE_MIXIN_PROPS } from '../AlignToFirstLineMixin';

import type { TextMixinProps } from './types';

export const TEXT_MIXIN_PROPS = definePropKeys<TextMixinProps>()([
    ...ALIGN_TO_FIRST_LINE_MIXIN_PROPS,
    'nowrap',
]);
