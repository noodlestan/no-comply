import type { ActionMixinAPI, FocusableMixinAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { SizedActionMixinAPI, ToggleActionMixinAPI } from '../../../action';
import type { ContentSize } from '../../../size';

export type SegmentedButtonItemMixinProps = {
	active: boolean;
	size?: ContentSize;
};

export type SegmentedButtonItemMixinAPI = {
	$root: FocusableMixinAPI['$root'] & {
		classList: ClassList;
	};
	$label: ActionMixinAPI['$root'] &
		SizedActionMixinAPI['$root'] &
		ToggleActionMixinAPI['$root'] & {
			classList: ClassList;
		};
	size: Accessor<ContentSize>;
};
