import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { FIELD_PROPS as HEADLESS_FIELD_PROPS } from '@noodlestan/headless-ui';

import type { FieldProps } from './types';

export const FIELD_PROPS = definePropKeys<FieldProps>()([...HEADLESS_FIELD_PROPS, 'size']);
