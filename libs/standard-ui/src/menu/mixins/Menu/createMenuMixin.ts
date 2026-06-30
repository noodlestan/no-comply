import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createFocusRingMixin } from '../../../focus';

import styles from './MenuMixin.module.scss';
import { $MENU_MIXIN } from './constants';
import type { MenuMixinAPI } from './types';

export const createMenuMixin = (): MenuMixinAPI => {
	const [, expose, compose] = createExposable($MENU_MIXIN);

	const { $root: $focusRing } = compose(createFocusRingMixin({ compact: true }));

	const classList = staticClassList(styles, 'Menu');

	const $root = {
		classList,
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($root, $focusRing),
	});
};
