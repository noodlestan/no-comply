import { definePropKeys } from '@no-comply/solid-primitives';

import type { ExposedDataProps } from './types';

export const EXPOSED_DATA_PROPS = definePropKeys<ExposedDataProps>()([
	'data-xp',
	'data-xp-id',
	'data-xp-parent',
]);
