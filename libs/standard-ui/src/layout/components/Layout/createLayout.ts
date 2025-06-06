import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createLayoutMixin } from '../../mixins';

import { $LAYOUT } from './constants';
import { type LayoutAPI, type LayoutProps } from './types';

const defaultProps: PickRequired<LayoutProps, 'tag'> = {
	tag: 'div',
};

export const createLayout = (props: LayoutProps): LayoutAPI => {
	const [locals, expose, compose] = createExposable($LAYOUT, props);

	const { $root: $layoutMixinRoot } = compose(createLayoutMixin(locals));

	const component = () => locals.tag ?? defaultProps.tag;

	const $root = computedProps({
		component,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($layoutMixinRoot, $root),
	});
};
