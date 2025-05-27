import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';
import { createFeedbackMessage } from '@noodlestan/headless-ui';

import styles from './MessageBox.module.scss';
import type { MessageBoxAPI, MessageBoxProps } from './types';

const defaultProps: PickRequired<MessageBoxProps, 'size' | 'length'> = {
    size: 'normal',
    length: 'full',
};

export const createMessageBox = (props: MessageBoxProps): MessageBoxAPI => {
    const {
        $root: $feedbackMessageRoot,
        $title: $feedbackMessageTitle,
        $description: $feedbackMessageDescription,
        iconProps: feedbackMessageIconProps,
    } = createFeedbackMessage(props);

    const size = () => props.size ?? defaultProps.size;
    const length = () => props.length ?? defaultProps.length;
    const classList = createClassList(styles, () => [
        'MessageBox',
        `size-${size()}`,
        `length-${length()}`,
    ]);
    const $localRoot = createComputedProps({
        classList,
    });

    const $title = {
        classList: staticClassList(styles, 'MessageBox--Title'),
    };

    const iconProps = createComputedProps({
        size,
    });

    return {
        $root: mergeProps($feedbackMessageRoot, $localRoot),
        $title: mergeProps($feedbackMessageTitle, $title),
        $description: $feedbackMessageDescription,
        $icon: mergeProps(feedbackMessageIconProps, iconProps),
    };
};
