import {
    type NavLinkAPI,
    createFocusRing,
    createLink as createHeadlessLink,
    createNavLink as createHeadlessNavLink,
} from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';

import { createNavLinkMixin } from '../../mixins';

import type { NavLinkProps } from './types';

export const createNavLink = (props: NavLinkProps): NavLinkAPI => {
    const { $root: $linkRoot } = createHeadlessLink(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $navLinkRoot } = createHeadlessNavLink(props);
    const { $root: $navLinkMixinRoot } = createNavLinkMixin(props);

    return {
        $root: combineProps($linkRoot, $focusRingRoot, $navLinkRoot, $navLinkMixinRoot),
    };
};
