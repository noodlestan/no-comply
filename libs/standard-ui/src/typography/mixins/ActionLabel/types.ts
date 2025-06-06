import type {
	TextMixinAPI as HeadlessTextMixinAPI,
	TextMixinProps as HeadlessTextMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ActionLabelVariant } from '../../types';

export type ActionLabelMixinProps = HeadlessTextMixinProps & {
	variant?: ActionLabelVariant;
};

export type ActionLabelMixinAPI = {
	$root: HeadlessTextMixinAPI['$root'] & {
		classList: ClassList;
	};
};
