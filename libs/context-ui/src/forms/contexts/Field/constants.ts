import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { FieldContextOptions } from './types';

export const FIELD_CONTEXT_OPTIONS = definePropKeys<FieldContextOptions>()([
    'required',
    'disabled',
    'readonly',
    'pending',
    'touched',
    'modified',
    'invalid',
]);
