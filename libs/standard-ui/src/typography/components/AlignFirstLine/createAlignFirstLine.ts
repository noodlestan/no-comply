import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	pickProps,
} from '@no-comply/solid-primitives';

import {
	COMPOSABLE_TYPE_MIXIN_PROPS,
	type ComposableTypeMixinProps,
	createAlignFirstLineMixin,
	createComposableTypeMixin,
} from '../../mixins';

import { $ALIGN_FIRST_LINE } from './constants';
import type { AlignFirstLineAPI, AlignFirstLineAllProps, AlignFirstLineProps } from './types';

const defaultProps: PickRequired<AlignFirstLineProps, 'tag'> = {
	tag: 'div',
};

export const createAlignFirstLine = (props: AlignFirstLineProps): AlignFirstLineAPI => {
	const [locals, expose, compose] = createExposable($ALIGN_FIRST_LINE, props);

	const { $root: $alignFirstLineRoot } = compose(createAlignFirstLineMixin(locals));
	const { $root: $composableTypeRoot } = compose(createComposableTypeMixin(locals));

	const component = () => locals.tag ?? defaultProps.tag;

	const $root = computedProps({
		component,
	});

	const _composableType = pickProps(
		locals as AlignFirstLineAllProps,
		COMPOSABLE_TYPE_MIXIN_PROPS,
	) as ComposableTypeMixinProps;

	return exposeAPI(expose, '$root', {
		$root: combineProps($alignFirstLineRoot, $composableTypeRoot, $root),
		_composableType,
	});
};
