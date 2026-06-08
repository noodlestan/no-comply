import type { ClassList } from '@no-comply/solid-primitives';

import type { AlignedToFirstLineMixinProps } from '../AlignedToFirstLine';

export type TextMixinProps = AlignedToFirstLineMixinProps & {
	nowrap?: boolean;
};

export type TextMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
