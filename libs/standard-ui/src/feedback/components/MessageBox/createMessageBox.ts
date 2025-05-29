import { createFeedbackMessage } from '@no-comply/solid-composables';

import type { MessageBoxAPI, MessageBoxProps } from './types';

export const createMessageBox = (props: MessageBoxProps): MessageBoxAPI => {
    return createFeedbackMessage(props);
};
