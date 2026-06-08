import type { BaseContext } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

import type { MenuItemAPI } from '../../../types';

export type MenuItemGroupContextOptions = {
	hasIcons?: boolean;
	hasSubMenus?: boolean;
};

export type MenuItemGroupContext = BaseContext & {
	type: 'menu-item-group';
	addItem: (item: MenuItemAPI) => void;
	removeItem: (item: MenuItemAPI) => void;
	hasIcons: Accessor<boolean>;
	hasSubMenus: Accessor<boolean>;
};

export type MenuItemGroupContextValue = [MenuItemGroupContext];
