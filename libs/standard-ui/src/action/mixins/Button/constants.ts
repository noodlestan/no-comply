import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { ACTION_LABEL_MIXIN_PROPS } from '../../../typography';
import { ACTION_MIXIN_PROPS } from '../Action';
import { SIZED_ACTION_MIXIN_PROPS } from '../SizedAction';

import type { ButtonMixinProps } from './types';

export const BUTTON_MIXIN_PROPS = definePropKeys<ButtonMixinProps>()([
    ...ACTION_MIXIN_PROPS,
    ...omitPropKeys(SIZED_ACTION_MIXIN_PROPS, ['size'] as const),
    ...omitPropKeys(ACTION_LABEL_MIXIN_PROPS, ['nowrap'] as const),
]);
