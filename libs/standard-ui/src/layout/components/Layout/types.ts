import type { LayoutRoleName, LayoutTagName } from '@no-comply/solid-accessibility';

import { type LayoutMixinAPI, type LayoutMixinProps } from '../../mixins';

export type LayoutProps = LayoutMixinProps & {
	tag?: LayoutTagName;
	role?: LayoutRoleName;
};

export type LayoutAPI = {
	$root: LayoutMixinAPI['$root'] & {
		component: LayoutTagName;
		role: LayoutRoleName | undefined;
	};
};
