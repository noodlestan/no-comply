import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { TEXT_MIXIN_PROPS as HEADLESS_TEXT_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { DisplayMixinProps } from './types';

export const DISPLAY_MIXIN_PROPS = definePropKeys<DisplayMixinProps>()([
    ...HEADLESS_TEXT_MIXIN_PROPS,
    'level',
    'variant',
]);
