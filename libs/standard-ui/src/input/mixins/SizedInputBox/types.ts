import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../size';

export type SizedInputBoxMixinProps = {
	size?: ContentSize;
};

export type SizedInputBoxMixinAPI = {
	$root: {
		classList: ClassList;
	};
	size: Accessor<ContentSize>;
};
