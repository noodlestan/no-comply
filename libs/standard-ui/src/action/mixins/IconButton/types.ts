import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../size';

export type IconButtonMixinProps = {
	size: ContentSize;
	round?: boolean;
};

export type IconButtonMixinAPI = {
	$root: {
		classList: ClassList;
	};
	icon: {
		classList: ClassList;
		size: ContentSize;
	};
};
