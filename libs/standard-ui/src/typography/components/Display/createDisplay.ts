import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createDisplayMixin } from '../../mixins';

import { $DISPLAY } from './constants';
import { MAP_LEVEL_TO_COMPONENT } from './private';
import type { DisplayAPI, DisplayProps } from './types';

export const createDisplay = (props: DisplayProps): DisplayAPI => {
	const [locals, expose, compose] = createExposable($DISPLAY, props);

	const { $root: $textMixinRoot, level } = compose(createDisplayMixin(locals));

	const component = () => locals.tag ?? MAP_LEVEL_TO_COMPONENT[level()];

	const $root = computedProps({
		component,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($textMixinRoot, $root),
	});
};
