import { definePropKeys } from '@no-comply/solid-primitives';

import { TEXT_MIXIN_PROPS } from '../Text';

import type { ComposableTypeMixinAllProps } from './types';

export const $COMPOSABLE_TYPE_MIXIN = 'mixin:standard:composable-type';

export const COMPOSABLE_TYPE_MIXIN_PROPS = definePropKeys<ComposableTypeMixinAllProps>()([
	...TEXT_MIXIN_PROPS, // same as LABEL_MIXIN_PROPS and ACTION_LABEL_MIXIN_PROPS
	'level', // from DISPLAY_MIXIN_PROPS
	'type',
]);
