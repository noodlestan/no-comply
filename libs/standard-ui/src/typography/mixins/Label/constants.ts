import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { TEXT_MIXIN_PROPS as HEADLESS_TEXT_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { LabelMixinProps } from './types';

export const LABEL_MIXIN_PROPS = definePropKeys<LabelMixinProps>()([
    ...HEADLESS_TEXT_MIXIN_PROPS,
    'size',
]);
