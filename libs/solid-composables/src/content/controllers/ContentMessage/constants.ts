import { definePropKeys } from '@no-comply/solid-primitives';

import type { ContentMessageProps } from './types';

export const CONTENT_MESSAGE_PROPS = definePropKeys<ContentMessageProps>()([
    'title',
    'icon',
    'variant',
    'aria-describedby',
]);
