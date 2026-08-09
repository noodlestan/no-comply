import { definePropKeys } from '@no-comply/solid-primitives';

import type { FocusContextOptions } from './types';

export const FOCUS_CONTEXT_OPTIONS = definePropKeys<FocusContextOptions>()([
	'disabled',
	'autoFocus',
]);
