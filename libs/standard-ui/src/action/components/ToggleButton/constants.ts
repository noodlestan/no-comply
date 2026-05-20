import { TOGGLE_ACTION_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { ToggleButtonProps } from './types';

export const $TOGGLE_BUTTON = 'component:standard:toggle-button';

export const TOGGLE_BUTTON_PROPS = definePropKeys<ToggleButtonProps>()([
	'size',
	'onPress',
	'disabled',
	'iconOnly',
	...TOGGLE_ACTION_PROPS,
]);
