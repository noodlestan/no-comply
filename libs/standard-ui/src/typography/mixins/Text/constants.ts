import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { TEXT_MIXIN_PROPS as HEADLESS_TEXT_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { TextMixinProps } from './types';

export const TEXT_MIXIN_PROPS = definePropKeys<TextMixinProps>()([
    ...HEADLESS_TEXT_MIXIN_PROPS,
    'variant',
]);
