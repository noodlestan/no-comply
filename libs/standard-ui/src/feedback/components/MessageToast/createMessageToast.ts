import { createFeedbackMessage } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { $MESSAGE_TOAST } from './constants';
import type { MessageToastAPI, MessageToastProps } from './types';

export const createMessageToast = (props: MessageToastProps): MessageToastAPI => {
	const [locals, expose, compose] = createExposable($MESSAGE_TOAST, props);

	const { $root: $staticMessageRoot, ...rest } = compose(createFeedbackMessage(locals));

	return exposeAPI(expose, '$root', {
		...rest,
		$root: $staticMessageRoot,
	});
};
