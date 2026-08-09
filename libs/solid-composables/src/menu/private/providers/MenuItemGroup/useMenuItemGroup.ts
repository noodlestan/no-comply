import { useContext } from 'solid-js';

import type { MenuItemGroupContext } from '../../contexts';

import { MenuItemGroupContextCTX } from './MenuItemGroupContextCTX';

export const useMenuItemGroup = (): MenuItemGroupContext => {
	const [context] = useContext(MenuItemGroupContextCTX) || [];
	if (!context) {
		throw new Error('useMenuItemGroup() must be wrapped in <MenuItemGroupContextProvider/>');
	}

	return context;
};
