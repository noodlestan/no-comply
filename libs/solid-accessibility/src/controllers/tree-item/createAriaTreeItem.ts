import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaTreeItemAPI, AriaTreeItemProps } from './types';

export const createAriaTreeItem = (props: AriaTreeItemProps): AriaTreeItemAPI => {
	const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'treeitem');

	const $root = computedProps({
		'aria-expanded': () => props.expanded,
		'aria-selected': () => props.selected,
		'aria-level': () => props.level,
		'aria-setsize': () => props.setSize,
		'aria-posinset': () => props.posInSet,
	});

	return {
		$root: combineProps($regionRoot, $root),
		$label,
		$description,
	};
};
