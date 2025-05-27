import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { FeedbackMessageProps } from './types';

export const FEEDBACK_MESSAGE_PROPS = definePropKeys<FeedbackMessageProps>()([
    'title',
    'variant',
    'aria-describedby',
]);
