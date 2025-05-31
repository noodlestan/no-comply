import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { CONTENT_MESSAGE_PROPS } from '../ContentMessage';

import type { StaticMessageProps } from './types';

export const $STATIC_MESSAGE = 'controller:composable:static-message';

export const STATIC_MESSAGE_PROPS = definePropKeys<StaticMessageProps>()([
    ...omitPropKeys(CONTENT_MESSAGE_PROPS, ['icon'] as const),
]);
