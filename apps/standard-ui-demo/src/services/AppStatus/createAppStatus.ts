import type { AppStatusAPI } from './types';

export const createAppStatus = (): AppStatusAPI => {
	// createEffect(() => {
	//     const err = services.errors();
	//     if (err.length) {
	//         console.error(err[err.length - 1]);
	//     }
	// });

	const api: AppStatusAPI = {
		isReady: () => true,
		// errors: services.errors,
	};

	return api;
};
