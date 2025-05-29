import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { CONTENT_MESSAGE_PROPS } from '../../../content';

import type { FeedbackMessageProps } from './types';

export const FEEDBACK_MESSAGE_PROPS = definePropKeys<FeedbackMessageProps>()([
    ...omitPropKeys(CONTENT_MESSAGE_PROPS, ['icon'] as const),
]);
