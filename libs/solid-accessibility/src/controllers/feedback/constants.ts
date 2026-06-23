import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaFeedbackProps } from './types';

export const ARIA_FEEDBACK_PROPS = definePropKeys<AriaFeedbackProps>()([
	...ARIA_LABELLED_PROPS,
	'state',
	'live',
]);
