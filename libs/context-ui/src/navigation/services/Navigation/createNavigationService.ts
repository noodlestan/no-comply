import type { NavigationServiceAPI, NavigationServiceOptions } from './types';

export const createNavigationService = (
    options: NavigationServiceOptions,
): NavigationServiceAPI => {
    const isCurrent = (href: string, exact?: boolean) => {
        const path = href.split('#')[0];
        const current = options.current();
        return exact ? current === href : current === path || current.startsWith(path + '/');
    };
    const api: NavigationServiceAPI = {
        current: () => options.current(),
        isCurrent,
    };

    return api;
};
