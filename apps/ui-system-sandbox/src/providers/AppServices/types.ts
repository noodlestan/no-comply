import type { Accessor } from 'solid-js';

import type { AppNavigationAPI } from '../../services';

export type AppServicesAPI = {
    navigation: AppNavigationAPI;
    ready: Accessor<boolean>;
    // errors: Accessor<ServiceError[]>;
};
