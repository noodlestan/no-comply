import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createActionLabelMixin } from '../../../typography';
import { createActionMixin } from '../Action';
import { createSizedActionMixin } from '../SizedAction';

import { $BUTTON_MIXIN } from './constants';
import type { ButtonMixinAPI, ButtonMixinProps } from './types';

/**
 * Applies button styles by composing {@link ActionMixin} and {@link SizedActionMixin} and {@link ActionLabelMixin}.
 *
 * Exposes a `size()` method that provides access to the actual value when prop was undefined and default value was applied.
 */
export const createButtonMixin = (props: ButtonMixinProps): ButtonMixinAPI => {
	const [locals, expose, compose] = createExposable($BUTTON_MIXIN, props);

	const { $root: $actionMixinRoot } = compose(createActionMixin(locals));
	const { $root: $sizedActionMixinRoot, size } = compose(createSizedActionMixin(locals));

	const actionLabelStaticProps = { nowrap: true };
	const actionLabelProps = computedProps(actionLabelStaticProps, {
		variant: size,
	});
	const { $root: $actionLabelMixinRoot } = compose(createActionLabelMixin(actionLabelProps));

	return exposeAPI(expose, '$root', {
		$root: combineProps($actionMixinRoot, $sizedActionMixinRoot, $actionLabelMixinRoot),
		size,
	});
};
