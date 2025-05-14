import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createLinkMixin as createHeadlessLinkMixin } from '@noodlestan/headless-ui';

import { createFocusRing } from '../../../focus';

import styles from './NavLink.module.css';
import type { NavLinkMixinAPI, NavLinkMixinProps } from './types';

const defaultProps: PickRequired<NavLinkMixinProps, 'size'> = {
    size: 'normal',
};

export const createNavLinkMixin = (props: NavLinkMixinProps): NavLinkMixinAPI => {
    const { $root: $linkMixinRoot } = createHeadlessLinkMixin();
    const { $root: $focusRing } = createFocusRing();

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => ['NavLink', `NavLink-size-${size()}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($linkMixinRoot, $focusRing, $localRoot),
    };
};
