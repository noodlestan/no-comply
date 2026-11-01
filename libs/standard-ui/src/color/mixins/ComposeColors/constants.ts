import { definePropKeys } from '@no-comply/solid-primitives';

import type { ComposeColorsMixinProps } from './types';

export const $COMPOSE_COLORS_MIXIN = 'mixin:standard:compose-colors';

export const COMPOSE_COLORS_MIXIN_PROPS = definePropKeys<ComposeColorsMixinProps>()([
	'fg',
	'bg',
	'border',
]);
