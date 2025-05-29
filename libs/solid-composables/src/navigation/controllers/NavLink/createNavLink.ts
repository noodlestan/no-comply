import { useNavigation } from '@no-comply/solid-contexts';
import { createComputedProps } from '@no-comply/solid-primitives';

import type { NavLinkAPI, NavLinkProps } from './types';

const defaultProps: Required<Pick<NavLinkProps, 'mode'>> = {
    mode: 'page',
};

export const createNavLink = (props: NavLinkProps): NavLinkAPI => {
    const { isCurrent } = useNavigation();

    const isCurrentNav = () =>
        props.current !== undefined ? props.current : isCurrent(props.href, props.exact);

    const mode = () => {
        const m = props.mode ?? defaultProps.mode;
        return m === 'section' ? true : m;
    };

    const $localRoot = createComputedProps({
        'data-nav-link-current': () => (isCurrentNav() ? '' : undefined),
        'aria-current': () => (isCurrentNav() ? mode() : undefined),
    });

    return {
        $root: $localRoot,
    };
};
