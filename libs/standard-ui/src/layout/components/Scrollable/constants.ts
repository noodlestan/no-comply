import { SCROLLABLE_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { ScrollableProps } from './types';

export const $SCROLLABLE = 'component:standard:scrollable';

export const SCROLLABLE_PROPS = definePropKeys<ScrollableProps>()([
	...SCROLLABLE_MIXIN_PROPS,
	'padding',
]);
