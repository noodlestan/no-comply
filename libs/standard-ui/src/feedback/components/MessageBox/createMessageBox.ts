import { createFeedbackMessage } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { $MESSAGE_BOX } from './constants';
import type { MessageBoxAPI, MessageBoxProps } from './types';

export const createMessageBox = (props: MessageBoxProps): MessageBoxAPI => {
    const [locals, expose, compose] = createExposable($MESSAGE_BOX, props);

    const { $root: $staticMessageRoot, ...rest } = compose(createFeedbackMessage(locals));

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: $staticMessageRoot,
    });
};
