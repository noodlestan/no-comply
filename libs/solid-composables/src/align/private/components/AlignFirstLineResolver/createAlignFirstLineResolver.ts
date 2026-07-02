import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createAlignFirstLineMixin } from '../../mixins';

import { $ALIGN_FIRST_LINE_RESOLVER } from './constants';
import type { AlignFirstLineResolverAPI, AlignFirstLineResolverProps } from './types';

const defaultProps: PickRequired<AlignFirstLineResolverProps, 'tag'> = {
	tag: 'div',
};

export const createAlignFirstLineResolver = (
	props: AlignFirstLineResolverProps,
): AlignFirstLineResolverAPI => {
	const [locals, expose, compose] = createExposable($ALIGN_FIRST_LINE_RESOLVER, props);

	const component = () => locals.tag ?? defaultProps.tag;

	const { $root: $alignFirstLineRoot } = compose(createAlignFirstLineMixin());

	const $root = computedProps({
		component,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($alignFirstLineRoot, $root),
	});
};
