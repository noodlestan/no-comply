import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ListContextOptions } from './types';

export const LIST_CONTEXT_OPTIONS = definePropKeys<ListContextOptions>()([
    'components',
    'items',
    'disabled',
    'selected',
]);
