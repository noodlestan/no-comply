import { createGridMixin as createHeadlessGridMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { GLOBAL_BP_NAMES } from '../../../theme';

import { $GRID_MIXIN } from './constants';
import { type GridMixinAPI, type GridMixinProps } from './types';

export const createGridMixin = (props: GridMixinProps): GridMixinAPI => {
	const [locals, expose, compose] = createExposable($GRID_MIXIN, props);

	const { $root } = compose(createHeadlessGridMixin(locals, GLOBAL_BP_NAMES));

	return exposeAPI(expose, '$root', {
		$root,
	});
};
