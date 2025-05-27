import { ARIA_LABELLED_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';
import { FEEDBACK_MESSAGE_PROPS } from '@noodlestan/headless-ui';

import type { MessageToastProps } from './types';

export const MESSAGE_TOAST_PROPS = definePropKeys<MessageToastProps>()([
    ...omitPropKeys(FEEDBACK_MESSAGE_PROPS, ARIA_LABELLED_PROPS),
]);
