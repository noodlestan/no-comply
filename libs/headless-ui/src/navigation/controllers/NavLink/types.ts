export type NavLinkProps = {
    href: string;
    exact?: boolean;
    current?: boolean;
};

export type NavLinkAPI = {
    $root: {
        'data-nav-link-current': '' | undefined;
    };
};
