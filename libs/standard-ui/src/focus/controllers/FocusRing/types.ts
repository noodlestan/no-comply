import {
	type FocusRingAPI as HeadlessFocusRingAPI,
	type FocusRingProps as HeadlessFocusRingProps,
} from '@no-comply/solid-composables';

import type { FocusRingMixinAPI, FocusRingMixinProps } from '../../mixins';

export type FocusRingProps = HeadlessFocusRingProps & FocusRingMixinProps;

export type FocusRingAPI = Omit<HeadlessFocusRingAPI, '$root'> & {
	$root: HeadlessFocusRingAPI['$root'] & FocusRingMixinAPI['$root'];
};
