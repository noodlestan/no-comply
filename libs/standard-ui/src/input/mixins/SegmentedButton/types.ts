import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { SizedActionMixinProps } from '../../../action';
import type { ContentSize } from '../../../size';

export type SegmentedButtonMixinProps = {
	size?: SizedActionMixinProps['size'];
};

export type SegmentedButtonMixinAPI = {
	$root: {
		classList: ClassList;
	};
	size: Accessor<ContentSize>;
};
