import type { ClassList } from '@no-comply/solid-primitives';

export type TypographyMixinProps = {
	nowrap?: boolean;
};

export type TypographyMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
