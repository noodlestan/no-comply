import { definePropKeys } from '@no-comply/solid-primitives';

import { FOCUSABLE_PROPS } from '../../controllers';

import type { FocusableBaseProps } from './types';

export const $FOCUSABLE_BASE = 'component:composable:focusable-base';

export const FOCUSABLE_BASE_PROPS = definePropKeys<FocusableBaseProps>()([
	...FOCUSABLE_PROPS,
	'labels',
]);
