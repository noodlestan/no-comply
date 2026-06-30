import { createFocusRingMixin as createHeadlessFocusRingMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createFocusRingOffsetMixin } from '../FocusRingOffset';

import { $FOCUS_RING_MIXIN } from './constants';
import { type FocusRingMixinAPI, type FocusRingMixinProps } from './types';

export const createFocusRingMixin = (props: FocusRingMixinProps = {}): FocusRingMixinAPI => {
	const [locals, expose, compose] = createExposable($FOCUS_RING_MIXIN, props);

	const { $root: $headlessRingRoot } = compose(createHeadlessFocusRingMixin());
	const { $root: $ringOffsetMixin } = compose(createFocusRingOffsetMixin(locals));

	return exposeAPI(expose, '$root', {
		$root: combineProps($headlessRingRoot, $ringOffsetMixin),
	});
};
