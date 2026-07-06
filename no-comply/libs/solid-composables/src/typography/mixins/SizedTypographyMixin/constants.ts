import { definePropKeys } from '@no-comply/solid-primitives';

import { ALIGNED_TO_FIRST_LINE_MIXIN_PROPS } from '../../../align';

import type { SizedTypographyMixinProps } from './types';

export const $SIZED_TYPOGRAPHY_MIXIN = 'mixin:composable:typography';

export const SIZED_TYPOGRAPHY_MIXIN_PROPS = definePropKeys<SizedTypographyMixinProps>()(
	ALIGNED_TO_FIRST_LINE_MIXIN_PROPS,
);
