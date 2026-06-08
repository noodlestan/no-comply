import { createFocusRing, createPressable } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createButtonMixin } from '../../mixins';

import { $BUTTON } from './constants';
import type { ButtonAPI, ButtonProps } from './types';

export const createButton = (props: ButtonProps): ButtonAPI => {
	const [locals, expose, compose] = createExposable($BUTTON, props);

	const { $root: $pressableRoot } = compose(createPressable(locals));
	const { $root: $focusRingRoot } = compose(createFocusRing());
	const { $root: $buttonMixinRoot, ...rest } = compose(createButtonMixin(locals));

	return exposeAPI(expose, '$root', {
		...rest,
		$root: combineProps($pressableRoot, $focusRingRoot, $buttonMixinRoot),
	});
};
