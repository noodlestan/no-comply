import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { ALIGN_TO_FIRST_LINE_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { SizedActionMixinProps } from './types';

export const SIZED_ACTION_MIXIN_PROPS = definePropKeys<SizedActionMixinProps>()([
    ...ALIGN_TO_FIRST_LINE_MIXIN_PROPS,
    'size',
]);
