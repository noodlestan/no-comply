import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createFeedbackMessage } from '@noodlestan/headless-ui';

import styles from './MessageBox.module.css';
import type { MessageBoxAPI, MessageBoxProps } from './types';

const defaultProps: PickRequired<MessageBoxProps, 'size' | 'length'> = {
    size: 'normal',
    length: 'full',
};

export const createMessageBox = (props: MessageBoxProps): MessageBoxAPI => {
    const messageProps = mergeProps(props, { labelled: true });
    const {
        $root: $feedbackMessageRoot,
        $label,
        iconProps: feedbackMessageIconProps,
    } = createFeedbackMessage(messageProps);

    const size = () => props.size ?? defaultProps.size;
    const length = () => props.length ?? defaultProps.length;
    const classList = createClassList(styles, () => [
        'MessageBox',
        `MessageBox-size-${size()}`,
        `MessageBox-length-${length()}`,
    ]);
    const $localRoot = createComputedProps({
        classList,
    });

    const iconProps = createComputedProps({
        size,
    });

    return {
        $root: mergeProps($feedbackMessageRoot, $localRoot),
        $label,
        $icon: mergeProps(feedbackMessageIconProps, iconProps),
    };
};
