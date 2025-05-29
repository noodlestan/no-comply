import { TEXT_MIXIN_PROPS as HEADLESS_TEXT_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { ActionLabelMixinProps } from './types';

export const ACTION_LABEL_MIXIN_PROPS = definePropKeys<ActionLabelMixinProps>()([
    ...HEADLESS_TEXT_MIXIN_PROPS,
    'size',
]);
