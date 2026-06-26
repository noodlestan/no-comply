import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './ToggleActionMixin.module.scss';
import { $TOGGLE_ACTION_MIXIN } from './constants';
import type { ToggleActionMixinAPI, ToggleActionMixinProps } from './types';

/**
 * Applies styles for all actions, handling the `variant` and `intent` props, and composing {@link @no-comply/solid-composables/action/mixin/ToggleActionMixin} and {@link @no-comply/standard-ui/action/focus/FocusRingMixin}.
 */
export const createToggleActionMixin = (props: ToggleActionMixinProps): ToggleActionMixinAPI => {
	const [locals, expose] = createExposable($TOGGLE_ACTION_MIXIN, props);

	const classList = createClassList(styles, () => ({
		ToggleAction: true,
		'is-active': Boolean(locals.value),
	}));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
};
