import { useNavigation } from '@noodlestan/context-ui';
import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { NavLinkAPI, NavLinkProps } from './types';

export const createNavLink = (props: NavLinkProps): NavLinkAPI => {
    const { isCurrent } = useNavigation();

    const isCurrentNav = () => props.current || isCurrent(props.href, props.exact);

    const $localRoot = createComputedProps({
        'data-nav-link-current': () => (isCurrentNav() ? '' : undefined),
    });

    return {
        $root: $localRoot,
    };
};
