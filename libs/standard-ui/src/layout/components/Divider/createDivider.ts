import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createDividerMixin } from '../../mixins';

import { $DIVIDER } from './constants';
import type { DividerAPI, DividerProps } from './types';

export const createDivider = (props: DividerProps): DividerAPI => {
	const [locals, expose, compose] = createExposable($DIVIDER, props);

	const { $root: $dividerMixinRoot } = compose(createDividerMixin(locals));

	const $root = {
		'data-component': 'divider' as const,
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($dividerMixinRoot, $root),
	});
};
