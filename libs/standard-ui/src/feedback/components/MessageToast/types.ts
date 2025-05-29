import type { FeedbackMessageAPI, FeedbackMessageProps } from '@no-comply/solid-composables';

import type { ContentMessageTemplateOwnProps } from '../../../content';

export type MessageToastProps = Omit<FeedbackMessageProps, 'aria-describedby'> &
    ContentMessageTemplateOwnProps;

export type MessageToastAPI = FeedbackMessageAPI;
