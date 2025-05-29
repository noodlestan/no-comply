import type { AppNavigationAPI, AppStatusAPI } from '../../services';

export type AppServicesAPI = {
    navigation: AppNavigationAPI;
    status: AppStatusAPI;
    // errors: Accessor<ServiceError[]>;
};
