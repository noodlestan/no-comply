import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ContentMessageProps } from './types';

export const CONTENT_MESSAGE_PROPS = definePropKeys<ContentMessageProps>()([
    'title',
    'icon',
    'variant',
    'aria-describedby',
]);
