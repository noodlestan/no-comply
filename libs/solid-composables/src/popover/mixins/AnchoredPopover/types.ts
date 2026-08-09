import type { ClassList } from '@no-comply/solid-primitives';

import type { PopoverMixinAPI } from '../Popover';

export type AnchoredPopoverMixinAPI = {
	$root: PopoverMixinAPI['$root'] & {
		classList: ClassList;
	};
};
