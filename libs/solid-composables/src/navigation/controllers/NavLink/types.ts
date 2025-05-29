import type { AriaAttributes } from '@no-comply/solid-accessibility';

export type NavLinkProps = {
    href: string;
    exact?: boolean;
    current?: boolean;
    mode?: NavLinkMode;
};

export type NavLinkMode = 'page' | 'section';

export type NavLinkAPI = {
    $root: {
        'data-nav-link-current': '' | undefined;
        'aria-current': AriaAttributes['aria-current'];
    };
};
