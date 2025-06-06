import type { LabelTagName } from '@no-comply/solid-accessibility';

import type { LabelMixinAPI, LabelMixinProps } from '../../mixins';

export type LabelOwnProps = {
	tag?: LabelTagName;
};

export type LabelProps = LabelMixinProps & LabelOwnProps;

export type LabelAPI = {
	$root: LabelMixinAPI['$root'] & {
		component: LabelTagName;
	};
};
