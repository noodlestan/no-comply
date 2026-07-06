import { combineProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaStatusAPI, AriaStatusProps } from './types';

export const createAriaStatus = (props: AriaStatusProps = {}): AriaStatusAPI => {
	const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'status');

	const $root = {
		'aria-live': 'polite' as const,
		'aria-atomic': true as const,
	};

	return {
		$root: combineProps($regionRoot, $root),
		$label,
		$description,
	};
};
