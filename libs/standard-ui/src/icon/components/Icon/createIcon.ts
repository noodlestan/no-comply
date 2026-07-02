import { createIcon as createHeadlessIcon, createIconMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createSizedIconMixin } from '../../mixins';

import { $ICON } from './constants';
import type { IconAPI, IconProps } from './types';

export const createIcon = (props: IconProps): IconAPI => {
	const [locals, expose, compose] = createExposable($ICON, props);

	const { $root: $iconRoot } = compose(createHeadlessIcon(locals));
	const { $root: $iconMixinRoot } = compose(createIconMixin());
	const { $root: $sizedIconMixinRoot } = compose(createSizedIconMixin(locals));

	return exposeAPI(expose, '$root', {
		$root: combineProps($iconRoot, $iconMixinRoot, $sizedIconMixinRoot),
	});
};
