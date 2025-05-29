import { FIELD_PROPS as HEADLESS_FIELD_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { FieldProps } from './types';

export const FIELD_PROPS = definePropKeys<FieldProps>()([...HEADLESS_FIELD_PROPS, 'size']);
