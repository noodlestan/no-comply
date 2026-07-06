import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './VisuallyHiddenMixin.module.scss';
import { $VISUALLY_HIDDEN_MIXIN } from './constants';
import type { VisuallyHiddenMixinAPI } from './types';

/**
 * Ads CSS to the root element to position it absolutely off-screen and clip it to zero size.
 */
export const createVisuallyHiddenMixin = (): VisuallyHiddenMixinAPI => {
	const [, expose] = createExposable($VISUALLY_HIDDEN_MIXIN);

	const classList = staticClassList(styles, 'VisuallyHidden');

	const $root = {
		classList,
	};

	return exposeAPI(expose, '$root', {
		$root,
	});
};
