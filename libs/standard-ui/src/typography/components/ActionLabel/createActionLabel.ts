import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createActionLabelMixin } from '../../mixins';

import { $ACTION_LABEL } from './constants';
import type { ActionLabelAPI, ActionLabelProps } from './types';

const defaultProps: PickRequired<ActionLabelProps, 'tag'> = {
	tag: 'span',
};

export const createActionLabel = (props: ActionLabelProps): ActionLabelAPI => {
	const [locals, expose, compose] = createExposable($ACTION_LABEL, props);

	const { $root: $actionlabelMixinRoot } = compose(createActionLabelMixin(locals));

	const component = () => locals.tag ?? defaultProps.tag;

	const $root = computedProps({
		component,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($actionlabelMixinRoot, $root),
	});
};
