export type NavigationServiceOptions = {
    current: () => string;
};

export type NavigationServiceAPI = {
    current: () => string;
    isCurrent: (href: string, exact?: boolean) => boolean;
};
