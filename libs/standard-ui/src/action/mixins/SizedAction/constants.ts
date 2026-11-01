import { definePropKeys } from '@no-comply/solid-primitives';

import { SIZED_CONTENT_MIXIN_PROPS } from '../../../content';

import type { SizedActionMixinProps } from './types';

export const $SIZED_ACTION_MIXIN = 'mixin:standard:sized-action';

export const SIZED_ACTION_MIXIN_PROPS = definePropKeys<SizedActionMixinProps>()([
	...SIZED_CONTENT_MIXIN_PROPS,
]);
