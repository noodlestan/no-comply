import type { ActionLabelTagName } from '@no-comply/solid-accessibility';

import type { ActionLabelMixinAPI, ActionLabelMixinProps } from '../../mixins';

export type ActionLabelProps = ActionLabelMixinProps & {
	tag?: ActionLabelTagName;
};

export type ActionLabelAPI = {
	$root: ActionLabelMixinAPI['$root'] & {
		component: ActionLabelTagName;
	};
};
