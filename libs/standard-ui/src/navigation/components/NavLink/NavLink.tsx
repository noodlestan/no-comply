import { useNavigation } from '@noodlestan/context-ui';
import { type PickRequired, createClassList } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { Link, type LinkProps } from '../Link';

import styles from './NavLink.module.css';

export type NavLinkSize = 's' | 'm' | 'l';

export type NavLinkProps = LinkProps & {
    exact?: boolean;
    size?: NavLinkSize;
    active?: boolean;
    onClick?: () => void;
};

const defaultProps: PickRequired<NavLinkProps, 'exact' | 'size'> = {
    exact: false,
    size: 's',
};

export const NavLink: ParentComponent<NavLinkProps> = props => {
    const [locals, linkProps] = splitProps(props, ['exact', 'active', 'classList']);

    const { isCurrent } = useNavigation();

    const size = () => props.size ?? defaultProps.size;
    const isActive = () => isCurrent(props.href, props.exact);

    const classList = createClassList(
        styles,
        () => ({
            NavLink: true,
            [`NavLink-size-${size()}`]: true,
            'NavLink-is-active': isActive() || !!locals.active,
        }),
        () => locals.classList,
    );

    return (
        <Link classList={classList()} {...linkProps}>
            {props.children}
        </Link>
    );
};
