import { definePropKeys } from '@no-comply/solid-primitives';

import { ALIGNED_TO_FIRST_LINE_MIXIN_PROPS } from '../../../typography';

import type { IconMixinProps } from './types';

export const $ICON_MIXIN = 'mixin:composable:icon';

export const ICON_MIXIN_PROPS = definePropKeys<IconMixinProps>()([
    ...ALIGNED_TO_FIRST_LINE_MIXIN_PROPS,
]);
