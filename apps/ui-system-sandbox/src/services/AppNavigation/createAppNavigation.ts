import { useNavigate } from '@solidjs/router';

import { ROUTES } from '../../app';

import { AppNavigationAPI } from './types';

export const createAppNavigation = (): AppNavigationAPI => {
    const navigate = useNavigate();

    const home = () => {
        const route = ROUTES.home();
        navigate(route);
    };

    const api: AppNavigationAPI = {
        home,
    };
    return api;
};
