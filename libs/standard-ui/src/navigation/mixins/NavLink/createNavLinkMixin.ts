import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import { createLinkMixin } from '../Link';

import styles from './NavLinkMixin.module.scss';
import { $NAV_LINK_MIXIN } from './constants';
import type { NavLinkMixinAPI, NavLinkMixinProps } from './types';

const defaultProps: PickRequired<NavLinkMixinProps, 'layout' | 'size' | 'highlight'> = {
    layout: 'h',
    size: 'normal',
    highlight: 'after',
};

export const createNavLinkMixin = (props: NavLinkMixinProps): NavLinkMixinAPI => {
    const [locals, expose, compose] = createExposable($NAV_LINK_MIXIN, props);

    const { $root: $linkMixinRoot } = compose(createLinkMixin(locals));

    const layout = () => locals.layout ?? defaultProps.layout;
    const size = () => locals.size ?? defaultProps.size;
    const highlight = () => locals.highlight ?? defaultProps.highlight;
    const classList = createClassList(styles, () => ({
        NavLink: true,
        [`layout-${layout()}`]: true,
        [`size-${size()}`]: true,
        nowrap: Boolean(locals.nowrap),
        [`highlight-${highlight()}`]: true,
    }));

    const $root = computedProps({
        classList,
    });

    return exposeAPI(expose, '$root', {
        $root: combineProps($linkMixinRoot, $root),
    });
};
