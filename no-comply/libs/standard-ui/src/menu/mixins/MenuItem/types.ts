import type { ClassList } from '@no-comply/solid-primitives';

import type { ActionMixinAPI, ActionMixinProps } from '../../../action';

export type MenuItemMixinProps = Omit<ActionMixinProps, 'size'>;

export type MenuItemMixinAPI = {
	$root: ActionMixinAPI['$root'] & {
		classList: ClassList;
	};
	$iconSlot: {
		classList: ClassList;
	};
	$labelSlot: {
		classList: ClassList;
	};
	$subLabelSlot: {
		classList: ClassList;
	};
	$descriptionSlot: {
		classList: ClassList;
	};
	$expandSlot: {
		classList: ClassList;
	};
};
