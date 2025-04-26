import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { type NavLinkAPI, createNavLink as createHeadlessNavLink } from '@noodlestan/headless-ui';

import { createLink } from '../Link';

import styles from './NavLink.module.css';
import type { NavLinkProps } from './types';

const defaultProps: PickRequired<NavLinkProps, 'size'> = {
    size: 's',
};

export const createNavLink = (props: NavLinkProps): NavLinkAPI => {
    const { $root: $linkRoot } = createLink(props);
    const { $root: $navLinkRoot } = createHeadlessNavLink(props);

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => ['NavLink', `NavLink-size-${size()}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($linkRoot, $navLinkRoot, $localRoot),
    };
};
