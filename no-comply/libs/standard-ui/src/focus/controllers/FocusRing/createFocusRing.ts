import { createFocusRing as createHeadlessFocusRing } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createFocusRingMixin } from '../../mixins';

import { $FOCUS_RING } from './constants';
import { type FocusRingAPI, type FocusRingProps } from './types';

export const createFocusRing = (props: FocusRingProps = {}): FocusRingAPI => {
	const [locals, expose, compose] = createExposable($FOCUS_RING, props);

	const { $root: $headlessFocusRingRoot, $focusTarget } = compose(createHeadlessFocusRing());
	const { $root: $ringOffsetMixin } = compose(createFocusRingMixin(locals));

	return exposeAPI(expose, '$root', {
		$root: combineProps($headlessFocusRingRoot, $ringOffsetMixin),
		$focusTarget,
	});
};
