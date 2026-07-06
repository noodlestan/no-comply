import type { FocusRingMixinAPI as HeadlessFocusRingMixinAPI } from '@no-comply/solid-composables';

import type { FocusRingOffsetMixinAPI, FocusRingOffsetMixinProps } from '../FocusRingOffset';

export type FocusRingMixinProps = FocusRingOffsetMixinProps;

export type FocusRingMixinAPI = {
	$root: HeadlessFocusRingMixinAPI['$root'] & FocusRingOffsetMixinAPI['$root'];
};
