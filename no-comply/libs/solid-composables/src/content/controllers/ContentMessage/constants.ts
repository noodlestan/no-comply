import { ARIA_LABELLED_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { ContentMessageProps } from './types';

export const $CONTENT_MESSAGE = 'controller:composable:content-message';

export const CONTENT_MESSAGE_PROPS = definePropKeys<ContentMessageProps>()([
	...ARIA_LABELLED_PROPS,
	'variant',
	'icon',
	'iconMap',
]);
