import { definePropKeys } from '@no-comply/solid-primitives';

import type { TypographyMixinProps } from './types';

export const $TYPOGRAPHY_MIXIN = 'mixin:composable:typography';

export const TYPOGRAPHY_MIXIN_PROPS = definePropKeys<TypographyMixinProps>()(['nowrap']);
