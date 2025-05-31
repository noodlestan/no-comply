import { definePropKeys } from '@no-comply/solid-primitives';

import type { FieldLabelProps } from './types';

export const $FIELD_LABEL = 'controller:composable:field-label';

export const FIELD_LABEL_PROPS = definePropKeys<FieldLabelProps>()(['for']);
