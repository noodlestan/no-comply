import { FIELD_CONTEXT_OPTIONS } from '@noodlestan/context-ui';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { FieldProps } from './types';

export const FIELD_PROPS = definePropKeys<FieldProps>()(FIELD_CONTEXT_OPTIONS);
