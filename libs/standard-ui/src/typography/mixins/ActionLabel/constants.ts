import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { TEXT_MIXIN_PROPS as HEADLESS_TEXT_MIXIN_PROPS } from '@noodlestan/headless-ui';

import type { ActionLabelMixinProps } from './types';

export const ACTION_LABEL_MIXIN_PROPS = definePropKeys<ActionLabelMixinProps>()([
    ...HEADLESS_TEXT_MIXIN_PROPS,
    'size',
]);
