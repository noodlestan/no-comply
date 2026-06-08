import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createGridMixin } from '../../mixins';
import { createLayout } from '../Layout';

import { $GRID } from './constants';
import { type GridAPI, type GridProps } from './types';

export const createGrid = (props: GridProps): GridAPI => {
	const [locals, expose, compose] = createExposable($GRID, props);

	const { $root: $layoutRoot } = compose(createLayout(locals));
	const { $root: $gridMixinRoot } = compose(createGridMixin(locals));

	return exposeAPI(expose, '$root', {
		$root: combineProps($layoutRoot, $gridMixinRoot),
	});
};
