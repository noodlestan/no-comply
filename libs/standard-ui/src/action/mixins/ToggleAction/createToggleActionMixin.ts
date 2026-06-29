import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './ToggleActionMixin.module.scss';
import { $TOGGLE_ACTION_MIXIN } from './constants';
import type { ToggleActionMixinAPI, ToggleActionMixinProps } from './types';
const defaultProps: PickRequired<ToggleActionMixinProps, 'variant'> = {
	variant: 'secondary',
};

export const createToggleActionMixin = (props: ToggleActionMixinProps): ToggleActionMixinAPI => {
	const [locals, expose] = createExposable($TOGGLE_ACTION_MIXIN, props);

	const variant = () => locals.variant ?? defaultProps.variant;
	const classList = createClassList(styles, () => ({
		ToggleAction: true,
		[`variant-${variant()}`]: true,
		'is-active': Boolean(locals.value),
	}));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
		variant,
	});
};
