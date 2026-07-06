import { definePropKeys } from '@no-comply/solid-primitives';

import type { ToastMessageProps } from './types';

export const $TOASTMESSAGE = 'component:standard:toastmessage';

export const TOASTMESSAGE_PROPS = definePropKeys<ToastMessageProps>()([
	'title',
	'summary',
	'variant',
	'size',
	'length',
	'onClose',
]);
