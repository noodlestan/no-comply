import {
	createFocusRing,
	createMenuItemAction as createHeadlessMenuItemAction,
} from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createMenuItemMixin } from '../../mixins';
import { createBaseMenuItem } from '../../private';

import { $MENU_ITEM_ACTION } from './constants';
import type { MenuItemActionAPI, MenuItemActionProps } from './types';

export const createMenuItemAction = (props: MenuItemActionProps): MenuItemActionAPI => {
	const [locals, expose, compose] = createExposable($MENU_ITEM_ACTION, props);

	const {
		$root: $menuItem,
		$label: $menuItemLabel,
		$description: $menuItemDescription,
		_icon: _menuItemIcon,
		...rest
	} = compose(createHeadlessMenuItemAction(locals));

	const { _label, _textDescription, _icon } = compose(createBaseMenuItem());
	const { $root: $focusRingRoot } = compose(createFocusRing());
	const { $root: $menuItemMixinRoot, ...mixinRest } = compose(createMenuItemMixin(locals));

	return exposeAPI(expose, '$root', {
		...rest,
		$root: combineProps($menuItem, $focusRingRoot, $menuItemMixinRoot),
		...mixinRest,
		_label: combineProps($menuItemLabel, _label),
		_textDescription: combineProps($menuItemDescription, _textDescription),
		_icon: combineProps(_menuItemIcon, _icon),
	});
};
