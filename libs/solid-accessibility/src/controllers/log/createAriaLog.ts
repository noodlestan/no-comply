import { combineProps } from '@no-comply/solid-primitives';

import { createAriaLive } from '../live';
import { createAriaRegion } from '../region';

import type { AriaLogAPI, AriaLogProps } from './types';

export const createAriaLog = (props: AriaLogProps = {}): AriaLogAPI => {
	const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'log');

	const { $root: $liveRoot } = createAriaLive({
		live: 'polite',
		relevant: 'additions',
	});

	const $root = $liveRoot as {
		'aria-live': 'polite';
		'aria-relevant': 'additions';
	};

	return {
		$root: combineProps($regionRoot, $root),
		$label,
		$description,
	};
};
