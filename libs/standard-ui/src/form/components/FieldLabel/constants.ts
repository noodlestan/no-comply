import { FIELD_LABEL_PROPS as HEADLESS_FIELD_LABEL_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { FieldLabelProps } from './types';

export const $FIELD_LABEL = 'component:standard:field-label';

export const FIELD_LABEL_PROPS = definePropKeys<FieldLabelProps>()([
	...HEADLESS_FIELD_LABEL_PROPS,
	'size',
]);
