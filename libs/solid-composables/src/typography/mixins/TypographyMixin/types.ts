import type { ClassList } from '@no-comply/solid-primitives';

import type { AlignedToFirstLineMixinProps } from '../AlignedToFirstLine';

export type TypographyMixinProps = AlignedToFirstLineMixinProps & {
	nowrap?: boolean;
};

export type TypographyMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
