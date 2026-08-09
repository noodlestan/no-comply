import { createFlexMixin as createHeadlessFlexMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { GLOBAL_BP_NAMES } from '../../../theme';

import { $FLEX_MIXIN } from './constants';
import { type FlexMixinAPI, type FlexMixinProps } from './types';

export const createFlexMixin = (props: FlexMixinProps): FlexMixinAPI => {
	const [locals, expose, compose] = createExposable($FLEX_MIXIN, props);

	const { $root } = compose(createHeadlessFlexMixin(locals, GLOBAL_BP_NAMES));

	return exposeAPI(expose, '$root', {
		$root,
	});
};
