import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './FocusableMixin.module.scss';
import { $FOCUSABLE_MIXIN } from './constants';
import type { FocusableMixinAPI } from './types';

export const createFocusableMixin = (): FocusableMixinAPI => {
	const [, expose] = createExposable($FOCUSABLE_MIXIN);

	const classList = staticClassList(styles, 'Focusable');

	const $root = {
		classList,
	};

	return exposeAPI(expose, '$root', {
		$root,
	});
};
