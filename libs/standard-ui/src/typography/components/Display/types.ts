import type { TextTagName } from '@no-comply/solid-accessibility';

import type { DisplayMixinAPI, DisplayMixinProps } from '../../mixins';

export type DisplayProps = DisplayMixinProps & {
	tag?: TextTagName;
};

export type DisplayAPI = {
	$root: DisplayMixinAPI['$root'] & {
		component: TextTagName;
	};
};
