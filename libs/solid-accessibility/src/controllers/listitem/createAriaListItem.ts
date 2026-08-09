import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createAriaLabelled } from '../label';

import type { AriaListItemAPI, AriaListItemProps } from './types';

export const createAriaListItem = (props: AriaListItemProps): AriaListItemAPI => {
	const { $root: $labelledRoot, $label, $description } = createAriaLabelled(props);

	const component = () => props.tag || 'li';
	const role = () => (component() !== 'li' ? 'listitem' : undefined);
	const $root = computedProps({
		component,
		role,
		'aria-selected': () => props.selected,
		'aria-setsize': () => props.setSize,
		'aria-posinset': () => props.posInSet,
	});

	return {
		$root: combineProps($labelledRoot, $root),
		$label,
		$description,
	};
};
