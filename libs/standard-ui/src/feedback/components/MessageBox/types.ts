import type { FeedbackMessageProps } from '@noodlestan/headless-ui';

export type MessageBoxProps = FeedbackMessageProps & {
    size?: MessageBoxSize;
    length?: MessageBoxLength;
};

export type MessageBoxSize = 's' | 'm';
export type MessageBoxLength = 'compact' | 'full';
