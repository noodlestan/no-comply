import { definePropKeys } from '@no-comply/solid-primitives';

import { ACTION_MIXIN_PROPS } from '../Action';

import type { ButtonMixinProps } from './types';

export const $BUTTON_MIXIN = 'mixin:standard:button';

export const BUTTON_MIXIN_PROPS = definePropKeys<ButtonMixinProps>()([
	...ACTION_MIXIN_PROPS,
	'size',
	'aligned',
]);
