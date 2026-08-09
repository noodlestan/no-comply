import { onCleanup } from 'solid-js';

import { type MenuItemGroupContext, useMenuItemGroupMaybe } from '../../private';
import type { MenuItemAPI } from '../../types';

export const useMenuItemGroupChild = (menuItem: MenuItemAPI): MenuItemGroupContext | undefined => {
	const context = useMenuItemGroupMaybe();

	if (context) {
		context.addItem(menuItem);
	}

	onCleanup(() => {
		if (context) {
			context.removeItem(menuItem);
		}
	});

	return context;
};
