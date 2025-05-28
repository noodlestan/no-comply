import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';
import { STATIC_MESSAGE_PROPS } from '@noodlestan/headless-ui';

import { CONTENT_MESSAGE_TEMPLATE_OWN_PROPS } from '../../../content';

import type { MessageBoxProps } from './types';

export const MESSAGE_BOX_PROPS = definePropKeys<MessageBoxProps>()([
    ...omitPropKeys(STATIC_MESSAGE_PROPS, ['aria-describedby'] as const),
    ...CONTENT_MESSAGE_TEMPLATE_OWN_PROPS,
]);
