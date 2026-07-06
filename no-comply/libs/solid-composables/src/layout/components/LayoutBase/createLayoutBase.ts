import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createLayoutMixin } from '../../mixins';

import { $LAYOUT_BASE } from './constants';
import { type LayoutBaseAPI, type LayoutBaseProps } from './types';

const defaultProps: PickRequired<LayoutBaseProps, 'tag'> = {
	tag: 'div',
};

export const createLayoutBase = (props: LayoutBaseProps): LayoutBaseAPI => {
	const [locals, expose, compose] = createExposable($LAYOUT_BASE, props);

	const { $root: $layoutMixinRoot } = compose(createLayoutMixin(locals));

	const component = () => locals.tag ?? defaultProps.tag;

	const $root = computedProps({
		component,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($layoutMixinRoot, $root),
	});
};
