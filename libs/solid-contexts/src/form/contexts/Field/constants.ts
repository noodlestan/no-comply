import { definePropKeys } from '@no-comply/solid-primitives';

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
