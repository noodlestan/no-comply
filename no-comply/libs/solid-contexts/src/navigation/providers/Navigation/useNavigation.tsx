import { useContext } from 'solid-js';

import type { NavigationServiceAPI } from '../../services';

import { NavigationContext } from './private';

export const useNavigation = (): NavigationServiceAPI => {
	const context = useContext(NavigationContext);
	if (!context) {
		throw new Error('useNavigation() must be wrapped in <NavigationProvider/>');
	}

	return context;
};
