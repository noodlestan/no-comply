import { FIELD_CONTEXT_OPTIONS } from '@no-comply/solid-contexts';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { FieldProps } from './types';

export const FIELD_PROPS = definePropKeys<FieldProps>()(FIELD_CONTEXT_OPTIONS);
