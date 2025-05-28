import { createFeedbackMessage } from '@noodlestan/headless-ui';

import type { MessageBoxAPI, MessageBoxProps } from './types';

export const createMessageBox = (props: MessageBoxProps): MessageBoxAPI => {
    return createFeedbackMessage(props);
};
