import type { ClassList } from '@no-comply/solid-primitives';

import type { AlignedToFirstLineMixinAPI, AlignedToFirstLineTargetProps } from '../../../align';

export type SizedTypographyMixinProps = AlignedToFirstLineTargetProps;

export type SizedTypographyMixinAPI = AlignedToFirstLineMixinAPI & {
	$root: {
		classList: ClassList;
	};
};
