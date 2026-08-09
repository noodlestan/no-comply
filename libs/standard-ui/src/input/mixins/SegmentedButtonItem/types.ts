import type { ActionMixinAPI, FocusableMixinAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { SizedActionMixinAPI, ToggleActionMixinAPI } from '../../../action';
import type { ContentSize } from '../../../size';
import type { ActionLabelMixinAPI } from '../../../typography';

export type SegmentedButtonItemMixinProps = {
	active: boolean;
	size?: ContentSize;
	disabled?: boolean;
};

export type SegmentedButtonItemMixinAPI = {
	$root: FocusableMixinAPI['$root'] & {
		classList: ClassList;
	};
	$label: ActionMixinAPI['$root'] &
		SizedActionMixinAPI['$root'] &
		ToggleActionMixinAPI['$root'] &
		ActionLabelMixinAPI['$root'] & {
			classList: ClassList;
		};
	size: Accessor<ContentSize>;
};
