import type { AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FeedbackMessageAPI, FeedbackMessageProps } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

export type MessageToastProps = Omit<FeedbackMessageProps, keyof AriaLabelledProps>;

export type MessageToastAPI = {
    $root: FeedbackMessageAPI['$root'] & {
        classList: ClassList;
    };
    $title: FeedbackMessageAPI['$title'] & {
        classList: ClassList;
    };
    $description: FeedbackMessageAPI['$description'];
    iconProps: FeedbackMessageAPI['iconProps'] & {
        size: ContentSize;
    };
};
