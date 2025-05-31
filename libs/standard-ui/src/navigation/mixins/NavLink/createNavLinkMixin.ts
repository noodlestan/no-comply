import {
    type PickRequired,
    createClassList,
    computedProps,
    mergeProps,
} from '@no-comply/solid-primitives';

import { createLinkMixin } from '../Link';

import styles from './NavLinkMixin.module.scss';
import type { NavLinkMixinAPI, NavLinkMixinProps } from './types';

const defaultProps: PickRequired<NavLinkMixinProps, 'layout' | 'size' | 'highlight'> = {
    layout: 'h',
    size: 'normal',
    highlight: 'after',
};

export const createNavLinkMixin = (props: NavLinkMixinProps): NavLinkMixinAPI => {
    const { $root: $linkMixinRoot } = createLinkMixin(props);

    const layout = () => props.layout ?? defaultProps.layout;
    const size = () => props.size ?? defaultProps.size;
    const highlight = () => props.highlight ?? defaultProps.highlight;
    const classList = createClassList(styles, () => ({
        NavLink: true,
        [`layout-${layout()}`]: true,
        [`size-${size()}`]: true,
        nowrap: Boolean(props.nowrap),
        [`highlight-${highlight()}`]: true,
    }));
    const $root = computedProps({
        classList,
    });

    return {
        $root: mergeProps($linkMixinRoot, $root),
    };
};
