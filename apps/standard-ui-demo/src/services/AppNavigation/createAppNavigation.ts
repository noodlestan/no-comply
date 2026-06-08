import { useNavigate } from '@solidjs/router';

import { routeFor } from '../../app';

import type { AppNavigationAPI } from './types';

export const createAppNavigation = (): AppNavigationAPI => {
	const navigate = useNavigate();

	const home = () => {
		const route = routeFor.home();
		navigate(route);
	};

	const api: AppNavigationAPI = {
		home,
	};
	return api;
};
