import { useContext } from 'solid-js';

import type { MenuContext } from '../../contexts';

import { MenuContextCTX } from './MenuContextCTX';

export const useMenu = (): MenuContext => {
	const [context] = useContext(MenuContextCTX) || [];
	if (!context) {
		throw new Error('useMenu() must be wrapped in <MenuContextProvider/>');
	}

	return context;
};
