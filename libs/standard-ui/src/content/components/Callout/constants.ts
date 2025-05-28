import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';
import { STATIC_MESSAGE_PROPS } from '@noodlestan/headless-ui';

import { CONTENT_MESSAGE_TEMPLATE_OWN_PROPS } from '../../templates';

import type { CalloutProps } from './types';

export const CALLOUT_PROPS = definePropKeys<CalloutProps>()([
    ...omitPropKeys(STATIC_MESSAGE_PROPS, ['aria-describedby'] as const),
    ...omitPropKeys(CONTENT_MESSAGE_TEMPLATE_OWN_PROPS, ['onClose'] as const),
]);
