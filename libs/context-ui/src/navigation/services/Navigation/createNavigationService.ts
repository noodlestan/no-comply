import type { NavigationServiceAPI, NavigationServiceOptions } from './types';

export const createNavigationService = (
    options: NavigationServiceOptions,
): NavigationServiceAPI => {
    const isCurrent = (href: string, exact?: boolean) => {
        const current = options.current();
        return exact ? current === href : current.startsWith(href);
    };

    const api: NavigationServiceAPI = {
        isCurrent,
    };

    return api;
};
