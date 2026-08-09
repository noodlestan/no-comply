import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createFlexMixin } from '../../mixins';
import { createLayout } from '../Layout';

import { $FLEX } from './constants';
import { type FlexAPI, type FlexProps } from './types';

export const createFlex = (props: FlexProps): FlexAPI => {
	const [locals, expose, compose] = createExposable($FLEX, props);

	const { $root: $layoutRoot } = compose(createLayout(locals));
	const { $root: $flexMixinRoot } = compose(createFlexMixin(locals));

	return exposeAPI(expose, '$root', {
		$root: combineProps($layoutRoot, $flexMixinRoot),
	});
};
