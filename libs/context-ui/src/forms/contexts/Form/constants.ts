import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { FormContextOptions } from './types';

export const FORM_CONTEXT_OPTIONS = definePropKeys<FormContextOptions>()([
    'disabled',
    'readonly',
    'pending',
    'enableFeedback',
]);
