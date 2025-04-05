import type { FeedbackMessageProps } from '@noodlestan/headless-ui';

export type MessageToastProps = FeedbackMessageProps & {
    size?: MessageToastSize;
    length?: MessageToastLength;
};

export type MessageToastSize = 's' | 'm';
export type MessageToastLength = 'compact' | 'full';
