import type { FeedbackMessageAPI, FeedbackMessageProps } from '@no-comply/solid-composables';

import type { ContentMessageTemplateOwnProps } from '../../../content';

export type MessageBoxProps = Omit<FeedbackMessageProps, 'aria-describedby'> &
    ContentMessageTemplateOwnProps;

export type MessageBoxAPI = FeedbackMessageAPI;
