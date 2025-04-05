export type NavigationServiceOptions = {
    current: () => string;
};
export type NavigationServiceAPI = {
    isCurrent: (href: string, exact?: boolean) => boolean;
};
