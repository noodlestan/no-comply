import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import { createFeedbackMessage } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

import styles from './MessageToast.module.scss';
import type { MessageToastAPI, MessageToastProps } from './types';

export const createMessageToast = (props: MessageToastProps): MessageToastAPI => {
    const {
        $root: $feedbackMessageRoot,
        $title: $feedbackMessageTitle,
        $description: $feedbackMessageDescription,
        iconProps: feedbackMessageIconProps,
    } = createFeedbackMessage(props);

    const classList = staticClassList(styles, 'MessageToast');
    const $localRoot = {
        classList,
    };

    const $title = {
        classList: staticClassList(styles, 'MessageToast--Title'),
    };

    const iconProps = {
        size: 'small' as ContentSize,
    };

    return {
        $root: mergeProps($feedbackMessageRoot, $localRoot),
        $title: mergeProps($feedbackMessageTitle, $title),
        $description: $feedbackMessageDescription,
        iconProps: mergeProps(feedbackMessageIconProps, iconProps),
    };
};
