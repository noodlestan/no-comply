import { ARIA_FEEDBACK_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import type { FeedbackMessageProps } from './types';

export const $FEEDBACK_MESSAGE = 'controller:composable:feedback-message';

export const FEEDBACK_MESSAGE_ARIA_PROPS = omitPropKeys(ARIA_FEEDBACK_PROPS, ['state'] as const);

export const FEEDBACK_MESSAGE_PROPS = definePropKeys<FeedbackMessageProps>()([
	...FEEDBACK_MESSAGE_ARIA_PROPS,
	'variant',
	'pending',
	'variantStateMap',
	'icon',
	'iconMap',
]);
