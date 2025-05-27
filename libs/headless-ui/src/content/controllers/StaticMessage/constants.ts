import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { StaticMessageProps } from './types';

export const STATIC_MESSAGE_PROPS = definePropKeys<StaticMessageProps>()([
    'title',
    'variant',
    'aria-describedby',
]);
