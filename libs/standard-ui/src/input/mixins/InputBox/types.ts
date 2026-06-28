import type { ClassList } from '@no-comply/solid-primitives';

export type InputBoxMixinProps = {
	disabled: boolean;
	invalid: boolean;
	modified: boolean;
	touched: boolean;
};

export type InputBoxMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
