import { definePropKeys } from '@no-comply/solid-primitives';

import type { CalloutProps } from './types';

export const $CALLOUT = 'component:standard:callout';

export const CALLOUT_PROPS = definePropKeys<CalloutProps>()([
	'title',
	'summary',
	'variant',
	'size',
	'length',
	'onClose',
]);
