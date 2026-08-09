import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './IconMixin.module.scss';
import { $ICON_MIXIN } from './constants';
import type { IconMixinAPI } from './types';

export const createIconMixin = (): IconMixinAPI => {
	const [, expose] = createExposable($ICON_MIXIN);

	const $root = {
		classList: staticClassList(styles, 'Icon'),
	};

	return exposeAPI(expose, '$root', {
		$root,
	});
};
