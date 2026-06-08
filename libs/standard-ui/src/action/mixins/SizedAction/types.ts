import type {
	AlignedToFirstLineMixinAPI,
	AlignedToFirstLineMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../size';

export type SizedActionMixinProps = AlignedToFirstLineMixinProps & {
	size?: ContentSize;
};

export type SizedActionMixinAPI = {
	$root: AlignedToFirstLineMixinAPI['$root'] & {
		classList: ClassList;
	};
	size: Accessor<ContentSize>;
};
