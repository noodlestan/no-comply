import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './PopoverMixin.module.scss';
import { $POPOVER_MIXIN } from './constants';
import type { PopoverMixinAPI } from './types';

export const createPopoverMixin = (): PopoverMixinAPI => {
	const [, expose] = createExposable($POPOVER_MIXIN);

	const $root = {
		classList: staticClassList(styles, 'Popover'),
	};

	return exposeAPI(expose, '$root', {
		$root,
	});
};
