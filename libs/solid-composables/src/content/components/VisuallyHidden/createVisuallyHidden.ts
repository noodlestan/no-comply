import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createVisuallyHiddenMixin } from '../../mixins';

import { $VISUALLY_HIDDEN } from './constants';
import { type VisuallyHiddenAPI, type VisuallyHiddenProps } from './types';

const defaultProps: PickRequired<VisuallyHiddenProps, 'tag'> = {
	tag: 'div',
};

/**
 * Composes the CSS classes from {@link mixin:VisuallyHidden} on to a `$root` element with optional role and tag.
 */
export const createVisuallyHidden = (props: VisuallyHiddenProps): VisuallyHiddenAPI => {
	const [locals, expose, compose] = createExposable($VISUALLY_HIDDEN, props);

	const { $root: $layoutMixinRoot } = compose(createVisuallyHiddenMixin());

	const component = () => locals.tag ?? defaultProps.tag;

	const $root = computedProps({
		component,
		role: () => locals.role,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($layoutMixinRoot, $root),
	});
};
