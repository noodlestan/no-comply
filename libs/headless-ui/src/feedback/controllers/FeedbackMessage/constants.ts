import { ARIA_LABELLED_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { FeedbackMessageProps } from './types';

export const FEEDBACK_MESSAGE_PROPS = definePropKeys<FeedbackMessageProps>()([
    ...ARIA_LABELLED_PROPS,
    'variant',
]);
