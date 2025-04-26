import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { FocusContextOptions } from './types';

export const FOCUS_CONTEXT_OPTIONS = definePropKeys<FocusContextOptions>()([
    'disabled',
    'autoFocus',
]);
