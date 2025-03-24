import { createAppNavigation } from '../../services';

import type { AppServicesAPI } from './types';

export const createAppServices = (): AppServicesAPI => {
    const navigation = createAppNavigation();

    // createEffect(() => {
    //     const err = services.errors();
    //     if (err.length) {
    //         console.error(err[err.length - 1]);
    //     }
    // });

    const api: AppServicesAPI = {
        navigation,
        ready: () => true,
        // errors: services.errors,
    };

    return api;
};
