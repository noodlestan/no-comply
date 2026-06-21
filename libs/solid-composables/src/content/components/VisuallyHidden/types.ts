import type { VisuallyHiddenTagName } from '@no-comply/solid-accessibility';

import type { VisuallyHiddenMixinAPI } from '../../mixins';

export type VisuallyHiddenProps = {
	tag?: VisuallyHiddenTagName;
};

export type VisuallyHiddenAPI = Omit<VisuallyHiddenMixinAPI, '$root'> & {
	$root: VisuallyHiddenMixinAPI['$root'] & {
		component: VisuallyHiddenTagName;
	};
};
