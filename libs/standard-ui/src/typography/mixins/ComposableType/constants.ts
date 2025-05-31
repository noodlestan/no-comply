import { definePropKeys } from '@no-comply/solid-primitives';

import { ACTION_LABEL_MIXIN_PROPS } from '../ActionLabel';
import { DISPLAY_MIXIN_PROPS } from '../Display';
import { LABEL_MIXIN_PROPS } from '../Label';
import { TEXT_MIXIN_PROPS } from '../Text';

import type { ComposableTypeMixinAllProps } from './types';

export const $COMPOSABLE_TYPE_MIXIN = 'mixin:standard:composable-type';

export const COMPOSABLE_TYPE_MIXIN_PROPS = definePropKeys<ComposableTypeMixinAllProps>()([
    ...ACTION_LABEL_MIXIN_PROPS,
    ...DISPLAY_MIXIN_PROPS,
    ...LABEL_MIXIN_PROPS,
    ...TEXT_MIXIN_PROPS,
    'type',
]);
