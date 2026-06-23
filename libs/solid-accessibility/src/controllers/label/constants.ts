import { definePropKeys } from '@no-comply/solid-primitives';

import type { AriaLabelledProps } from './types';

export const ARIA_LABELLED_PROPS = definePropKeys<AriaLabelledProps>()([
	'label',
	'labelled',
	'aria-labelledby',
	'description',
	'described',
	'aria-describedby',
]);
