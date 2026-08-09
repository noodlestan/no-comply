import { definePropKeys } from '@no-comply/solid-primitives';

import type { OptionGroupContextOptions } from './types';

export const OPTION_GROUP_CONTEXT_OPTIONS = definePropKeys<OptionGroupContextOptions>()([
	'name',
	'value',
	'disabled',
	'onValueChange',
]);
