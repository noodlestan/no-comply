import { STATIC_MESSAGE_PROPS } from '@no-comply/solid-composables';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { CONTENT_MESSAGE_TEMPLATE_OWN_PROPS } from '../../../content';

import type { MessageToastProps } from './types';

export const $MESSAGE_TOAST = 'component:standard:message-toast';

export const MESSAGE_TOAST_PROPS = definePropKeys<MessageToastProps>()([
	...omitPropKeys(STATIC_MESSAGE_PROPS, ['aria-describedby'] as const),
	...CONTENT_MESSAGE_TEMPLATE_OWN_PROPS,
]);
