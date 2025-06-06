import type {
	TextMixinAPI as HeadlessTextMixinAPI,
	TextMixinProps as HeadlessTextMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { DisplayLevel, DisplayVariant } from '../../types';

export type DisplayMixinProps = HeadlessTextMixinProps & {
	level?: DisplayLevel;
	variant?: DisplayVariant;
};

export type DisplayMixinAPI = {
	$root: HeadlessTextMixinAPI['$root'] & {
		classList: ClassList;
	};
	level: Accessor<DisplayLevel>;
};
