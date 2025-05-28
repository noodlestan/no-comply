import type { FeedbackMessageAPI, FeedbackMessageProps } from '@noodlestan/headless-ui';

import type { ContentMessageTemplateOwnProps } from '../../../content';

export type MessageBoxProps = Omit<FeedbackMessageProps, 'aria-describedby'> &
    ContentMessageTemplateOwnProps;

export type MessageBoxAPI = FeedbackMessageAPI;
