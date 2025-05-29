import { STATIC_MESSAGE_PROPS } from '@no-comply/solid-composables';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { CONTENT_MESSAGE_TEMPLATE_OWN_PROPS } from '../../../content';

import type { MessageBoxProps } from './types';

export const MESSAGE_BOX_PROPS = definePropKeys<MessageBoxProps>()([
    ...omitPropKeys(STATIC_MESSAGE_PROPS, ['aria-describedby'] as const),
    ...CONTENT_MESSAGE_TEMPLATE_OWN_PROPS,
]);
