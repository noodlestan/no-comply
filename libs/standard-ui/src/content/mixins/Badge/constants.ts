import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { SIZED_CONTENT_MIXIN_PROPS } from '../SizedContent';

import type { BadgeMixinProps } from './types';

export const $BADGE_MIXIN = 'mixin:standard:badge';

export const BADGE_MIXIN_PROPS = definePropKeys<BadgeMixinProps>()([
	...omitPropKeys(SIZED_CONTENT_MIXIN_PROPS, ['scale'] as const),
	'color',
]);
