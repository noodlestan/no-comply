import { createSignal } from 'solid-js';

import type { MenuItemAPI } from '../../../types';
import { useMenuItemGroupMaybe } from '../../providers';

import type { MenuItemGroupContextOptions, MenuItemGroupContextValue } from './types';

export const createMenuItemGroupContext = (
	options: MenuItemGroupContextOptions,
): MenuItemGroupContextValue => {
	const maybeGroup = useMenuItemGroupMaybe();
	if (maybeGroup) {
		throw new Error(
			'createMenuItemGroupContext() must not be wrapped in <MenuItemGroupContextProvider/>',
		);
	}

	const [items, setItems] = createSignal<MenuItemAPI[]>([]);

	const addItem = (item: MenuItemAPI) => {
		setItems(items => [...items, item]);
	};

	const removeItem = (item: MenuItemAPI) => {
		setItems(items => items.filter(i => i === item));
	};

	const hasIcons = () => options.hasIcons ?? Boolean(items().find(item => item.hasIcon()));
	const hasSubMenus = () => options.hasSubMenus ?? Boolean(items().find(item => item.isSubMenu()));

	const context = {
		type: 'menu-item-group' as const,
		addItem,
		removeItem,
		hasIcons,
		hasSubMenus,
	};

	return [context];
};
