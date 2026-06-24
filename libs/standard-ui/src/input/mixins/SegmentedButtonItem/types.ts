import type { ActionMixinAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { SizedActionMixinAPI } from '../../../action';
import type { ContentSize } from '../../../size';

export type SegmentedButtonItemMixinProps = {
	size: ContentSize;
};

export type SegmentedButtonItemMixinAPI = {
	$root: {
		classList: ClassList;
	};
	$label: ActionMixinAPI['$root'] &
		SizedActionMixinAPI['$root'] & {
			classList: ClassList;
		};
	$radio: {
		classList: ClassList;
	};
	size: Accessor<ContentSize>;
};
