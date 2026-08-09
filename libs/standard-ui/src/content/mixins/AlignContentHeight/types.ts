import type { ClassList } from '@no-comply/solid-primitives';

import type { SizeScale } from '../../../size';

export type AlignContentHeightMixinProps = {
	height: SizeScale;
};

export type AlignContentHeightMixinAPI = {
	$root: {
		classList: ClassList;
	};
};
