import { createFeedbackMessage } from '@no-comply/solid-composables';

import type { MessageToastAPI, MessageToastProps } from './types';

export const createMessageToast = (props: MessageToastProps): MessageToastAPI => {
    return createFeedbackMessage(props);
};
