import { createFeedbackMessage } from '@noodlestan/headless-ui';

import type { MessageToastAPI, MessageToastProps } from './types';

export const createMessageToast = (props: MessageToastProps): MessageToastAPI => {
    return createFeedbackMessage(props);
};
