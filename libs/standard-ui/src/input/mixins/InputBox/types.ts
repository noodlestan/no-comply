import type { ClassList } from '@no-comply/solid-primitives';

import type { FocusRingMixinAPI } from '../../../focus';

export type InputBoxMixinProps = {
	disabled?: boolean;
};

export type InputBoxMixinAPI = {
	$root: FocusRingMixinAPI['$root'] & {
		classList: ClassList;
	};
};
