import type { ClassList } from '@no-comply/solid-primitives';

export type ToggleActionMixinProps = {
	value: boolean | undefined;
};

export type ToggleActionMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
