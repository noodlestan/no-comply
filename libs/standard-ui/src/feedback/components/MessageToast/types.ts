import type { FeedbackMessageAPI, FeedbackMessageProps } from '@noodlestan/headless-ui';

import type { ContentMessageTemplateOwnProps } from '../../../content';

export type MessageToastProps = Omit<FeedbackMessageProps, 'aria-describedby'> &
    ContentMessageTemplateOwnProps;

export type MessageToastAPI = FeedbackMessageAPI;
