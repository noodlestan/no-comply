import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaTreeProps } from './types';

export const ARIA_TREE_PROPS = definePropKeys<AriaTreeProps>()([
	...ARIA_LABELLED_PROPS,
	'multiselectable',
	'orientation',
]);
