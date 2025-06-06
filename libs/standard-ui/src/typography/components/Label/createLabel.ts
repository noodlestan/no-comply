import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createLabelMixin } from '../../mixins';

import { $LABEL } from './constants';
import type { LabelAPI, LabelProps } from './types';

const defaultProps: PickRequired<LabelProps, 'tag'> = {
	tag: 'label',
};

export const createLabel = (props: LabelProps): LabelAPI => {
	const [locals, expose, compose] = createExposable($LABEL, props);

	const { $root: $labelMixinRoot } = compose(createLabelMixin(locals));

	const component = () => locals.tag ?? defaultProps.tag;
	const $root = computedProps({
		component,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($labelMixinRoot, $root),
	});
};
