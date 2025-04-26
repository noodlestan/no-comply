import type { AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FeedbackMessageAPI, FeedbackMessageProps } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type MessageBoxProps = Omit<FeedbackMessageProps, keyof AriaLabelledProps> & {
    size?: MessageBoxSize;
    length?: MessageBoxLength;
};

export type MessageBoxSize = 'small' | 'normal';
export type MessageBoxLength = 'compact' | 'full';

export type MessageBoxAPI = {
    $root: FeedbackMessageAPI['$root'] & {
        classList: ClassList;
    };
    $label: FeedbackMessageAPI['$label'];
    $icon: FeedbackMessageAPI['iconProps'] & {
        size: ContentSize;
    };
};
