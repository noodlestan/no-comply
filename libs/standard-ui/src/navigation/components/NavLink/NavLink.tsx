import { type ClosedTagProps, mergeProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { NAV_LINK_PROPS } from './constants';
import { createNavLink } from './createNavLink';
import type { NavLinkProps } from './types';

type Props = ClosedTagProps & NavLinkProps;

export const NavLink: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, NAV_LINK_PROPS);

    const { $root } = createNavLink(locals);
    const $ = mergeProps($others, $root);

    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...$} />;
};
