import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './MenuItemGroupMixin.module.scss';
import { $MENU_ITEM_GROUP_MIXIN } from './constants';
import type { MenuItemGroupMixinAPI } from './types';

export const createMenuItemGroupMixin = (): MenuItemGroupMixinAPI => {
	const [, expose] = createExposable($MENU_ITEM_GROUP_MIXIN);

	const $root = {
		classList: staticClassList(styles, 'MenuItemGroup'),
	};

	const $label = {
		classList: staticClassList(styles, '-Label'),
	};

	const $description = {
		classList: staticClassList(styles, '-Description'),
	};

	return exposeAPI(expose, '$root', {
		$root,
		$label,
		$description,
	});
};
