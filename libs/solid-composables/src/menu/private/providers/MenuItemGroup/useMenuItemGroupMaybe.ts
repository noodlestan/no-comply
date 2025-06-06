import { useContext } from 'solid-js';

import type { MenuItemGroupContext } from '../../contexts';

import { MenuItemGroupContextCTX } from './MenuItemGroupContextCTX';

export const useMenuItemGroupMaybe = (): MenuItemGroupContext | undefined => {
	const [context] = useContext(MenuItemGroupContextCTX) || [];
	return context;
};
