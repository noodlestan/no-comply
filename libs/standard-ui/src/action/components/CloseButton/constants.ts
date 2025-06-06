import { definePropKeys } from '@no-comply/solid-primitives';

import type { CloseButtonProps } from './types';

export const $CLOSE_BUTTON = 'component:standard:close-button';

export const CLOSE_BUTTON_PROPS = definePropKeys<CloseButtonProps>()([
	'label',
	'size',
	'onPress',
	'disabled',
	'aligned',
]);
