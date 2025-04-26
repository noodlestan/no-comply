import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import { createFeedbackMessage } from '@noodlestan/headless-ui';

import type { ContentSize } from '../../../types';

import styles from './MessageToast.module.css';
import type { MessageToastAPI, MessageToastProps } from './types';

export const createMessageToast = (props: MessageToastProps): MessageToastAPI => {
    const messageProps = mergeProps(props, { labelled: true });
    const {
        $root: $feedbackMessageRoot,
        $label,
        iconProps: feedbackMessageIconProps,
    } = createFeedbackMessage(messageProps);

    const classList = staticClassList(styles, 'MessageToast');
    const $localRoot = {
        classList,
    };

    const iconProps = {
        size: 'small' as ContentSize,
    };

    return {
        $root: mergeProps($feedbackMessageRoot, $localRoot),
        $label,
        iconProps: mergeProps(feedbackMessageIconProps, iconProps),
    };
};
