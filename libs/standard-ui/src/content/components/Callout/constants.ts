import { STATIC_MESSAGE_PROPS } from '@no-comply/solid-composables';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { CONTENT_MESSAGE_TEMPLATE_OWN_PROPS } from '../../templates';

import type { CalloutProps } from './types';

export const $CALLOUT = 'component:standard:callout';

export const CALLOUT_PROPS = definePropKeys<CalloutProps>()([
    ...omitPropKeys(STATIC_MESSAGE_PROPS, ['aria-describedby'] as const),
    ...omitPropKeys(CONTENT_MESSAGE_TEMPLATE_OWN_PROPS, ['onClose'] as const),
]);
