import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createLinkMixin as createHeadlessLinkMixin } from '@noodlestan/headless-ui';

import styles from './NavLink.module.scss';
import type { NavLinkMixinAPI, NavLinkMixinProps } from './types';

const defaultProps: PickRequired<NavLinkMixinProps, 'size'> = {
    size: 'normal',
};

export const createNavLinkMixin = (props: NavLinkMixinProps): NavLinkMixinAPI => {
    const { $root: $linkMixinRoot } = createHeadlessLinkMixin();

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => ({
        NavLink: true,
        nowrap: Boolean(props.nowrap),
        [`size-${size()}`]: true,
    }));
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($linkMixinRoot, $localRoot),
    };
};
