import { definePropKeys } from '@no-comply/solid-primitives';

import { ALIGNED_TO_FIRST_LINE_MIXIN_PROPS } from '../AlignedToFirstLine';

import type { TypographyMixinProps } from './types';

export const $TYPOGRAPHY_MIXIN = 'mixin:composable:typography';

export const TYPOGRAPHY_MIXIN_PROPS = definePropKeys<TypographyMixinProps>()([
	...ALIGNED_TO_FIRST_LINE_MIXIN_PROPS,
	'nowrap',
]);
