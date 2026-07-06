import { definePropKeys } from '@no-comply/solid-primitives';

import type { SegmentedButtonContextOptions } from './types';

export const SEGMENTED_BUTTON_CONTEXT_OPTIONS = definePropKeys<SegmentedButtonContextOptions>()([
	'size',
	'optionGroupContextValue',
]);
