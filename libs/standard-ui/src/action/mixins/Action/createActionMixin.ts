import { createActionMixin as createHeadlessActionMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import { createFocusRingMixin } from '../../../focus';

import styles from './ActionMixin.module.scss';
import { $ACTION_MIXIN } from './constants';
import type { ActionMixinAPI, ActionMixinProps } from './types';

const defaultProps: PickRequired<ActionMixinProps, 'variant' | 'intent'> = {
	variant: 'secondary',
	intent: 'neutral',
};

/**
 * Applies styles for all actions, handling the `variant` and `intent` props, and composing {@link @no-comply/solid-composables/action/mixin/ActionMixin} and {@link @no-comply/standard-ui/action/focus/FocusRingMixin}.
 */
export const createActionMixin = (props: ActionMixinProps): ActionMixinAPI => {
	const [locals, expose, compose] = createExposable($ACTION_MIXIN, props);

	const { $root: $buttonMixinRoot } = compose(createHeadlessActionMixin());
	const { $root: focusRingRoot } = compose(createFocusRingMixin(locals));

	const variant = () => locals.variant ?? defaultProps.variant;
	const intent = () => locals.intent ?? defaultProps.intent;
	const classList = createClassList(styles, () => [
		`Action`,
		`variant-${variant()}`,
		`intent-${intent()}`,
	]);

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($buttonMixinRoot, focusRingRoot, $root),
	});
};
