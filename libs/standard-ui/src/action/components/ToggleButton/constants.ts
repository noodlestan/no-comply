import { TOGGLE_ACTION_PROPS } from '@no-comply/solid-composables';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { TOGGLE_ACTION_MIXIN_PROPS } from '../../mixins';

import type { ToggleButtonProps } from './types';

export const $TOGGLE_BUTTON = 'component:standard:toggle-button';

export const TOGGLE_BUTTON_PROPS = definePropKeys<ToggleButtonProps>()([
	...TOGGLE_ACTION_PROPS,
	...omitPropKeys(TOGGLE_ACTION_MIXIN_PROPS, ['value'] as const),
	'size',
	'onPress',
	'disabled',
	'iconOnly',
]);
