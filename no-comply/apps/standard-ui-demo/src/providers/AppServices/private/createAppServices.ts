import { createAppNavigation, createAppStatus } from '../../../services';
import type { AppServicesAPI } from '../types';

export const createAppServices = (): AppServicesAPI => {
	const navigation = createAppNavigation();
	const status = createAppStatus();
	// createEffect(() => {
	//     const err = services.errors();
	//     if (err.length) {
	//         console.error(err[err.length - 1]);
	//     }
	// });

	const api: AppServicesAPI = {
		navigation,
		status,
		// errors: services.errors,
	};

	return api;
};
