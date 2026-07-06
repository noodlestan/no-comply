import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaDialogAPI, AriaDialogProps } from './types';

export const createAriaDialog = (props: AriaDialogProps = {}): AriaDialogAPI => {
	const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'dialog');

	const $root = computedProps({});

	return {
		$root: combineProps($regionRoot, $root),
		$label,
		$description,
	};
};
