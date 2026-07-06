import type { LabelTagName } from '@no-comply/solid-accessibility';

import type { LabelMixinAPI, LabelMixinProps } from '../../mixins';

export type LabelProps = LabelMixinProps & {
	tag?: LabelTagName;
	for?: string;
};

export type LabelAPI = {
	$root: LabelMixinAPI['$root'] & {
		component: LabelTagName;
		for: string | undefined;
	};
};
