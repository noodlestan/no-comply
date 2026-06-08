import { definePropKeys } from '@no-comply/solid-primitives';

import { ARIA_LABELLED_PROPS } from '../label';

import type { AriaTreeItemProps } from './types';

export const ARIA_TREE_ITEM_PROPS = definePropKeys<AriaTreeItemProps>()([
	...ARIA_LABELLED_PROPS,
	'selected',
	'expanded',
	'level',
	'setSize',
	'posInSet',
]);
