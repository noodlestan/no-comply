import { combineProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaAlertAPI, AriaAlertProps } from './types';

export const createAriaAlert = (props: AriaAlertProps = {}): AriaAlertAPI => {
	const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'alert');

	const $root = {
		'aria-live': 'assertive' as const,
		'aria-atomic': true as const,
	};

	return {
		$root: combineProps($regionRoot, $root),
		$label,
		$description,
	};
};
