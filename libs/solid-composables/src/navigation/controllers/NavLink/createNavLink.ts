import { createExposable, exposeAPI, useNavigation } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';

import { $NAV_LINK } from './constants';
import type { NavLinkAPI, NavLinkProps } from './types';

const defaultProps: Required<Pick<NavLinkProps, 'mode'>> = {
    mode: 'page',
};

export const createNavLink = (props: NavLinkProps): NavLinkAPI => {
    const [locals, expose] = createExposable($NAV_LINK, props);

    const { isCurrent } = useNavigation();

    const isCurrentNav = () =>
        locals.current !== undefined ? locals.current : isCurrent(locals.href, locals.exact);

    const mode = () => {
        const m = locals.mode ?? defaultProps.mode;
        return m === 'section' ? true : m;
    };

    const $root = computedProps({
        'data-nav-link-current': () => (isCurrentNav() ? '' : undefined),
        'aria-current': () => (isCurrentNav() ? mode() : undefined),
    });

    return exposeAPI(expose, '$root', {
        $root,
    });
};
