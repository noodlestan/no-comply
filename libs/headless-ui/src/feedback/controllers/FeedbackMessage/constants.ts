import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';

import { CONTENT_MESSAGE_PROPS } from '../../../content';

import type { FeedbackMessageProps } from './types';

export const FEEDBACK_MESSAGE_PROPS = definePropKeys<FeedbackMessageProps>()([
    ...omitPropKeys(CONTENT_MESSAGE_PROPS, ['icon'] as const),
]);
