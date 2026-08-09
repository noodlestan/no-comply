import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaGroupAPI, AriaGroupProps } from './types';

export const createAriaGroup = (props: AriaGroupProps = {}): AriaGroupAPI => {
	const { $root: $regionRoot, $label, $description, hasLabel } = createAriaRegion(props, 'group');

	const $root = computedProps({
		role: () => (hasLabel() ? 'group' : undefined),
		'aria-expanded': () => Boolean(props.expanded),
		'aria-setsize': () => props.setSize,
	});

	return {
		$root: combineProps($regionRoot, $root),
		$label,
		$description,
		hasLabel,
	};
};
