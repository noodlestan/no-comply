import type { HeadingTagName } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createDisplayMixin } from '../../mixins';
import type { DisplayLevel } from '../../types';

import { $DISPLAY } from './constants';
import type { DisplayAPI, DisplayProps } from './types';

const MAP_LEVEL_TO_COMPONENT: Record<DisplayLevel, HeadingTagName> = {
	1: 'h1',
	2: 'h2',
	3: 'h3',
	4: 'h4',
	5: 'h5',
};

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
