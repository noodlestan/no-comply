import { combineProps, computedProps } from '@no-comply/solid-primitives';

import type { FeedbackRoleName } from '../../role';
import { createAriaLive } from '../live';
import { type AriaRegionAPI, createAriaRegion } from '../region';

import type { AriaFeedbackAPI, AriaFeedbackProps } from './types';

export const createAriaFeedback = (props: AriaFeedbackProps): AriaFeedbackAPI => {
	const {
		$root: $regionRoot,
		$label,
		$description,
	} = createAriaRegion(props) as AriaRegionAPI<FeedbackRoleName>;

	const liveProps = computedProps({
		live: () => props.live ?? (props.state === 'alert' ? 'assertive' : 'polite'),
		relevant: () => 'text' as const,
	});
	const { $root: $liveRoot } = createAriaLive(liveProps);

	const $root = computedProps({
		'aria-busy': () => Boolean(props.state),
	});

	return {
		$root: combineProps($regionRoot, $liveRoot, $root),
		$label,
		$description,
	};
};
