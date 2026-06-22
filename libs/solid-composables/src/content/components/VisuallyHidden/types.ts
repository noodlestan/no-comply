import type { VisuallyHiddenRoleName, VisuallyHiddenTagName } from '@no-comply/solid-accessibility';

import type { VisuallyHiddenMixinAPI } from '../../mixins';

export type VisuallyHiddenProps = {
	tag?: VisuallyHiddenTagName;
	role?: VisuallyHiddenRoleName;
};

export type VisuallyHiddenAPI = Omit<VisuallyHiddenMixinAPI, '$root'> & {
	$root: VisuallyHiddenMixinAPI['$root'] & {
		component: VisuallyHiddenTagName;
		role: VisuallyHiddenRoleName | undefined;
	};
};
