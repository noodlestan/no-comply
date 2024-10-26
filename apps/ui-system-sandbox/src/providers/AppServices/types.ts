import { Accessor } from 'solid-js';

import { AppNavigationAPI } from '../../services';

export type AppServicesAPI = {
    navigation: AppNavigationAPI;
    ready: Accessor<boolean>;
    // errors: Accessor<ServiceError[]>;
};
